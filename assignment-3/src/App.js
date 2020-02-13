import React, { Component } from 'react';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import NotFound from './components/NotFound/NotFound';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul
          style={{
            listStyle: 'none',
            textAlign: 'center'
          }}
        >
          <li>
            <NavLink to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Courses</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/courses" component={Courses} />
          <Route path="/users" component={Users} />
          <Redirect from="/all-courses" to="/courses" />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
