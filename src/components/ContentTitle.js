import React, { Component } from 'react';

import './ContentTitle.css'



class ContentTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            text: ''
        }

    }



    render() {

        const { title, text } = this.props;
        
        return (
            <div id="main-div">
                <div className="title-content">
                    <h1>{title}</h1>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}


export default ContentTitle