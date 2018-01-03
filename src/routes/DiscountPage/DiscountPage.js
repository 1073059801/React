import React,{Component} from "react"
import {Header,Content,Footer} from "../../components/public"

class DiscountPage extends Component {
	render(){
		return (
			<div id="discount" className="div">
				<Header>打折页面</Header>
				<Content>打折内容</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default DiscountPage