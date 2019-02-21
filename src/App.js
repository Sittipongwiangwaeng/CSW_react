// import React, { Component } from 'react';
// import './App.css';

// class App extends Component {
//  state = { count:0 }
//  constructor(props) {
//    super(props)
   
//  }

//  add = () => {
//    this.setState({count:this.state.count+1})
//  }
//  minus = () => {
//    this.setState({count:this.state.count-1})
//  }
//  clr = () => {
//    this.setState({count:this.state.count=0})
//  }
//  render() {
//    return (
//      <div className="App">
//        <h1>Counter</h1>
//          {this.state.count} <br/>
//         <button onClick={this.add}> Add </button>
//         <button onClick={this.minus}> Minus </button>
//         <button onClick={this.clr}> Clear </button>
//      </div>
//    );
//  }
// }
// export default App

import React, {Component} from 'react';
import './App.css';
import TaskList from './todo/TaskList'
import InputTask from "./todo/InputTask";
import Github from "./Github";

class App extends Component {

   state = {
       tasks: [{id: 1, task: 'Do homework', data:'AA'},
               {id: 2, task: 'Read book'}],
       id:3
   }

   addTask = (task,data) => {
       this.setState({
                tasks: [...this.state.tasks, {id: this.state.id,task,data } ],
                id: this.state.id+1  })
   }

   render() {   


       return (
           <div className="App">
               <h1>Todo</h1>
               <TaskList tasks={this.state.tasks}/>
               <InputTask addTask={this.addTask} id={this.state.id}/>
               <Github/>
               <br/>
           </div>
       );
   }
}

export default App;