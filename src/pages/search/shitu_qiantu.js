import React, { Component } from 'react';
import { connect } from 'react-redux'

import { QT_TEXT } from '../../js/config/api'
import { Tool, Dom } from '../../js/config/tool'

class ShituQiantu extends Component {
    constructor() {
        super();
        this.state = {
           qiantuImgObj: null,         
        }
        this.getQiantuShitu = keyWord => {
            const t = (new Date()).getTime(),
                  kw =  Tool.replace(keyWord, Tool.regularly(1), ""),
                  target = this;
            $.getJSON(QT_TEXT, {
                kw: kw
            }, function(i) {
                const searchUrl = 1 == i.msg ? 'http://www.58pic.com/tupian/' + i.pinyin + '.html' : 'http://www.58pic.com/tupian/0-0-0-default-0-0-' + t + '-0-.html';
                target.setState({
                    qiantuImgObj: {
                        url: searchUrl
                    }
                })
            }), !1;   
        }
    }         
    componentDidMount() {
        this.getQiantuShitu(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituQiantu----componentWillReceiveProps：',nextProps)     
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                qiantuImgObj: null
            })
            this.getQiantuShitu(nextProps.keyWord)
        }          
    }    
    render() {
        const { qiantuImgObj } = this.state
        return (
            <div className="pic-nitu" style={{"paddingLeft":"20px","paddingRight":"20px", "minHeight": "1700px"}}>
                {
                    qiantuImgObj ?
                        qiantuImgObj.url ?
                            <iframe src={qiantuImgObj.url} 
                            allowTransparency="true"
                            style={{"backgroundColor":"transparent","border":"none"}} 
                            title="test" 
                            frameBorder="0" 
                            width="100%" 
                            scrolling="no" id="qiantuIframe"></iframe> 
                        :
                            <div className="no-data">未搜索到相关的图像文件</div>
                    :
                        <div className="load">正在搜索中，请稍候...</div>
                }               
            </div>
        );
    }
    componentDidUpdate() {
        Dom.reinitIframe('qiantuIframe')         
    }    
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select)(ShituQiantu)