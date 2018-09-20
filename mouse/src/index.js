import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './AppRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
