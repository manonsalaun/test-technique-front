import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MovieDetail from './pages/movie-detail';
import MovieList from './pages/movie-list';

const App: FunctionComponent = () => {

    return (
        <Router>
            <div>
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center"> Movie List </Link>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/" component={MovieList} />
                    <Route exact path="/movies" component={MovieList} />
                    <Route exact path="/movies/:id" component={MovieDetail} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;