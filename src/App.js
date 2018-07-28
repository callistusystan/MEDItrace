import React, { Component } from 'react';
import MobileHackathon from './components/react-mobile-hackathon';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BodyPage from './pages/BodyPage';
import SymptomsPage from './pages/SymptomsPage';

class App extends Component {
    render() {
        return (
            <MobileHackathon>
                <Switch>
                    <Route path='/body' component={BodyPage} />
                    <Route exact path='/' component={HomePage} />
                    <Route path='/symptoms' component={SymptomsPage} />
                </Switch>
            </MobileHackathon>
        );
    }
}

export default App;