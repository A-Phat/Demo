import React, { Component } from 'react';
import Box2 from './Box2';

class Header extends Component {
    constructor(props) {
        super();

        this.state = { date: new Date() };
    }
    tick(){
        this.setState({ date: new Date() });
    }
    componentDidMount() {
        this.timer = setInterval( () => this.tick(), 1000*this.props.isShowTime);
        console.log('componentDidMount');

    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log('componentWillUnmount');
    }
    render() {
        return (
            <div>
                <h1>Hello React  {this.state.date.toLocaleTimeString()}.</h1>
                <hr></hr>
               
            </div>
        )

    }
}

export default Header;