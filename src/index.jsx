import { render } from 'react-dom';
import { Provider }  from 'react-redux';
import './index.scss';
import App from './containers/App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);