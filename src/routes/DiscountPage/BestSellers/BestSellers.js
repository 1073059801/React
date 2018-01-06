import React,{Component} from "react"
import { Tabs, WhiteSpace } from 'antd-mobile';
import {connect} from "react-redux"

class BestSellers extends Component {
	state = {
	     focus:[]
	  }
		componentDidMount() {
		    // simulate img loading
		    http://webservice.juanpi.com/
		     fetch(`/juanpi/api/getBrandClearanceGoods?cid=ppqc_jingxuan&zhouyi_ids=p8_c4_l4_0&page=2`).then(res=>res.json()).then(data=>{
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
				<h3>
					<span>大牌狂欢齐嗨购</span>
					<i></i>
				</h3>
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
								ele.sub_data.map((pro, inde)=>(
									<li key={inde}>
										<a href={pro.jump_url}>
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
										</a>
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

export {BestSellers}
