import React, { Component } from "react";
import Button from "./components/Button";
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
                <Button handleClick={this.handleClick} />
            </div>
        );
    }
}
export default App;
