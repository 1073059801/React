import React,{Component} from "react"
import { Tabs, WhiteSpace } from 'antd-mobile';
import {connect} from "react-redux"
import {Link} from "react-router"

class Motion extends Component {
	state = {
	     focus:[]
	  }
		componentDidMount() {
		    // simulate img loading
		     fetch(`/juanpi/api/getBrandClearanceOtherGoods?cate_key=yundong&page=1&pf=m`).then(res=>res.json()).then(data=>{
//		   	console.log(data.data.goods[0])
		      this.setState({
		        focus:data.data.goods
		      })
		    })
		  }

	render(){
		const {focus} = this.state
		return (
		<div>
			<div className="BestSellers">
				{
					focus.map((ele, index)=>(
										<div className="commodity" key={index}>
					<div className="commodity_top">
						<a href={ele.goods_jump_url}> 
						<img src={ele.ss_cover} alt="" />
						</a>
					</div>
					<ul className="commodity_bottom">
							{	
								ele.sub_data&&ele.sub_data.map((pro, inde)=>(
									<li key={inde}>
										<Link to={"/deta/"+pro.goods_id}>
										<div className="img">
											<div className="img_position">
											
											</div>
											<img src={pro.pic} alt=""/>
										</div>
										<p>
											<span>{pro.cp}</span>
											<i>清仓价</i>
										</p>
										<span className="span">
											{pro.title}
										</span>
									</Link>
									</li>
								))
							}
					</ul>
				</div>
					))
				}
			</div>
      	</div>
		)
	}
}

export {Motion}
