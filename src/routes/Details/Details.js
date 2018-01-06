import React,{Component} from "react"
import {Header, Content, Footer} from "../../components/public"
import {DetailsFooter} from "./DetailsFooter.js"
import {Link} from "react-router"
import "./details.scss"

class Details extends Component{
	render(){
		return (
			<div className="div" id="details">
				<Header></Header>
				<Content>
					<div className="banner">
						<div className="banner_position">
							<Link to="/">•••</Link>
						</div>
					</div>
					<div className="introduce">
						<div className="introduce_top">
							<div className="left">
								<span className="left_span">
									$999
								</span>
								<s>
									$999
								</s>
								<i>
									包邮
								</i>
							</div>
							<p>10000人已购</p>
						</div>
						<div className="introduce_bottom">
							<p>哈哈哈哈哈哈哈哈哈哈哈</p>
							<button>
								
							</button>
						</div>
					</div>
				</Content>
				<DetailsFooter></DetailsFooter>
			</div>
		)
	}
}

export default Details