import React,{Component} from "react"
import {Header,Content} from "../../../components/public"
import {Link} from "react-router"
import { Tabs, WhiteSpace } from 'antd-mobile';
import { InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import "./login.css"
import pic from "./image/label_on.png"
import pic1 from "./image/tencent.png"
import pic2 from "./image/taobao.png"
import pic3 from "./image/sina.png"


class Login extends Component {
	render(){
		const tabs = [
					  { title: '卷皮账号登录' },
					  { title: '手机快捷登录' }
					];
		const { getFieldProps } = this.props.form;
		return (
			<div id="login" className="div">
				<Header>
				<div className="header-top">
				</div>
				<div className="header-down">
				<a href="javascript:window.history.go(-1);" className="iconfont icon-fanhui"></a>
					<span>登录</span>
					<Link to="/reg">注册</Link>
				</div>
				</Header>
				<Content>
						  <div className="inputchange">
						    <WhiteSpace />
						    <Tabs tabs={tabs} initialPage={0} animated={false} useOnPan={false}>
						      <div>
						        
						      <InputItem
					            {...getFieldProps('phone')}
					            type="phone"
					            clear={true}
					            placeholder="手机号/邮箱/用户名"
					          ></InputItem>
					          <InputItem
					            {...getFieldProps('password')}
					            type="password"
					             clear={true}
					            placeholder="密码"
					          ></InputItem>
						        
						      </div>
						      <div>
						        
						        <InputItem
					             {...getFieldProps('phone')}
					             type="phone"
					             clear={true}
					             placeholder="请输入手机号码"
					           ></InputItem>
					       		<InputItem
					              type="number"
					              clear={true}
					              extra={<span>获取验证码</span>}
					              placeholder="请输入验证码"
					            ></InputItem>
						        
						      </div>
						    </Tabs>
						    <WhiteSpace />
						  </div>
						  <a id="btn_login" className="anniu">登录</a>
						  <div className="changebox">
					<label className="checkchange">
					<input type="checkbox" className="ck" name="auto" check="checked" />
					<i className="before"><img src={pic} alt="" /></i>
					两周内免登录
					</label>
					<Link className="forget">忘记密码?</Link>
						  </div>
						  <div className="contentdown">
						  	<h3 className="third">第三方账号快速登录</h3>
						  	<div className="third-app">
						  	<a href="//user.juanpi.com/login/connect/type/qq?returnurl=https://m.juanpi.com/user?select=5_1&amp;platform=wap&amp;app=zhe" className="qq" target="_parent">
						  	<img src={pic1} alt=""  />
						</a>
						<a href="//user.juanpi.com/login/connect/type/taobao?returnurl=https://m.juanpi.com/user?select=5_1&amp;platform=wap&amp;app=zhe" className="tao" target="_parent"><img src={pic2} alt="" />
						</a>
						<a href="//user.juanpi.com/login/connect/type/sina?returnurl=https://m.juanpi.com/user?select=5_1&amp;platform=wap&amp;app=zhe" className="sina" target="_parent"><img src={pic3} alt="" />
						</a>
						  	</div>
						  </div>
				</Content>
			</div>
		)
	}
}

const LoginWrapper = createForm()(Login);
export default LoginWrapper