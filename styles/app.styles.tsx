import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;
const AppMain = styled.div``;

const BodyContainer = styled.div`
  width: 100%;
`;

const LoadingSpinnerContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  height: 100vh;
`;

const LoadingSpinnerIcon = styled(FontAwesomeIcon)`
  animation: fa-spin 1.2s infinite;
  font-size: 5rem;
`;

export {
  AppContainer,
  BodyContainer,
  LoadingSpinnerContainer,
  LoadingSpinnerIcon,
  AppMain,
};
