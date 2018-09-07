import React from 'react';

import { Switch, Route } from 'react-router';

import Header from './components/Header/Header';
import StartPage from './components/StartPage/StartPage';
import CardsTable from './components/CardsTable/CardsTable';
import ResultPage from './components/ResultPage/ResultPage';

const App = () => (
    <React.Fragment>
        <Header />
        <main>
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/game" component={CardsTable} />
                <Route exact path="/result" component={ResultPage} />
            </Switch>
        </main>
    </React.Fragment>
);

export default App;
