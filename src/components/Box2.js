import React, { Component } from 'react';

class Box2 extends Component{
    constructor(props){
        super();
    }
    render(){
        return (
            <div>
                Box2:
                <input type='text' value={this.props.clock}></input>
            </div>
        );
    }
}
export default Box2;