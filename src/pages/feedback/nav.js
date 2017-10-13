import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav rel plans plans-align-center">
                <div className="text-left plans-stretch-1">
                    <i className="icon-20 icons"></i>
                    <span>您当前的位置：</span>
                    <Link to="/">首页</Link>
                    <span className="def-sp">{'>'}</span>
                    <Link to="/help">意见反馈</Link>
                </div>
            </div>
        );
    }
}