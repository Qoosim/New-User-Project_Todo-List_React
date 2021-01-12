import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            userName: 'Name1'
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="bg-primary text-white text-center p2">
                            Todo List
                        </h2>
                    </div>

                </div>

            </div>
        )
    }
}

export default App;
