import React, { Component, PropTypes } from 'react'

import RegistPhone from './registPhone'
import RegistEmail from './registEmail'

const SHOW_REGIST_PHONE = 'SHOW_REGIST_PHONE',
      SHOW_REGIST_EMAIL = 'SHOW_REGIST_EMAIL',
      SHOW_REGIST_SUCCESS = 'SHOW_REGIST_SUCCESS';
class Regist extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
    		filter: SHOW_REGIST_PHONE
    	};
		this.handleChildShow = filter => {
			this.setState({ filter })
		}    			
	}				
    render() {
	  	const { login, actions, onHandleShow } = this.props
	  	const { filter } = this.state
	    return (
		    <div className="regist">
		        <div className="container-layer" id="container">
		            <a className="abs close icons-login close-bg icons-30" title="关闭" onClick={() => false}>关闭</a>
		            <div className="layer">
		                <p className="p-tit">
		                    <span className="line abs l"></span>
	                        {
	                      	    filter === SHOW_REGIST_PHONE && <span className="title">使用手机号注册</span>
	                        }
	                        {
	                      	    filter === SHOW_REGIST_EMAIL && <span className="title">使用邮箱注册</span>
	                        }
		                    <span className="line abs r"></span>
		                </p>
		                {
		               	    filter === SHOW_REGIST_PHONE && <RegistPhone onHandleShow={onHandleShow} onHandleChileShow={this.handleChildShow}/>
		                }
		                {
		               	    filter === SHOW_REGIST_EMAIL && <RegistEmail onHandleShow={onHandleShow} onHandleChileShow={this.handleChildShow}/>
		                }
		            </div>
		            <div className="dialog-main-msg"><div className="dialog-main-opacity"></div><p className="p-msg"></p></div>
		        </div>
		    </div>
	    )
    }	  
}
export default Regist
