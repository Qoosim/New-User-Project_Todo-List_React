import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: 'Qoosim'
        }
    }

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === 'Qoosim' ? 'Ayinde' : 'Qoosim'
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="bg-primary text-white text-center p2">
                            {this.state.userName} Todo List
                        </h2>
                        <button className='btn btn-secondary m-2' onClick={this.changeStateData}>Change

                        </button>
                    </div>

                </div>

            </div>
        )
    }
}

export default App;
