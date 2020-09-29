import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Landing from './Pages/Landing';
import CountryList from './Pages/CountryList';
import NotFound from './Pages/404';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/listofcountries" exact component={CountryList} />
                <Route path="/error" component={NotFound} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;