import React, { Component } from 'react';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import { Route, Switch, NavLink } from 'react-router-dom';

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
          <Route path="/" component={Courses} />
          <Route path="/users" component={Users} />
          <Route path="/courses" component={Courses} />
        </Switch>
      </div>
    );
  }
}

export default App;
