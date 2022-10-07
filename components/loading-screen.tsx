import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import {
  LoadingSpinnerContainer,
  LoadingSpinnerIcon,
} from "../styles/app.styles";

const LoadingScreen = () => {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerIcon icon={faSpinner} />
    </LoadingSpinnerContainer>
  );
};

export default LoadingScreen;
