import React,{Component} from "react"
import {Header,Content} from "../../../components/public";
import { List, InputItem } from 'antd-mobile';
import { createForm } from 'rc-form';
import qs from "qs"
import "./reg.css"
//import "./regcolor.js"

class Reg extends Component {
	state={
		mobile:"",
		mobileCode:"",
	}
	sendCode(){
		let {mobile} = this.state
		mobile = mobile.replace(/\s/g,'')
		console.log("发送验证码",mobile)
		var params = qs.stringify({
			code:"ygxg",
			opt:"403",
			mobile:mobile,
			mtoken:"a0af0b7c3271d01f2bd9b420ab66b653",
			mtokenact:"",
			from:""
		})	
		fetch(`/juanpi/public/checkVerify`,{
			method:"post",
			credentials:"include",
			headers:{
				"Content-Type":"application/x-www-form-urlencoded"
			},
			body:params
		}).then(res=>res.json()).then(data=>{
			console.log(data)
		})
	}
	reg(){
		let {mobile,mobileCode} = this.state
		mobile = mobile.replace(/\s/g,'')
		var params = {
			agreement:true,
			captcha:mobileCode,
			username:mobile
		}
	console.log(qs.stringify(params))
	
	}
	
	render(){
		const {mobile,mobileCode} = this.state;
		return (
			<div id="reg" className="div">
				<Header>
					<a href="javascript:window.history.go(-1);" className="iconfont icon-fanhui"></a>
					<span>注册</span>
				</Header>
				<Content>
					<div className="wap-login">
						<p>请确保你的手机通畅,用于接收验证码短信</p>
						 <List>
				          <InputItem
				            type="phone"
				            clear={true}
				            value={mobile}
				            onChange={(val)=>{this.setState({mobile:val})}}
				           placeholder="186 1234 1234"
				          >请输入手机号码</InputItem>
				          <InputItem
			              type="number"
			              clear={true}
			             value={mobileCode}
			              onChange={(val)=>{this.setState({mobileCode:val})}}
			              onExtraClick={()=>this.sendCode()}
			              extra={<span>获取验证码</span>}
			            >请输入验证码</InputItem>
				        </List>
					</div>
				        <span id="nextagain" style={{display:"block",height:"0.48rem",width:"80%",background:"#cacaca",color:"#fff",fontSize:"0.18rem",lineHeight:"0.48rem",textAlign:"center",marginTop:"0.4rem",marginLeft:"0.4rem"}}>
				       下一步 
				        </span>
				</Content>
			</div>
		)
	}
}
const RegWrapper = createForm()(Reg);
export default RegWrapper