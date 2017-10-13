import React, { Component } from 'react';
import { connect } from 'react-redux'

import { IMG360 } from '../../js/config/api'
import { SHITU_MODE } from '../../js/config/locaData'
import { Tool, Dom } from '../../js/config/tool'

class Shitu360 extends Component {
    constructor() {
        super();
        this.state = {
           img360Obj: null,         
        };
    }        
    get360Shitu(keyWord, mode){
        let data;
        if( mode === SHITU_MODE.text ){
            data = {
                q: keyWord,
                src: 'srp'
            }
        }else{
            data = {
                q: keyWord,
                src: 'srp',
                color: '',
                sn: 0,
                pn: 50
            }
        }
        this.setState({
            img360Obj: {
                url: IMG360 + Tool.paramType(data)
            }
        })
    } 
    componentDidMount() {
        this.get360Shitu(this.props.keyWord, this.props.mode)
    }
    componentWillReceiveProps(nextProps) {
        console.log('-----Shitu360----componentWillReceiveProps：',nextProps)         
        if( nextProps.keyWord !== this.props.keyWord ){
            this.setState({
                img360Obj: null
            })
            this.get360Shitu(nextProps.keyWord, nextProps.mode)
        }          
    }    
    render() {
        const { img360Obj } = this.state
        return (
            <div className="pic-nitu">
                {
                    img360Obj ?
                        img360Obj.url ?
                            <iframe src={img360Obj.url} 
                            allowTransparency="true" 
                            style={{"backgroundColor":"transparent","border":"none", "minHeight": "1700px"}} 
                            title="test" 
                            frameBorder="0" 
                            width="100%" 
                            scrolling="no" id="img360Iframe"></iframe> 
                        :
                            <div className="no-data">未搜索到相关的图像文件</div>
                    :
                        <div className="load">正在搜索中，请稍候...</div>
                }               
            </div>
        );
    }
    componentDidUpdate() {
        Dom.reinitIframe('img360Iframe')         
    }     
}
function select(state, ownProps) {
    return {
        state
    }
}
export default connect(select)(Shitu360)