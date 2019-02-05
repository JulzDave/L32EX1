import React, { Component } from 'react';
import '../App.css';
import Mapper from './mapper';

class ViewCourse extends Component {
    state = {
        courseid: "",
        data: [],
        courseType: ""
    }
    render() {
        return (

            <div className="new"><br /><br /><br />
                <h4>View a course from the database</h4><br />
                <input type='text' id="courseid" placeholder='Enter course ID' name='courseid' value={this.state.courseid} onChange={this.handleChange.bind(this)}></input><br /><br />
               
                <input type="submit" onClick={this.fetcher.bind(this)} value="view"></input>
                <div>
                    <br />
                    <h2>{this.state.courseType}</h2>
                    {this.state.data.map(a => <Mapper name={a.name} age={a.age} course={a.course} img={a.img} fetcher={this.fetcher.bind(this)} key={Math.random().toString(36).substr(2, 9)} />)}
                </div>
            </div>
        );
    }
    handleChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value })
    }

    async fetcher() {
        var val = this.state.courseid;
        var res = await fetch('http://localhost:3000/viewcourse?courseid=' + val);
debugger;
        const content = await res.json();

        if (content.coursetype[0]) {
            this.setState({ data: content.items, courseType: "Selected Course: " + content.coursetype[0].course_name })
        }
        else {
            alert("No such course")
        }
    }

}

export default ViewCourse;
