import React, { Component } from 'react'
import Navbar from './components/Navbar'
import TodoRows from './components/TodoRows'

class App extends Component {

    constructor() {
        super()
        this.state = {
            userName: 'Qoosim', 
            todoItems: [
                { action: 'Buy Milk', done: false },
                { action: 'Dentist at 5pm', done: false },
                { action: 'Go to Gym', done: false }
            ], 
            newTodo: ''
        }
    }

    updateValue = (event) => {
        this.setState({
            newTodo: event.target.value
        })
    }

    newTodo = () => {
        this.setState({
            todoItems: [
                ...this.state.todoItems,
                { action: this.state.newTodo, done: false }
            ]
        })
    }

    toggleDone = (todo) => {
        this.setState({
            todoItems: this.state.todoItems.map((item) => 
                item.action === todo.action ? { ...item, done: !item.done } : item
            )
        })
    }

    //changeStateData = () => {
     //   this.setState({
      //      userName: this.state.userName === 'Qoosim' ? 'Ayinde' : 'Qoosim'
       // })
    //}

    todoRows = () => this.state.todoItems.map((item) => ( 
        <TodoRows 
            key={item.action} 
            item={item} 
            callback={this.toggleDone} 
        /> 
    ))

    render() {
        return (
            <div className="container">
                <div className="row">
                    <Navbar name={this.state.userName} />
                    <div className="col-12">
                        <input 
                            className="form-control" 
                            value={this.state.newTodo} 
                            onChange={this.updateValue}
                        />
                        <button className="btn btn-primary" onClick={this.newTodo}>
                            Add
                        </button>
                    </div>
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Task</th>
                                    <th>Complete</th>
                                </tr>
                            </thead>
                            <tbody>{this.todoRows()}</tbody>
                        </table>
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
