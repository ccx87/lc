import React, { Component } from 'react';

import Nav from './nav';
import Content from './content';

// import './index.scss';

export default class Feedback extends Component {
    render() {
        return (
            <div className="feedback"> 
                <div className="feedback-main container full-w">
                    <Nav />
                    <Content />
                </div>
            </div>
        );
    }
}