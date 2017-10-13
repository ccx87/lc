import React, { Component } from 'react';

import Login from './login';
import Regist from './regist';
import Third from './third';

// import './index.scss';

const SHOW_LIANTY_LOGIN = 'SHOW_LIANTY_LOGIN',
      SHOW_REGIST_PHONE = 'SHOW_REGIST_PHONE',
      SHOW_THIRD_LOGIN = 'SHOW_THIRD_LOGIN';
      
export default class UserLoginOption extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            filter: SHOW_LIANTY_LOGIN,
            openId: null                
        };
        this.handleShow = filter => {
            this.setState({ filter })
        }              
    }      
    render() {
        const { filter, openId } = this.state
        return (
            <div className="user-login-option">
                <div className="container full-w-h">
                    <p className="logo"><i></i></p>
                    {
                        filter === SHOW_LIANTY_LOGIN && <Login onHandleShow={this.handleShow} {...this.props}/>
                    }
                    {
                        filter === SHOW_REGIST_PHONE && <Regist onHandleShow={this.handleShow} {...this.props}/>
                    }
                    {
                        filter === SHOW_THIRD_LOGIN && <Third onHandleShow={this.handleShow} {...this.props} openId={openId}/>
                    }               
                </div> 
            </div>
        );
    }
}