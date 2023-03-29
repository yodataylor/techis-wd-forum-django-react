import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import configureStore from './reducks/store/store';

import reportWebVitals from './reportWebVitals';

/* const history = History.createBrowserHistory();
export const store = createStore(history); */
const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <App <button type="button" onclick="document.getElementById('Example').innerHTML = Date()">a Javascript Date and Time</button>
<p id="Example"></p>
        </Router>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
