import { render } from "react-dom";
import { Provider } from "react-redux";
import "@fontsource/playfair-display";
import "@fontsource/arvo";
import "@fontsource/dosis";
import "./index.scss";
import App from "./components/app/App";
import store from "./store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
