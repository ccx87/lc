import React, { Component } from 'react';
import { connect } from 'react-redux'

import { WT_TEXT } from '../../js/config/api'
import { Tool, Dom } from '../../js/config/tool'
import { getData } from '../../js/actions/common'

class ShituWotu extends Component {
    constructor() {
        super();
        this.state = {
           wotuImgObj: null,         
        }
        this.getWotuShitu = keyWord => {
            const r = (new Date()).getTime(),
                  kw = Tool.encodeURI(Tool.replace(keyWord, Tool.regularly(1), "")),
                  url = WT_TEXT +'?kw='+ kw +'&r='+ r +'&lx=keywordid&callback=?';
            let type = 0,
                searchUrl = '',
                target = this;   
            $.getJSON(url, function(res){
                res = res.split('|');
                if(res[0]>0){
                    if(res[1]==-15){
                        searchUrl = "http://so.ooopic.com/sousuo/"+res[0]+"/";
                    }else{
                        searchUrl = "http://so.ooopic.com/search-"+res[2]+"-"+res[1]+"-0_0____0_ooo_0_1_0.html";
                    }
                }else{
                    searchUrl = "http://so.ooopic.com/search-"+kw+"-"+type+"-______oo__.html";
                }
                target.setState({
                    wotuImgObj: {
                        url: searchUrl
                    }
                })        
            }); 
            // const config = {
            //         path: WT_TEXT,
            //         method: "get",
            //         data: {
            //             kw: kw,
            //             r: r,
            //             lx: 'keywordid',
            //             callback: ''
            //         }
            //     }            
            // this.props.getData(config.path, config.method, config.data, 'shituWotu')    
        }
    }         
    componentDidMount() {
        this.getWotuShitu(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituWotu----componentWillReceiveProps：',nextProps)
        let stateObj;
        if( nextProps.state && nextProps.state.send && nextProps.state.send.get ){
            stateObj = nextProps.state.send.get('data')
        }
        console.log("=====我图搜索数据====", stateObj)        
        if( stateObj.shituWotu ){

            // this.setState({
            //     wotuImgObj: stateObj.shituGoogle.json
            // })
        }        
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                wotuImgObj: null
            })
            this.getWotuShitu(nextProps.keyWord)
        }          
    }    
    render() {
        const { wotuImgObj } = this.state
        return (
            <div className="pic-nitu">
                {
                    wotuImgObj ?
                        wotuImgObj.url ?
                            <iframe src={wotuImgObj.url} 
                                allowTransparency="true" 
                                style={{"backgroundColor":"transparent","border":"none", "minHeight": "1700px"}} 
                                title="test" 
                                frameBorder="0" 
                                width="100%" 
                                scrolling="no" id="wotuIframe"></iframe> 
                        :
                            <div className="no-data">未搜索到相关的图像文件</div>
                    :
                        <div className="load">正在搜索中，请稍候...</div>
                }               
            </div>
        );
    }
    componentDidUpdate() {
        Dom.reinitIframe('wotuIframe')      
    }   
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select, {getData})(ShituWotu)