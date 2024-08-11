import React, { Component } from "react"

export class HelloReact extends Component {
  constructor() {
    super();
    this.state = {
      number: 1
    }
  }

  addCount = () => {
    this.setState( {
      number: this.state.number + 1
    })
  }

  render(){
    return (
      <>
        <h1>Hello React component.</h1>
        <div style={{display: "flex", flexFlow: "nowrap row"}}>
          <div>count is:</div>
          <div>{this.state.number}</div>
          <hr/>
          <button onClick={this.addCount}>add</button>
        </div>
      </>
    )
  }
}