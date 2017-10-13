import React, { Component } from 'react';
import { connect } from 'react-redux'

import { NT_TEXT } from '../../js/config/api'
import { Tool, Dom } from '../../js/config/tool'

class ShituNitu extends Component {
    constructor() {
        super();
        this.state = {
           nituImgObj: null,         
        };
    }        
    getNituShitu(keyWord){
        const data = {
                q: keyWord,
                f: '',
                g: '',
                w: 0,
                h: 0,
                p: 0,
                or: 0,
                sort: 5,
                k: 0
            };
        this.setState({
            nituImgObj: {
                url: NT_TEXT + Tool.paramType(data)
            }
        })
    } 
    componentDidMount() {
        this.getNituShitu(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituNitu----componentWillReceiveProps：',nextProps)
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                nituImgObj: null
            })
            this.getNituShitu(nextProps.keyWord)
        }          
    }    
    render() {
        const { nituImgObj } = this.state
        return (
            <div className="pic-nitu" style={{"width":"100%","height":"100%"}}>
                {
                    nituImgObj ?
                        nituImgObj.url ?
                            <iframe src={nituImgObj.url} 
                                allowTransparency="true" 
                                style={{"backgroundColor":"transparent","border":"none", "minHeight": "1700px"}} 
                                title="test" 
                                frameBorder="0" 
                                width="100%" 
                                scrolling="no" id="nituIframe"></iframe> 
                        :
                            <div className="no-data">未搜索到相关的图像文件</div>
                    :
                        <div className="load">正在搜索中，请稍候...</div>
                }               
            </div>
        );
    }
    componentDidUpdate() {
        Dom.reinitIframe('nituIframe')
    }
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select)(ShituNitu)