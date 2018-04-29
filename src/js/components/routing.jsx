import React from 'react';
import {
    HashRouter,
    Route,
    NavLink as Link,
    Switch,
    NavLink,
  } from 'react-router-dom';
import {HomePage} from './_homePage.jsx';
import {Navigation} from "./_navigation.jsx";


class Routing extends React.Component{
    render() {
        return <HashRouter>
            <div>
                <Navigation/>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route path='*' component={NotFound}/>
                </Switch>
            </div>
        </HashRouter>;
    }
}

export {Routing}
