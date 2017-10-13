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
                    <Link to="/help">帮助中心</Link>
                </div>
                <div className="text-right plans-stretch-1">
                    <lable className="lab">
                        <span className="btn">
                            <i className="icon-20 icons plans-stretch-0"></i>
                        </span>
                        <input type="text" className="input plans-stretch-1" placeholder="输入问题关键字，找答案"/>
                    </lable>
                </div>
            </div>
        );
    }
}