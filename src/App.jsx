import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
  this.state={text:"house",hasLoaded:false} 
this.handleInput=this.handleInput.bind(this)
this.handleClick=this.handleClick.bind (this)  
}
  handleInput(e){
          this.setState({text:e.target.value })
  }

handleClick(){
this.setState({hasLoaded: ! this.state.hasLoaded})

}



  render() {
    if(this.state.hasLoaded)
  {return (
    <div>
    <h1>{this.state.text }</h1>
    <hr />
    <input type="text" aria-label="title" onChange={this.handleInput}/>
  <button onClick={this.handleClick}>Unload </button>
  </div>

  )}

    else 
  {return  (
    <div>
      <h1>loading </h1>
      <button onClick={this.handleClick}>Load</button>
       </div>
   )}

    
  }
}

export default App;
