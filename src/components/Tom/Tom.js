import React, { Component } from 'react';
import PropTypes from 'prop-types';

export  class Tom extends Component{
    constructor(){
        super();
    }

    render(){
        const { TestAction,val } = this.props;
        return <div>Tom component {val}
            <button onClick={()=>{TestAction(5)}}>Test</button>
        </div>
    }
} 

//Prop Definitions for this component
Tom.propTypes = {}
