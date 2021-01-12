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
            ]
        }
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
                        <button 
                            className='btn btn-secondary m-2' 
                            onClick={this.changeStateData}>
                            Change
                        </button>
                    </div>
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Task</th>
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
