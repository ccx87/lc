import React, { Component } from 'react';
import { connect } from 'react-redux'

import { GG_IMAGE, SK_TEXT } from '../../js/config/api'
import { Tool } from '../../js/config/tool'
import { getData } from '../../js/actions/common'
import { SHITU_MODE } from '../../js/config/locaData'

class ShituShutterstock extends Component {
    constructor() {
        super();
        this.state = {
           skImgObj: null,         
        };
    }        
    getSKData(keyWord){
        var config = null;
        if(this.props.mode === "image"){
            config = {
                path: GG_IMAGE,
                method: "POST",
                data: {
                    imgUrl: keyWord
                }
            }
        }else{
            config = {
                path: SK_TEXT,
                method: "POST",
                data: {
                    imgName: Tool.replace(keyWord, Tool.regularly(1), "")
                }
            }           
        }
        this.props.getData(config.path, config.method, config.data, 'shituSK')
    } 
    componentDidMount() {
        this.getSKData(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituSK----componentWillReceiveProps：',nextProps)
        let stateObj;
        if( nextProps.state && nextProps.state.send && nextProps.state.send.get ){
            stateObj = nextProps.state.send.get('data')
        }
        console.log("=====SK搜索数据====", stateObj)        
        if( stateObj.shituSK ){
            this.setState({
                skImgObj: stateObj.shituSK.json
            })
        } 
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                skImgObj: null
            })             
            this.getSKData(nextProps.keyWord)
        }  
    }    
    render() {
        const { skImgObj } = this.state
        return (
            <div className="pic-sk" style={{"paddingTop":"20px","paddingRight":"20px","paddingBotton":"20px","paddingLeft":"20px"}}>
                {
                    skImgObj != null ?
                        skImgObj.errorCode == 0 && skImgObj.data != null ?
                            skImgObj.data.imgDatalist != null ?
                                skImgObj.data.imgDatalist.length > 0 ?
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
                        skImgObj != null ?
                            skImgObj.errorCode == 0 && skImgObj.data != null ?
                                skImgObj.data.imgDatalist != null ?    
                                    skImgObj.data.imgDatalist.map((item, index) => {
                                        return (
                                            <span className="span-item" key={index}>    
                                                <a className="pic-list-item" href={item.detailUrl} target="_blank" title={item.detailUrl}>
                                                   <img className="item-img" src={item.imageData} alt="" />
                                                </a>
                                            </span>   
                                        )
                                    })
                                :                           
                                    this.props.mode == "image" ?    
                                        <div className="no-data">未搜索到相似的图像文件</div>
                                    :
                                        <div className="no-data">未搜索到相关的图像文件</div>
                                    
                            :
                                this.props.mode == "image" ?
                                    <div className="no-data">未搜索到相似的图像文件</div>
                                :
                                    <div className="no-data">未搜索到相关的图像文件</div>
                        :
                            <div className="load">正在搜索中，请稍候...</div>
                    }
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
export default connect(select, {getData})(ShituShutterstock)