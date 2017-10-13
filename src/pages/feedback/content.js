import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Nav extends Component {
    render() {
        return (
            <div className="content">
                <p className="title">意见反馈</p>
                <div className="form-box">
                    <table className="full-w">
                        <tbody>
                            <tr>
                                <td className="td-1"><span className="have">*</span>您的意见</td>
                                <td className="td-2">
                                    <textarea className="textarea focus" placeholder="请尽量详细描述您的建议，以便链图云为您提供更加周到的服务！（建议内容请控制在10-200个字之间）" maxLength="200"></textarea>                               
                                </td>
                            </tr>
                            <tr>
                                <td className="td-1">联系方式</td>
                                <td className="td-2">
                                    <input type="text" className="input focus" placeholder="请输入电子邮箱或手机"/>
                                </td>
                            </tr>
                            <tr>
                                <td className="td-1"></td>
                                <td className="td-2">
                                    <button className="button" className="btn default-bg">提交</button>
                                </td>
                            </tr>
                        </tbody> 
                    </table>
                </div>
                <div className="help-box">
                    <p className="tit">您可在帮助中心查看常见问题的解答</p>
                    <p>
                        <Link to="/help" className="btn default-bg">前往帮助中心</Link>
                    </p>
                    <p className="tit">若帮助中心无法解决您的问题或您希望联系我们的客服，请选择以下方式的一种联系客服：</p>
                    <p>
                        邮箱：
                        <a href="mailto:support@zhaoyinqian.com" title="点击这里给我们发邮件">support@zhaoyinqian.com</a>                        
                    </p>
                    <p>
                        QQ：
                        <a title="QQ">3203640400</a>
                    </p>
                </div>
            </div>
        );
    }
}