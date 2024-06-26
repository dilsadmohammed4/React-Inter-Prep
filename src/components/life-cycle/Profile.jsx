import React, { Component } from "react";
import Counter from "./Counter";

export default class Profile extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
        };
    }
    componentDidMount() {
        console.log("componentDidMount : When component load 1st Time.");
    }
    increment() {
        this.setState({
            count: this.state.count + 1,
        });
    }
    render() {
        return (
            <>
                <Counter number={this.state.count} />
                <button onClick={() => { this.increment(); }}>
                    Click Me Using Arrow Function
                </button>
                <button onClick={this.increment.bind(this)}>Click Me Using Bind</button>
            </>
        );
    }
}
