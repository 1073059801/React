import React,{Component} from "react"
import {Header,Content,Footer} from "../../components/public"

class MinePage extends Component {
	render(){
		return (
			<div id="mine" className="div">
				<Header>我的</Header>
				<Content>个人中心内容</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default MinePage