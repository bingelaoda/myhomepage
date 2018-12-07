import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Main from './page/Main'
import Photo from './page/Photo'
import Project from './page/Project'
import Self from './page/Self'

class App extends Component {
    render() {
        return (

            <Router>
                <div>
                    <Route path="/" exact={true} component={Main}/>
                    <Route path="/photo" component={Photo}/>
                    <Route path="/project" component={Project}/>
                    <Route path="/self" component={Self}></Route>
                </div>
            </Router>
        );
    }
}

export default App;
