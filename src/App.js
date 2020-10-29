import React, { Component } from 'react';
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

class App extends Component {
  render() {
    return (

      <BrowserRouter basename="/my-app">
        <div className="App">
          <header>
            <nav>
              <ul style={{
                listStyle: 'none',
              }}>
                <li><NavLink to="/users" >Users</NavLink></li>
                <li><NavLink to="/courses" >Courses</NavLink></li>
              </ul>
            </nav>
          </header>

          <Switch>
            <Redirect from="/all-courses" to="/courses" />
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            {/* Path Parameters */}
            {/* <Route path="/course/:id/:title" component={Course} /> */}

            {/* Query Parameters */}
            <Route path="/course" component={Course} />
            {/* Fallback */}
            <Route render={
              () => (
                <div>Please enter the write path URL</div>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
