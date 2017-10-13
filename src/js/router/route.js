import React, { Component } from 'react'
import { Router, Route, IndexRoute, Redirect, browserHistory, hashHistory } from 'react-router'
import { routerActions, syncHistoryWithStore } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

import store from '../store/store';

import Apps from '../../pages/app/app'
import Home from '../../pages/home/index' //首页
import Login from '../../pages/login/index' //登录注册页面
import Search from '../../pages/search/index' //识图页面
import Design from '../../pages/design/index' //设计导航
import Help from '../../pages/help/index' //帮助中心
import Feedback from '../../pages/feedback/index' //意见反馈

const baseHistory = hashHistory
//17线上用hashHistory
//本地用browserHistory或hashHistory
const history = syncHistoryWithStore(hashHistory, store)

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
})
export const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Apps}>
            <IndexRoute component={Home} />
            <Route path="login(/:login)" component={Login} />
            <Route path="search(/:search)" component={UserIsAuthenticated(Search)} />
            <Route path="design(/:design)" component={Design} />
            <Route path="help(/:help)" component={Help} />
            <Route path="feedback(/:feedback)" component={Feedback} />
            <Redirect from='*' to='/'  />
        </Route>
    </Router>
);
export default RouteConfig;