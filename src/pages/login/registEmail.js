import React, { Component, PropTypes } from 'react'

const SHOW_LIANTY_LOGIN = 'SHOW_LIANTY_LOGIN',
      SHOW_REGIST_PHONE = 'SHOW_REGIST_PHONE';

class RegistEmail extends Component {
    constructor(props) {
        super(props);
        this.state = {};    
    }     
    render() {
        const { login, actions, onHandleShow, onHandleChileShow } = this.props
        return (
            <div className="regist-email">
                <p className="p-toggle">切换
                   <a className="toggle email" href="javascript:;" onClick={ () => onHandleChileShow(SHOW_REGIST_PHONE) }>手机注册</a>
                </p>
                  <div className="mod-reg">
                      <form id="QIUZITI_REG_form" method="POST">
                          <p>
                             <input id="REG_userEmail" type="text" name="userEmail" className="text-input text-input-userEmail" placeholder="输入真实的邮箱以便验证" />
                             <span className="sp-msg" id="REG_userEmail_msg"></span>
                          </p>
                          <p>
                             <input id="REG_userPwd" type="password" name="userPwd" className="text-input text-input-userPwd" placeholder="请输入密码" />
                             <span className="sp-msg" id="REG_userPwd_msg"></span>
                          </p>
                          <p>
                             <input id="REG_confirm_userPwd" type="password" name="confirm_userPwd" className="text-input text-input-confirm-userPwd" placeholder="请确认密码" />
                             <span className="sp-msg" id="REG_confirm_userPwd_msg"></span>
                          </p>
                          <p className="p-2">
                             <input type="button" id="REG_submit" className="btn-input btn-input-submit" value="同意协议并注册"/>
                          </p>
                  </form>
                      <p className="clearfix p-1">
                        <span className="reg-msg g-l">《链图云网站服务协议》</span>
                        <span className="reg-msg g-r">
                           <a href="javascript:;" className="go-login" onClick={ () => onHandleShow(SHOW_LIANTY_LOGIN) }>返回登录》</a>
                        </span>
                      </p>              
                  </div>  
            </div>
        )
    }   
}
export default RegistEmail
