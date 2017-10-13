import React, { Component } from 'react'
import isEmpty from 'lodash.isempty'
import { Tool } from '../../js/config/tool'

export default class ShituList extends Component {
  render() {
    const { searchData, onShowPreview, imgUseArray } = this.props
    return (
        <div className="sm-list" style={{"minHeight": "500px"}}>
            <div className="container full-w-h">
                <ul className="list-ul">
                    {
                        searchData ?
                            searchData.length > 0 ?
                                searchData.map((item, index) => {
                                    const imgSrc = "http://file.lianty.com:8080/yuanyin_file/ltyimg/showImgByKey?key="+ item.middlePath,
                                          fileType = item.fileType && item.fileType.toUpperCase(),
                                          typeClass = "item-type "+Tool.trim(fileType)+"-type-bg",
                                          useData = imgUseArray.find( use => item.free === use.value ),
                                          usebg = 'icon-20 icons use-'+ item.free;
                                    return  <li className="item" key={index}>
                                                <div className="item-img rel plans plans-align-center plans-justify-center" onClick={() => onShowPreview(index)}>
                                                    <img src={imgSrc} alt="img" />
                                                </div>
                                                <div className="item-lien plans plans-align-center">
                                                    <p className="text-left plans-stretch-1 item-title" title={item.title}>{item.title}</p>
                                                    <p className="text-right plans-stretch-0" style={{"height":"22px"}}>
                                                        {
                                                            fileType ?
                                                                <i className={typeClass}>{fileType}</i>
                                                            :
                                                                null    
                                                        }
                                                    </p>
                                                </div>
                                                <div className="item-lien plans plans-align-center">
                                                    <p className="text-left plans-stretch-1">{item.sourceName}</p>
                                                    {
                                                        !isEmpty(useData) ?
                                                            <p className="text-right plans-stretch-1 plans plans-align-center plans-justify-end">
                                                                <i className={usebg}></i>
                                                                <span>{useData.text}</span>
                                                            </p>
                                                        :
                                                            null            
                                                    }                            
                                                </div>
                                            </li>
                                })
                            :   
                                <div style={{"fontSize": "14px","color": "#666", "textAlign": "center", "marginTop": "250px"}}>未搜索到相关图像素材</div> 
                        :
                            <div style={{"fontSize": "14px","color": "#666", "textAlign": "center", "marginTop": "250px"}}><img src="src/img/loading.gif" className="loading" />正在加载中...</div>                                                                                                                         
                    }
                </ul>
            </div>                 
        </div>
    )
  }
}