import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main/Main';
import Counter from '../components/Counter/Counter';
import IncrementForm from '../components/Counter/IncrementForm';
//player 
import Player from '../components/Player/Player';


export default class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main} />
                        <Route path="/counter" render={() => (<Main DefaultComponent={Counter} />)} />
                        <Route path="/form" render={() => (<Main DefaultComponent={IncrementForm} />)} /> 
                        {/* player */}
                        <Route path='/player' render={() => (<Main DefaultComponent={Player} />)} /> 
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}