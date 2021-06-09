import React, { Component } from 'react'

export class App extends Component {
    state = {
        txt: 'hello',
        content: 'textera',
        city: 'stockholm',
        isChecked: false
    }
   
    handleForm = e => {
        const target = e.target
        // according to the type to get the value
        const value = target.type === 'checkbox'
            ? target.checked
            : target.value
        // get the name property, name= state, so we can change value of the name.
        const name = target.name
        
        this.setState({
            [name]: value
        })
    }
    /* handleChangeTxt = e => {
        this.setState({
            txt: e.target.value
        })        
    }
    handleChangeContent = e => {
        this.setState({
            content: e.target.value
        })
    }
    handleChangeCity = e => {
        this.setState({
            city: e.target.value
        })
    }
    handleChangeCheck = e => {
        this.setState({
            isChecked: e.target.checked
        })
    } */

    render() {
        return (
            <div>
                {/* input */}
                <input type="text" name="txt" value={this.state.txt} onChange={this.handleForm}></input>
                <br />
                {/* textera */}
                <textarea type="textera" name="content" value={this.state.content} onChange={this.handleForm}></textarea>               
                <br />
                {/* select */}
                <select value={this.state.city} name="city" onChange={this.handleForm}> 
                    <option value="">--Please choose an option--</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="solna">Solna</option>
                    <option value="lund">Lund</option>
                </select>
                <br />
                {/* checkbox */}
                <input type="checkbox" name="isChecked" checked={this.state.isChecked} onChange={this.handleForm}></input>
            </div>
        )
    }
}

export default App
