import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//Routers
import MainRouter from './components/MainRouter';

ReactDOM.render(
    <MainRouter />,
    document.getElementById('root')
);
