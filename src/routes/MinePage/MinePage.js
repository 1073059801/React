import React,{Component} from "react"
import {Header,Content,Footer} from "../../components/public"
import {Link} from "react-router"
import "./Mine.css"
class MinePage extends Component {
	render(){
		return (
			<div id="mine" className="div">
				<Header>
					<div className="header-top">
						<a href="javascript:window.history.go(-1);" className="iconfont icon-fanhuishangyiye-jiachang"></a>
						<span>个人中心</span>
					</div>
					<div className="header-down">
						<Link to="/mine/reg" >注册</Link>
						<i></i>
						<Link to="/mine/Login">登录</Link>
					</div>
				</Header>
				<Content>
				<ul>
					<li><i>我的订单</i><span>全部订单</span></li>
					<li>
						<p>
							<i className="iconfont icon-daifukuan"></i>
							<span>待付款</span>
						</p>
						<p>
							<i className="iconfont icon-daichengtuan"></i>
							<span>待成团</span>
						</p>
						<p>
							<i className="iconfont icon-iconfontsvg03"></i>
							<span>待收货</span>
						</p>
						<p>
							<i className="iconfont icon-tuikuan"></i>
							<span>退款/售后 </span>
						</p>
					</li>
				</ul>
				<ul>
					<li><i>我的优惠券</i></li>
					<li><i>我的的收藏</i></li>
					<li><i>我的拼团</i></li>
					<li><i>VIP钻石卡</i><span>开卡即享受上折</span></li>
					<li><i>我的免单卷</i><span>0张</span></li>
					<li><i>借钱</i><span>新用户免费领1000元</span></li>
				</ul>
				
				<ul>
					<li><i>客服中心</i></li>
					<li><i>关于卷皮</i></li>
				</ul>
				<div id="bottom">
					<Link to="/">返回首页</Link>
					<Link>客户端</Link>
					<Link>电脑端</Link>
				</div>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default MinePage