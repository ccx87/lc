import React, { Component } from 'react';
import { connect } from 'react-redux'

import { GG_IMAGE, GG_TEXT } from '../../js/config/api'
import { Tool } from '../../js/config/tool'
import { SHITU_MODE } from '../../js/config/locaData'
import { getData } from '../../js/actions/common'

class ShituGoogle extends Component {
    constructor() {
        super();
        this.state = {
           googleImgObj: null,         
        };
    }        
    getGoogleData(keyWord){
        let config;
        if(this.props.mode === SHITU_MODE.image){
            config = {
                path: GG_IMAGE,
                method: "POST",
                data: {
                    imgUrl: keyWord
                }
            }
        }else{
            config = {
                path: GG_TEXT,
                method: "POST",
                data: {
                    imgName: Tool.replace(keyWord, Tool.regularly(1), "")
                }
            }           
        }
        this.props.getData(config.path, config.method, config.data, 'shituGoogle')
    } 
    componentDidMount() {
        this.getGoogleData(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituGoogle----componentWillReceiveProps：',nextProps)
        let stateObj;
        if( nextProps.state && nextProps.state.send && nextProps.state.send.get ){
            stateObj = nextProps.state.send.get('data')
        }
        console.log("=====谷歌搜索数据====", stateObj)        
        if( stateObj.shituGoogle ){
            this.setState({
                googleImgObj: stateObj.shituGoogle.json
            })
        } 
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                googleImgObj: null
            })             
            this.getGoogleData(nextProps.keyWord)
        }  
    }    
    render() {
        const { googleImgObj } = this.state
        return (
            <div className="pic-google" style={{"paddingTop":"20px","paddingRight":"20px","paddingBotton":"20px","paddingLeft":"20px"}}>
                {
                    googleImgObj != null ?
                            googleImgObj.errorCode == 0 && googleImgObj.data != null ?
                                    googleImgObj.data.simiList != null ?
                                            googleImgObj.data.simiList.length > 0 ?
                                                    this.props.mode === SHITU_MODE.image ?
                                                        <p className="img-list-title">外观类似的图片</p>
                                                    :
                                                        null
                                             :
                                                 null
                                    :
                                        null
                            :
                                null
                    :
                        null
                }
                <div className="list-img-item">
                    {
                        googleImgObj != null ?
                            googleImgObj.errorCode == 0 && googleImgObj.data != null ?
                                googleImgObj.data.simiList != null ?    
                                    googleImgObj.data.simiList.map((item, index) => {
                                        return (
                                            <span className="span-item" key={index}>    
                                                <a className="pic-list-item" href={item.detailUrl} target="_blank" title={item.detailUrl}>
                                                   <img className="item-img" src={item.imageData} alt="" />
                                                </a>
                                            </span>   
                                        )
                                    })
                                :                           
                                    this.props.mode === SHITU_MODE.image  ?    
                                        <div className="no-data">未搜索到相似的图像文件</div>
                                    :
                                        <div className="no-data">未搜索到相关的图像文件</div>
                                    
                            :
                                this.props.mode == SHITU_MODE.image ?
                                    <div className="no-data">未搜索到相似的图像文件</div>
                                :
                                    <div className="no-data">未搜索到相关的图像文件</div>
                        :
                            <div className="load">正在搜索中，请稍候...</div>
                    }
                </div>
                <div className="list-img-page">
                    {
                        googleImgObj != null ?
                                googleImgObj.errorCode == 0 && googleImgObj.data != null ?
                                        googleImgObj.data.matchList != null ?
                                                googleImgObj.data.matchList.length > 0 ?
                                                        this.props.mode === SHITU_MODE.image ?
                                                            <p className="img-list-title">包含匹配图片的页面</p>
                                                        :
                                                            null
                                                :
                                                    null
                                        :
                                            null
                                :
                                    null
                        :
                            null
                    }           
                    <ul className="clearfix">
                        {
                            googleImgObj != null ?
                                googleImgObj.errorCode == 0 && googleImgObj.data != null ?
                                    googleImgObj.data.matchList != null ?   
                                        googleImgObj.data.matchList.map((item, index) => {
                                            return (
                                                <li key={index} className="source-card-same-data">
                                                    <div className="source-card-topic-title">
                                                        <a className="source-card-topic-title-link" href={item.detailUrl} target="_blank">{item.title}</a>
                                                    </div>
                                                    <a href={item.detailUrl} target="_blank" className="source-card-topic-same-image"><img src={item.imageData} alt="" /></a>
                                                    <div className="source-card-topic-content"><a href={item.detailUrl} target="_blank">{item.detailUrl}</a></div>
                                                    <div className="source-card-topic-footer" style={{"display": "none"}}>
                                                     {item.title}
                                                    </div>
                                                </li>                                             
                                            )
                                        })
                                    :                           
                                        null    
                                            
                                :
                                     null
                            :
                                null                
                        }
                    </ul>
                </div>
            </div>
        );
    }
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select, {getData})(ShituGoogle)