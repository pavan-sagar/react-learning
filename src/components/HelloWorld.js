import React from 'react';
import { Component } from 'react';



export class HelloWorld extends Component{
    render(){

        return(
        <div style={{width:'70%',margin:'auto',marginTop:'20rem'}}>
        <h1>Hello to the React World, {this.props.username}</h1>
        </div>
        )
    }
}
