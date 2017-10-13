import React, { Component } from 'react';
import SearchBar from '../common/searchBar';
import ClientInfo from '../common/clientInfo';

export default class Banner extends Component {
  render() {
    const isAuthenticated = isAuthenticated || 654    
    return (
        <div className="banner rel">
            <a className="banner-bg abs"></a>
            <div className="rel banner-center full-h plans plans-align-center plans-justify-center plans-direction-column">
                <p className="title">找素材 用链图云</p>
                <p className="text">请您用关键字或图像同时搜索 100+ 家国内外素材网站</p>
                <SearchBar isAuthenticated={isAuthenticated} />
            </div>
            <div className="banner-right abs">
                <ClientInfo />
            </div>
        </div>
    );
  }
}