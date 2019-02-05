import React, { Component } from 'react';
import '../App.css';

class NewStudent extends Component {
  state = {
    password: Math.random().toString(36).substr(2, 9),
    name: "",
    age: "",
    course: "",
    img: "",
    classer:"invisi",
    classer2:"visi"
  }



  render() {

    return (
      <div>
      <div className={this.state.classer2}><br /><br /><br />
        <h4>Insert new student to database <br/>OR<br/> Update existing student via auto generated key </h4><br />
        <input type='text' required placeholder='Enter name' name='name' value={this.state.name} onChange={this.handleChange.bind(this)}></input><br />
        <input type='number' required placeholder='Enter age' name='age' value={this.state.age} onChange={this.handleChange.bind(this)}></input><br />
        <input type='text' required placeholder='Enter course id' name='course' value={this.state.course} onChange={this.handleChange.bind(this)}></input><br /><br />
        <input type='text' id='idd' placeholder='make a unique id' name='password' value={this.state.password} onChange={this.handleChange.bind(this)}></input><br />
        <input type='text' required placeholder='Insert pic url' name='img' value={this.state.img} onChange={this.handleChange.bind(this)}></input><br /><br />
        <input type="submit" onClick={this.fetcher.bind(this)} value="Submit"></input>
        <br/><br/>
        </div>
        <p className={this.state.classer}>Thanks for signing {this.state.name}!</p>
        
      </div>
    );
  }
  handleChange(ev) {
    this.setState({ [ev.target.name]: ev.target.value })
  }

  async fetcher() {
    var res = await fetch('http://localhost:3000/newstudent', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });
    // eslint-disable-next-line
    const content = await res.json();
if(content.msg){
  alert(content.msg)
}
else{
    this.setState({classer:"vs"})
    this.setState({classer2:"invisi"})
  }
  }

}

export default NewStudent;
