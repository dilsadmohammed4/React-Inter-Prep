import React, { Component } from 'react'

export default class Counter extends Component {

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.number !== this.props.number) {
            console.log("Component updated.");
        }
    }
    render() {
        return (
            <>
                <h1>{this.props.number}</h1>
            </>
        )
    }
}
