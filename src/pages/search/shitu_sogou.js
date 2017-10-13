import React, { Component } from 'react';
import { connect } from 'react-redux'

import { SG_IMAGE, SG_TEXT } from '../../js/config/api'
import { SHITU_MODE } from '../../js/config/locaData'
import { getData } from '../../js/actions/common'

class ShituSogou extends Component {
    constructor() {
        super();
        this.state = {
           sogouImgObj: null,         
        };
    }        
    getSogouData(keyWord){
        let config;
        if(this.props.mode === SHITU_MODE.image ){
            config = {
                path: SG_IMAGE,
                method: 'post',
                data: {
                    imgUrl: keyWord
                }
            }
        }else{
            config = {
                path: SG_TEXT,
                method: 'post', 
                data: {
                    imgName: keyWord
                }
            }           
        }
        this.props.getData(config.path, config.method, config.data, 'shituSogou')
    } 
    componentDidMount() {
        this.getSogouData(this.props.keyWord)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----ShituSogou----componentWillReceiveProps：',nextProps)
        let stateObj;
        if( nextProps.state && nextProps.state.send && nextProps.state.send.get ){
            stateObj = nextProps.state.send.get('data')
        }
        console.log("=====搜狗搜索数据====", stateObj)        
        if( stateObj.shituSogou ){
            this.setState({
                sogouImgObj: stateObj.shituSogou.json
            })
        } 
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                sogouImgObj: null
            })            
            this.getSogouData(nextProps.keyWord)
        }           
    }    
    render() {
        const { sogouImgObj } = this.state
        return (
            <div className="pic-sogou" style={{"paddingTop":"20px","paddingRight":"20px","paddingBotton":"20px","paddingLeft":"20px"}}>
                {
                    sogouImgObj ?
                        sogouImgObj.errorCode == 0 && sogouImgObj.data ?
                            sogouImgObj.data.totalSize > 0 && sogouImgObj.data.simiList ? 
                                sogouImgObj.data.simiList.map((item, index) => {
                                    return (
                                        <span key={index} className="span-item">
                                            <a className="pic-list-item" href={item.detailUrl} target="_blank">
                                               <img className="item-img" src={item.imageUrl} alt="" />
                                            </a>
                                        </span>
                                    )
                                })
                            :
                            <div className="no-data">未搜索到相关的图像文件</div>  
                                
                        :
                            <div className="no-data">未搜索到相关的图像文件</div>
                    :
                        <div className="load">正在搜索中，请稍候...</div>
                }           
            </div>
        )
    }
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select, {getData})(ShituSogou)