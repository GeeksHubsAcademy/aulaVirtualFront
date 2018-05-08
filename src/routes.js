
import React from "react";
import { Route, Switch } from 'react-router-dom';

//Components
import App from './App';
import Formulario from './componentes/Formulario';
import Page404 from './componentes/Page404';
import Login from './componentes/Login';
import Bootcamp from './componentes/Bootcamp';


const AppRouter = () =>
    <App>
        <Switch>
            <Route exact path="/" component={ Login } />
            <Route exact path="/Formulario" component={ Formulario } />
            <Route exact path="/Login" component={ Login } />
            <Route exact path="/Bootcamp" component={ Bootcamp } />
            <Route component={ Page404 } />
        </Switch>
    </App>;

export default AppRouter;
