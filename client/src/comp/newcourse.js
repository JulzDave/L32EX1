import React, { Component } from 'react';
import '../App.css';

class NewCourse extends Component {
    state={
        course_name:"",
        tutor:"",
        classer:"invisi",
        classer2:"visi"
    }
  render() {
    return (
      <div>
      <div className={this.state.classer2}><br /><br /><br />
      <h4>Insert new course to database</h4><br/>
        <input type='text' placeholder='Enter course name' name='course_name' value={this.state.course_name} onChange={this.handleChange.bind(this)}></input><br/>
        <input type='text' placeholder='Enter tutor name' name='tutor' value={this.state.tutor} onChange={this.handleChange.bind(this)}></input><br/><br/>
        <input type="submit" onClick={this.fetcher.bind(this)} value="Submit"></input>
      </div>
      <br/><br/>
      <p className={this.state.classer}>Course created!</p>
        </div>
    );
  }
  handleChange(ev){
      this.setState({[ev.target.name]:ev.target.value})
  }

  async fetcher(){
      var res = await fetch('http://localhost:3000/newcourse', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      });
      // eslint-disable-next-line 
      const content = await res.json(); 
      if(content.msg){
        alert(content.msg)
      }
      else{
          this.setState({classer:"vs2"})
          this.setState({classer2:"invisi"})
        }
  }
}

export default NewCourse;
