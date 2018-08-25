import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import './styles/styles.css';
import Home from './Home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));
registerServiceWorker();
