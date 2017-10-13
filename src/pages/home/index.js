import React, { Component } from 'react';
import Header from '../common/header';
import Footer from '../common/footer';
import Banner from './banner';

import { Tool } from '../../js/config/tool'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        console.log('----Home----componentDidMount：',this.props)
        //Tool.alert('天不刮风天不下雨天上有太阳', 123213);
        //Tool.confirm('您还未登录，请登录后再试！','确认',() => Tool.alert('今天星期二'),'不确认', () => Tool.alert('今天星期三'));
    }        
    render() {
        return (
            <div className="home"> 
                <div className="home-main container full-w">
                    <Banner />
                </div>
            </div>
        );
    }
}