import React, { Component } from 'react';

//帮助中心左侧栏
export default class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar plans-stretch-0">
                <ul className="sidebar-ul">
                    <li>常见问题</li>
                    <li>注册与登录</li>
                </ul>   
            </div>
        );
    }
}