import React, { Component } from 'react'

export class Card extends Component {
    state = {
        count:10
    }
    onIncrement = () => {
        this.setState({
            count: this.state.count+1
        })        
    }
    // The Event interface's preventDefault() method tells the user agent that if the event does not get explicitly handled, 
    // its default action should not be taken as it normally would be.
    handleClick = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.onIncrement}>+</button>
                
                <div>
                    <a href="https://www.lexicon.se/" onClick={this.handleClick}>Click me</a>
                </div>
                
            </div>
        )
    }
}

export default Card
