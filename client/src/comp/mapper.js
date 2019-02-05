import React, { Component } from 'react';
import '../App.css';

class Mapper extends Component {

  render() {
    return (<div className="items">
      <h2 >
        {
          this.props.name
        }
      </h2>
      <span onClick={this.deleter.bind(this)} title={"delete " + this.props.name} className="x">&times;</span>
      <p>age: {this.props.age}</p><br />
      <img className="itemImg" src={this.props.img} alt={this.props.name} /><br />
      <p>Attending course: {this.props.course}</p>
    </div>
    );
  }

  async deleter() {
    var imgval = this.props.img
    var nameval = this.props.name
    debugger;
    var res = await fetch('http://localhost:3000/deleter?img=' + imgval + "&name="+ nameval)

     // eslint-disable-next-line
    const content = await res.json();
    this.props.fetcher()

  }

}

export default Mapper;
