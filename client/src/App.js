import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NewStudent from './comp/newstudent';
import ViewCourse from './comp/viewcourse';
import NewCourse from './comp/newcourse';
import Home from './comp/home';

class App extends Component {
  state = { allstudents: "" }
  render() {
    return (
      <Router>

        <div className="App">
        <Link to="/newstudent">New Student</Link>
        <Link to="/newcourse">New Course</Link>
        <Link to="/viewcourse">View Course</Link>
        <Link className="home" to="/"><span role="img" aria-label="home">&#x1F3E0;</span></Link>
        
        <Route path="/newstudent" component={NewStudent} />
        <Route path="/newcourse" component={NewCourse} />
        <Route path="/viewcourse" component={ViewCourse} />
        <Route exact path="/" component={Home} />
       
        </div>
      </Router>
    );
  }
}

export default App;
