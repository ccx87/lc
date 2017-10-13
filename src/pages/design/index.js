import React, { Component } from 'react';

import ScrollUp from '../common/scrollUp';
import Sidebar from './sidebar'
import List from './list'
// import './index.scss';

//设计导航
export default class Design extends Component {
    render() {
        return (
            <div className="design">
                <div className="design-main plans">
                    <Sidebar />
                    <List />
                </div>
                <ScrollUp />             
            </div>
        );
    }
}