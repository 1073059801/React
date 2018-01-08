import React,{Component} from "react"
import {Header,Content,Footer} from "../../components/public"
import {Link} from "react-router"
import "./cart.css"
import pic from "./image/empty-cart.png"

class CartPage extends Component {
	render(){
		return (
			<div id="cart" className="div">
				<Header>
					<span>购物车</span>
					<Link>编辑</Link>
				</Header>
				<Content>
					<div className="empty">
						<img src={pic} alt="" />
						<div className="title">温柔的让我心疼的可爱女人
						</div>
						<Link to="/">今日推荐</Link>
					</div>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default CartPage