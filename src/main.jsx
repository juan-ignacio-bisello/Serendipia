import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SerendipiaApp } from '../SerendipiaApp.jsx';
import { store } from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={ store }>
    <SerendipiaApp />
  </Provider>
)
