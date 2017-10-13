import React, { Component } from 'react';
import { Link } from 'react-router';
// import './common.scss';

//客户端简介
class ClientInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};	
    }    	
    render() {
	    return (
            <div className="client-info rel">
                <p className="ci-title plans plans-align-center plans-justify-center">
                    <span className="line-l plans-stretch-1"></span>
                    <span className="line-text plans-stretch-0">您的素材管理专家</span>
                    <span className="line-r plans-stretch-1"></span>
                </p>
                <ul className="ci-list plans plans-justify-between plans-wrap">
                    <li>
                        <i className="icon-50 icons bg-1"></i>
                        <p>素材管理</p>
                    </li>
                    <li>
                        <i className="icon-50 icons bg-2"></i>
                        <p>本机搜索</p>
                    </li>
                    <li>
                        <i className="icon-50 icons bg-3"></i>
                        <p>文字搜图</p>
                    </li>
                    <li>
                        <i className="icon-50 icons bg-4"></i>
                        <p>字体管理</p>
                    </li>
                    <li>
                        <i className="icon-50 icons bg-5"></i>
                        <p>跨机搜索</p>
                    </li>
                    <li>
                        <i className="icon-50 icons bg-6"></i>
                        <p>以图识图</p>
                    </li>                                                                                                    
                </ul>
                <p className="ci-line"></p>
                <p className="ci-btn">
                    <button type="button" className="btn default-bg">
                        <i className="icon-20 icons"></i>下载客户端
                    </button>
                </p>
                <p className="ci-desc">
                    <span>当前版本：2.1.3</span>
                    <span>大小：60.7MB</span>
                    <span>更新时间：2017-06-08</span>
                </p>
            </div>
	    );
    }
}
export default ClientInfo