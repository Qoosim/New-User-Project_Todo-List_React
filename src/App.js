import React, { Component } from 'react'

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


    //changeStateData = () => {
     //   this.setState({
      //      userName: this.state.userName === 'Qoosim' ? 'Ayinde' : 'Qoosim'
       // })
    //}

    todoRows = () => 
        this.state.todoItems.map((item) => (
            <tr key={item.action}>
                <td>{item.action}</td>
                <td>
                    <input 
                        type="checkbox" 
                        checked={item.done}
                        onChange={() => this.toggleDone(item)}
                    />
                </td>
            </tr>
        ))

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="bg-primary text-white text-center p2">
                            {this.state.userName} Todo List
                        </h2>
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
