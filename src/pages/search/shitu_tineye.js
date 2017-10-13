import React, { Component } from 'react';
import { connect } from 'react-redux'

import { TE_IMAGE } from '../../js/config/api'
import { getData } from '../../js/actions/common'
import { Tool, Dom } from '../../js/config/tool'

class ShituTineye extends Component {
    constructor() {
        super();
        this.state = {
           tineyeImgObj: null,         
        };
    }        
    getTineyeShitu(keyWord){
        var config = {
            path: TE_IMAGE,
            method: 'post',
            data: {
                imgUrl: keyWord
            }
        }
        this.props.getData(config.path, config.method, config.data, 'shituTineye')
    } 
    componentDidMount() {
        this.getTineyeShitu(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituTineye----componentWillReceiveProps：',nextProps)
        console.log("=====Tineye搜索数据====",nextProps.state.send.get('data'))
        const stateObj = nextProps.state.send.get('data')
        if( stateObj.shituTineye ){
            this.setState({
                tineyeImgObj: stateObj.shituTineye.json
            })
        } 
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                tineyeImgObj: null
            })
            this.getTineyeShitu(nextProps.keyWord)
        }          
    }    
    render() {
        const { tineyeImgObj } = this.state
        return (
            <div className="pic-tineye">
                {
                    tineyeImgObj ?
                        tineyeImgObj.errorCode == 0 && tineyeImgObj.data ?
                            tineyeImgObj.data.searchUrl != "" ?  
                                <iframe 
                                src={tineyeImgObj.data.searchUrl} 
                                allowTransparency="true" 
                                style={{"backgroundColor":"transparent","border":"none", "minHeight": "1700px"}} 
                                title="test" 
                                frameBorder="0" 
                                width="100%" 
                                scrolling="no" id="tineyeIframe"></iframe>                               
                            :
                            <div className="no-data">未搜索到相关的图像文件</div>  
                                
                        :
                            <div className="no-data">未搜索到相关的图像文件</div>
                    :
                        <div className="load">正在搜索中，Tineye一天只能访问30次，访问速度取决于您访问国外网站的速度</div>
                }               
            </div>
        );
    }
    componentDidUpdate() {
        Dom.reinitIframe('tineyeIframe')        
    }    
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select, {getData})(ShituTineye)