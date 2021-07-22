import React, { Component } from 'react'
import emogiList from './emogiList.json'

export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }

    render() {
        return (
            <div>
                <h1>Emoji Search</h1>
                <input type='text' placeholder='Search any emogi ...........' className='prompt'
                     value={this.state.value} onChange={this.handleChange} ></input>
                <div className='emogi-main-card'> 
                    {  
                        emogiList.filter(item =>(item.keywords).includes(this.state.value)).slice(0,10).map(filterValue => (
                            <h2 className='emoji-card'>{filterValue.symbol}</h2>
                        ))
                    } 
                </div>
            </div>
        )
    }
}
export default SearchBar


