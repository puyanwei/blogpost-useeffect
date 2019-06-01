import React, { Component } from "react";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            number: 0
        };
    }

    handleClick = () => {
        this.setState({ number: this.state.number + 1 });
    };

    render() {
        return (
            <div className="app">
                <p>Number:{this.state.number}</p>
                <button onClick={() => this.handleClick()}>Adds One</button>
            </div>
        );
    }
}
export default App;
