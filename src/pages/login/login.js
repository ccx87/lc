import React, { Component, PropTypes } from 'react'
import { routerActions } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import CryptoJS from 'crypto-js'
import isEmpty from 'lodash.isempty'

import { login } from '../../js/actions/user'
import { getData } from '../../js/actions/common'

import { Tool } from '../../js/config/tool'

// import * as actions from '../../js/actions'
// actions.replace = routerActions.replace

const doc = document;
function select(state, ownProps) {
    const isAuthenticated = state.user.name || false
    const redirect = ownProps.location.query.redirect || '/search'
    return {
    	state,
        isAuthenticated,
        redirect
    }
}
const actions = {
	login, 
	getData, 
	replace: routerActions.replace
}

class Login extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		autoLogin: false,
    		remember: false,
    		isLogin: false
    	};
		this.encrypt = word => { 
			const key = CryptoJS.enc.Utf8.parse("httpliantuyuncom"),	
			      srcs = CryptoJS.enc.Utf8.parse(word),
			      encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
	        return encrypted.toString();
		}    		
	}
	static propTypes = {
	    login: PropTypes.func.isRequired,
	    replace: PropTypes.func.isRequired
	};
	componentWillMount() {
	    const { isAuthenticated, replace, redirect } = this.props
	    if (isAuthenticated) {
	       replace(redirect)
	       browserHistory.push(redirect)
	    }
	}
	componentWillReceiveProps(nextProps) {
		console.log("----login----componentWillReceiveProps：", nextProps, this.props)
	    const { isAuthenticated, replace, redirect } = nextProps
	    const { isAuthenticated: wasAuthenticated } = this.props
	    if (!wasAuthenticated && isAuthenticated) {
	        replace(redirect)
	    }
	}
	componentWillUpdate(nextProps, nextState) {
		console.log("----login----componentWillUpdate", nextProps, nextState)
		if( nextState.isLogin ){
			browserHistory.push('/search')
		}
	}
	onClick = (e) => {
	    e.preventDefault()
	    console.log(this.props)
	    this.props.login({
	        name: this.refs.name.value
	    })
	    browserHistory.push(this.props.routes[0].path)
	};	
	checkRememberPassword(event){
		this.setState({
			remember: !this.state.remember
		})
	}
	checkAutoLogin() {
		this.setState({
			autoLogin: !this.state.autoLogin
		})
		if( !this.state.autoLogin && !this.state.autoLogin ) {
			this.setState({
				remember: !this.state.autoLogin
			})			
		}
	}
	eventsKeyDown(event) {
		var keyCode = window.event ? event.keyCode : event.which;
		if(keyCode == 13) {
			this.loginUserSubmit()
		}		
	}
	loginUserSubmit = (event) => {
		const elem = doc.getElementById('LOGIN_submit'),
		      name = doc.getElementById('LOGIN_userName').value,
		      password = doc.getElementById('LOGIN_userPwd').value,
			  get_c = this.props.getConfig && this.props.getConfig.data;		
		if(isEmpty(name)){
			doc.getElementById('REG_userName_msg').innerHTML = '帐号不能为空'
			return false
		}
		if(isEmpty(password)){
			doc.getElementById('REG_userPwd_msg').innerHTML = '密码不能为空'
			return false
		}
		elem.disabled = true;
		elem.innerHTML = '正在登录中...';
		const data = {
			loginCode: name,
			password: this.encrypt(password),
			autoLgn: this.state.autoLogin,
			autoRem: false,
			isEncrypt: 0,
			userAgent: 0		
		};	
		console.log('发送登录请求：', data)
		this.props.getData('http://www.lianty.com/site/login', 'post', data, res => {
            console.log('登录返回数据：', res)
            if( res.errorCode === 0 && res.data ){
	            //存入
	    		localStorage.setItem('token', JSON.stringify(res.data.id))
	    		this.setState({
	    			isLogin: true
	    		})
            }else {
                Tool.alert(res.error || '登录超时')
            }
		}, 'login')									  	  
	};		
  	render() {
	  	const { login, onHandleShow, model } = this.props
	  	const { autoLogin, remember } = this.state
	  	console.log("----login----render：", this.props)
	    return (
		      <div className="login" onKeyDown={this.eventsKeyDown.bind(this)}> 
		        <div className="container-layer" id="container">
		           <div className="abs dialog-opacity-layer"></div>
		           <a className="abs close icons-login close-bg icons-30" title="关闭" onClick={() => false}>关闭</a>
		           <div className="layer">
		               <p className="p-tit"><span className="line abs l"></span><span className="title">使用链图云帐号登录</span><span className="line abs r"></span></p>
		               <div className="mod-reg">
		                   <form id="QIUZITI_LONIG_form" method="POST">
		                       <p>
		                          <input ref="name" id="LOGIN_userName" type="text" name="userName" className="text-input text-input-userName" placeholder="输入手机号/邮箱/链图云帐号" />
		                          <span className="sp-msg col-red" id="REG_userName_msg"></span>
		                       </p>
		                       <p>
		                          <input id="LOGIN_userPwd" type="password" name="userPwd" className="text-input text-input-userPwd" placeholder="请输入密码" />
		                          <span className="sp-msg col-red" id="REG_userPwd_msg"></span>
		                       </p>
		                       <p className="p-1 clearfix">
		                          <lable className="check-lable flex flex-c g-l check-remember" onClick={this.checkRememberPassword.bind(this)}>
		                              <i className={ remember ? "icons-login icons-18 checked-bg" : "icons-login icons-18 check-bg" }></i>
		                              记住密码
		                          </lable>
		                          <lable className="check-lable flex flex-c g-r check-auto" onClick={this.checkAutoLogin.bind(this)}>
		                              <i className={ autoLogin ? "icons-login icons-18 checked-bg" : "icons-login icons-18 check-bg" }></i>
		                              自动登录
		                          </lable>	  
		                       </p>
		                       <p className="p-2">
		                          <button type="button" id="LOGIN_submit" className="btn-input btn-input-submit" onClick={this.loginUserSubmit}>登录</button>    
		                       </p>
		        		   </form>
	                       <p className="p-2">
	                          <a href="javascript:;" className="go-regist" onClick={ () => onHandleShow('SHOW_REGIST_PHONE') }>新用户注册</a>
	                          <a style={{"display": "none"}} href="javascript:;" className="go-regist" onClick={ () => openFileRequest(4, "http://www.lianty.com/site/login?page=reg") }>新用户注册</a>
	                       </p>
	                       <p className="p-1 clearfix">
	                       	  <a className="reg-msg g-l col-lan" href="http://www.lianty.com/site/login?page=forget">忘记密码？</a>
	                       </p>        		   
		               </div>
		               <p className="p-tit">
		                  <span className="line abs l"></span>
		                  <span className="title">使用第三方帐号登录</span>
		                  <span className="line abs r"></span>
		               </p>
		               <p className="p-third">
		                  <a href="" style={{"display":"none"}}>
		                     <i className="icons-login icons-40 sina-bg"></i>
		                  </a>
		                  <a href="https://graph.qq.com/oauth2.0/authorize?response_type=token&client_id=101313065&redirect_uri=http%3A%2F%2Fwww.lianty.com%2Fsite%2FpcQQLog&scope=all" className="icons-login icons-40 qq-bg">
		                  </a>
		                  <a href="" style={{"display":"none"}}>
		                     <i className="icons-login icons-40 weixin-bg"></i>
		                  </a>
		               </p>	               
		           </div>
		           <div className="dialog-main-msg"><div className="dialog-main-opacity"></div><p className="p-msg"></p></div>
		        </div>     
		      </div>
	    )
  	} 	  
}
// const mapDispatchToProps = dispatch => {
// 	return {
// 		actions: bindActionCreators(actions, dispatch)
// 	}
// }
export default connect(select, actions)(Login)