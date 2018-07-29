import React, { Component } from 'react';
import MobileHackathon from './components/react-mobile-hackathon';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BodyPage from './pages/BodyPage';
import SymptomsPage from './pages/SymptomsPage';
import HistoryPage from './pages/HistoryPage';
import AnalyticsPage from './pages/AnalyticsPage';

class App extends Component {
    render() {
        return (
            <MobileHackathon>
                <Switch>
                    <Route path='/history' component={HistoryPage} />
                    <Route path='/new' component={BodyPage} />
                    <Route path='/symptoms' component={SymptomsPage} />
                    <Route path='/analytics' component={AnalyticsPage} />
                    <Route exact path='/' component={HomePage} />
                </Switch>
            </MobileHackathon>
        );
    }
}

export default App;