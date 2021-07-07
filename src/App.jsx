import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  this.state={text:"house",hasLoaded:false} 

  }
  handleInput(e){
          this.setState(text:e.target.value )
  }

handleClick(){
this.setState({hasLoaded: ! this.state.hasLoaded})

}



  render() {
    return (
      <div>
        <h1>Welcome to React!</h1>
        <hr />
        <input type="text" aria-label="title" onChange={this.handleInput}/>
      <button onclick={this.handleClick}></button>
      </div>
    );
  }
}

export default App;
