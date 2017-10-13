import React, { Component } from 'react';

import Banner from './banner';
import Nav from './nav';
import Sidebar from './sidebar';
import List from './list';
// import './index.scss';

export default class Help extends Component {
    render() {
        return (
            <div className="help"> 
                <Banner />
                <div className="help-main container full-w">
                    <Nav />
                    <div className="content plans">
                        <Sidebar />
                        <List />
                    </div>
                </div>
            </div>
        );
    }
}