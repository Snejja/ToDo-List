import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './Components/App';
import store from './Redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
