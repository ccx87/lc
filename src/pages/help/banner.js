import React, { Component } from 'react';

export default class Banner extends Component {
    render() {
        return (
            <div className="banner rel">
                <a className="banner-bg abs"></a>
                <div className="rel banner-center full-h plans plans-align-center plans-justify-center plans-direction-column">
                    <p className="title">帮助中心</p>
                    <p className="text">在这里找到你需要的帮助和支持，我们提供最专业的问题解决方案。</p>
                </div>
            </div>
        );
    }
}