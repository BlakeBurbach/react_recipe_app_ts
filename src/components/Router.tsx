import * as React from 'react';
import {
    BrowserRouter,
    Route,
    Switch } from 'react-router-dom';

import App from '../App';
import Recipe from '../components/Recipe/Recipe';

const Router: React.SFC = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/recipe/:id" component={Recipe} />
        </Switch>
    </BrowserRouter>
);

export default Router;