import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
   constructor(props) {
     super(props);
     this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false },
         { description: 'Buy new dishes', isCompleted: false }
       ],
       newTodoDescription: ''
     };
   }
 //const value = this.state.todos[0];
  // delete(value){
    // return value === this.state.todos[0];
   //}

   //deleteToDo = (value) => {
  //   return value !== this.state.todos[0];
  // }

deleteToDoHandler() {
  
    this.setState({ 
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false }
       ]});
  }


   handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

   handleSubmit(e) {
        e.preventDefault();
        if (!this.state.newTodoDescription) { return }
        const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
     this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
      }

   toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }

  //deleteTodoHandler={ () => this.deleteToDoHandler(index)}

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
             <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) }  />
          )}
        </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
            <input type="submit" />
          </form>
          <button onClick={this.deleteToDoHandler.bind(this)}>Delete</button>
      </div>
    );
  }
}

export default App;
