

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

//Assets
import './index.css';

// Routes
import AppRouter from './routes';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <AppRouter />
    </Router>,
    document.getElementById('root')
    );

registerServiceWorker();