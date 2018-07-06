import React, { Component } from 'react';

 class ToDo extends Component {
   render() {
     return (
       <li>
       <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete }  onClick={ this.props.deleteToDoHandler
       }/>

      <span>{this.props.description}</span>

      <button onClick={this.props.deleteToDoHandler}></button>

      </li>
  );
}
}


 export default ToDo;
