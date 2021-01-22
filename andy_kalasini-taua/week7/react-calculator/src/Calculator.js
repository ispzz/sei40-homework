import React from 'react'

class Calculator extends React.Component {

  // Like "initialize" in a Ruby class; we need a constructor function so that we can initialize the state for this component

  constructor(){

    // stat is just an instance variable, always an object; in Vue this was called 'data:'
    this.state = {
      firstNum: 0
    };

//We need the correct value of this inside the updateFirstNum() event handler, so that we can call this.setstat() to updat the stat to keep track of what was typed into the text field. But wen you use a function or method as an event handler, it Loses its original value for this - it becomes undefined and that is core js behaviour, not React specific. To force this event handler to remember the corret value of this, we have to creatd a new version of the function using .bind() - the argument you give to bind() becomes the value of this in the new function - here the current value of this in the constructor function is what we want so we use this as it is right now - that is the new version of updateFirstNum will see too. 

this.updateFirstNum = this.updateFirstNum.bind( this );

  } // constructor()


  updateFirstNum( ev ){
    console.log('First num updated!', ev.target.value);

    console.log('this', this);
  } // updateFirstNum

  this.setState({ firstNum: ev.target.value });

} //updateFirstNum

render(){

 return (
   <div>
      <h1>CalculatoReact</h1>

      <input type="text" placeholder="First number" />

      <input type="text" placeholder="Second number" />

   </div>

);

}  // render(

} // class Calculator

export default Calculator
