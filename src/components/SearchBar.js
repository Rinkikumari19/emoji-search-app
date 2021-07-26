import React, { Component } from 'react'
import emogiList from './emogiList.json'
import SubmitButton from './SubmitButton'
// export class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
//         this.handleChange = this.handleChange.bind(this);
//         // this.handleSubmit = this.handleSubmit.bind(this);
//       }
    
//       handleChange(event) {
//         this.setState({value: event.target.value});
//       }
     
      
//     render() {
//         return (
//             <div>
//                 {/* <form onSubmit={this.handleSubmit}> */}
//                     <h1>Emoji Search</h1>
//                     <input type='text' placeholder='Search any emogi ...........' className='prompt'
//                         value={this.state.value} onChange={this.handleChange} ></input>
//                     {/* <input type="submit" value="Submit" /> */}
//                         {/* <button className='click-btn' onClick={()=>this.handleSubmit()} onSubmit={this.handleSubmit}>Click</button> */}
                        
//                     <div className='emogi-main-card' > 
//                         {  
//                             emogiList.filter(item =>(item.keywords).includes(this.state.value)).slice(0,10).map(filterValue => (
//                                 <h2  className='emoji-card'><p className='titles'>{filterValue.title}</p>{filterValue.symbol}</h2>
//                             ))
//                         } 
//                     </div>
//                 {/* </form> */}
//             </div>
//         )
//     }
// }
// export default SearchBar






export class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '' 
        };
        // console.log(this, "hello hii")
        this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handlesubmit.bind(this);


      }
    
      handleChange(event) {
        // console.log("hello456")
        this.setState({value: event.target.value});

      }
     
      
      handlesubmit() {
        // alert('A name was submitted: ' + this.state.value);
        console.log('hiii');  
      }
      
    render() {
        
        return (
            <div>
                
                    <h1>Emoji Search</h1>
                    <input type='text' placeholder='Search any emogi ...........' className='prompt'
                        value={this.state.value} onChange={this.handleChange} ></input>
                        <button className='click-btn' onClick={()=> this.handlesubmit()} value={this.state.value} >Submit </button>
                    <SubmitButton />                       
                    <div className='emogi-main-card' > 
                        {/* {  
                            // emogiList.filter(item =>(item.keywords).includes(this.state.value)).slice(0,10).map(filterValue => (
                            //     <h2  className='emoji-card'><p className='titles'>{filterValue.title}</p>{filterValue.symbol}</h2>
                            // ))
                           
                            emogiList.slice(0,10).map(item => (
                                <h2 className='emoji-card'><p className='titles'> {item.title}</p>{item.symbol}</h2>
                            ))
                        }  */}
                        {/* {
                            true===true?(
                                emogiList.filter(item =>(item.keywords).includes(this.state.value)).slice(0,10).map(filterValue => (
                                                <h2  className='emoji-card'><p className='titles'>{filterValue.title}</p>{filterValue.symbol}</h2>
                                            ))
                            ):false!== false?(
                                emogiList.slice(0,10).map(item => (
                                    <h2 className='emoji-card'><p className='titles'> {item.title}</p>{item.symbol}</h2>
                                ))
                            )
                        } */}
                         <div className="row">
                            {'failed' === 'failed' ? (
                            <div className="alert alert-danger" role="alert">
                                 { emogiList.filter(item =>(item.keywords).includes(this.state.value)).slice(0,10).map(filterValue => (
                                                <h2  className='emoji-card'><p className='titles'>{filterValue.title}</p>{filterValue.symbol}</h2>
                                            ))
                                 }
                            </div>
                            ) : null}
                        </div>
                        
                        {/* {emogiList.filter(item =>(item.keywords).includes(this.state.value)).slice(0,10).map(filterValue => (
                                                <h2  className='emoji-card'><p className='titles'>{filterValue.title}</p>{filterValue.symbol}</h2>
                                            ))
                        } */}

                    </div>
                
                
            </div>
        )
    }
}
export default SearchBar