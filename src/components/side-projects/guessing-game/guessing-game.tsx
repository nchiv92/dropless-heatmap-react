import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./guessing-game.scss";
import { fetchData } from "../../../store/reducers/FootballDataReducer";
import { RootState } from "../../../store";
import { FootballData } from "../../../utils/types";

interface ItemProps {
  item: FootballData;
  currentStep: number;
  index: number;
}
const Item = (props: ItemProps) => {
  const { currentStep, index } = props;
  const getclass = () => {
    if (currentStep > index) {
      return "guessed";
    } else if (currentStep === index) {
      return "current";
    }
    return "awaiting";
  };
  return (
    <span className={`GuessingGame__item ${getclass()}`}>
      {props.item.type}: {props.item.value}
    </span>
  );
};

const GuessingGame = (props: any) => {
  const [fetching, setFetching] = useState(true);
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();
  const data: FootballData[] = useSelector((state: RootState) => {
    return state.footballData.data;
  });
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [data]);

  const checkInput = (event: any) => {
    event.preventDefault(); // 👈️ prevent page refresh
    const index = data.findIndex((x) => x.type === "name");
    const correctAnswer = data[index].value;
    if (answer === correctAnswer) {
      setSuccess(true);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <div className="GuessingGame">
      <form onSubmit={(e) => checkInput(e)}>
        <input type={"text"} onChange={(e) => setAnswer(e.target.value)} />
        <button type={"submit"}>Submit answer</button>
        {success && <span>CORRECT!</span>}
      </form>
      {fetching
        ? "Loading"
        : data.map((item, i) => {
            return (
              item.type !== "name" && (
                <Item item={item} currentStep={currentStep} index={i} key={i} />
              )
            );
          })}
    </div>
  );
};

export default GuessingGame;
