import React, { Component} from 'react';

class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>Welcome {this.props.name} {this.props.id}</h1>
                {/* {props.children} */}
            </div>
        )
    }
}
export default Welcome