import React, { Component } from 'react'
import emogiList from './emogiList.json'

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handlesubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }


    render() {
        return (
            <div>
                <h1>Emoji Search</h1>
                <input type='text' placeholder='Search any emoji ...........'
                    value={this.state.value} onChange={this.handleChange} ></input>
                <button className='click-btn' value={this.state.value} >Submit </button>
                <div className='emogi-main-card' >
                    {emogiList.filter(item => (item.keywords).includes(this.state.value)).slice(0, 10).map((filterValue, index) => (
                        <h2 className='emoji-card' key={index}>
                            <p className='titles'>{filterValue.title}</p>
                            {filterValue.symbol}
                        </h2>
                    ))
                    }
                </div>
            </div>
        )
    }
}
export default SearchBar