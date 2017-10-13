import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchBar from './searchBar';
import Template from '../../js/common/template';
// import './common.scss';

import { Tool } from '../../js/config/tool'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.getUserData = (data) => {
            if( !data || !data.success ) return false;
            if( data.errorCode !== 0 ){
            	Tool.alert(data.error ? data.error : '登录失败');
            	return false;
            }
            if( !data.data || !data.data.user) return false;
            return data.data.user;
        }	
    }
    componentDidMount() {
        //console.log('-----Header----componentDidMount：', this.props)
    }   
    componentWillReceiveProps(nextProps) {
    	//console.log('-----Header----componentWillReceiveProps：',nextProps)
        //if( nextProps.state && nextProps.state.data && nextProps.state.data)
    }     	
    render() {
    	let { page, isAuthenticated } = this.props
    	const user = this.props.state && this.getUserData(this.props.state.data)
        const clasees = "header "+ page
        isAuthenticated = isAuthenticated || 654
	    return (
	        <div className={clasees}>
	            <div className="container full-w-h plans plans-align-center">
	                <div className="plans-stretch-0 text-left plans">
	                    <a href="http://www.lianty.com/" className="logo-bg"></a>
	                    {
	                    	isAuthenticated ?
                                page === "search-page" ?
                                    <SearchBar page={page} isAuthenticated={isAuthenticated}/>
                                :
                                    null
                            :   null             
	                    }
	                </div>
	                {
	                	user ?
			                <div className="plans-stretch-1 user text-right">
			                    <Link to="/" className="link-item">中转站</Link>
                                <span className="user-info rel">
                                    <img src={user.headPortraitPath ? user.headPortraitPath : 'src/img/avatar-head.png'} alt={user.nickName ? user.nickName : "lianty_user"}/>
                                    <ul className="abs ui-ul">
                                        <li><Link to="/">个人设置</Link></li>
                                        <li><Link to="/">费用中心</Link></li>
                                        <li><Link to="/">帮助中心</Link></li>
                                        <li><Link to="/">意见反馈</Link></li>
                                        <li><Link to="/">注销登录</Link></li>
                                    </ul>  
                                </span>
			                </div>
			            :
			                <div className="plans-stretch-1 user text-right" style={{"display":"none"}}>
			                    <button className="button btn-signup"><Link to="/login">注册</Link></button>
			                    <button className="button btn-login"><Link to="/login">登录</Link></button>
			                </div>			                    
	                }
                </div> 
	        </div>
	    );
    }
}
export default Header