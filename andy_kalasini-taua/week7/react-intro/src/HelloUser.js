import React from 'react';

class HelloUser extends React.Component {

render(){

  // console.log('props', this.props );

   return (
    <div>
    <h2>Hello, { this.props.name }</h2>
    </div>
  );


} //render()

} // class HelloUser


// Make this class available to any other component that imports thsi file
export default HelloUser;
