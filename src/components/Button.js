import React, { Component } from "react";

class Button extends Component {
    // componentWillReceiveProps(nextProps) {
    //     if (this.state.number === prevState) {
    //         this.handleClick();
    //     }
    // }

    render() {
        return <button onClick={this.props.handleClick}>Add one</button>;
    }
}
export default Button;
