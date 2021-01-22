import React from 'react';

class Clickr extends React.Component {

 render(){
   return (
     <div>
     <button onClick={ this.handleClick }>MAYBE ERASE HISTORY</button>
     </div>
   );
 }


}

export default Clickr;
