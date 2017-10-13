import React, { Component } from 'react';
import { Link } from 'react-router';
// import './common.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};	
    }
    componentDidMount() {
    }   
    componentWillReceiveProps(nextProps) {
        //if( nextProps.state && nextProps.state.data && nextProps.state.data)
    }            	
    render() {
        //<Link to="/" className="">设计导航</Link>
	    return (
	      <div className="footer">
            <div className="footer-top">
                <div className="container plans plans-align-center">
                    <div className="f-item">
                        <p className="title">关于链图云</p>
                        <p className="item">
                            
                            <a href="http://www.lianty.com/site/agreement_yun" target="_blank" className="">服务条款</a>
                            <a href="http://www.lianty.com/site/blog#/" target="_blank" className="">博客</a>
                            <a href="http://www.lianty.com/site/index?active=feedback" target="_blank" className="">意见反馈</a>
                            <a href="http://www.lianty.com/site/help?hid=9&tid=" target="_blank" className="">帮助中心</a>
                        </p> 
                    </div>
                    <div className="f-item text-center">
                        <p className="title">旗下产品</p>
                        <p className="item plans plans-align-center plans-direction-column">
                            <a href="http://fs.lianty.com:8084/goToBaiDuYunClientPack" className="">下载客户端</a>
                            <a href="http://www.zhaoyinqian.com/" target="_blank">找印前网</a>
                            <a href="http://www.qiuziti.com/" target="_blank">求字体网</a>
                        </p> 
                    </div>
                    <div className="f-item text-left">
                        <p className="title">联系我们</p>
                        <p className="item">
                            <a className="text" href="mailto:support@lianty.com" title="点击这里给我们发邮件">support@lianty.com</a>
                        </p> 
                    </div>
                    <div className="f-item text-left plans plans-align-center">
                        <span className="bg bg-1 icon-40"></span>
                        <span className="bg bg-2 icon-40"></span>
                        <span className="bg bg-3"></span>
                    </div>                                        
                </div> 
            </div>
            <div className="footer-bottom">
                 <p className="container plans plans-align-center plans-justify-center">
                     Copyright©2016-2017<a href="http://www.lianty.com/">链图云</a><a href="http://www.zhaoyinqian.com/" target="_blank">找印前网</a>All rights reserved. 闽ICP备11025350号-2 
                 </p>
            </div>
	      </div>
	    );
    }
}
export default Footer