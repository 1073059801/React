import React,{Component} from "react"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import {Link} from "react-router"

class Cation extends Component {
		state = {
		     focus:[],
		     focus2:[]
		  }
	componentDidMount() {
	    // simulate img loading
	     fetch(`/juanpi/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe`).then(res=>res.json()).then(data=>{
	      this.setState({
	        focus:data.adsInfo.block[0].multi_block[0].data,
	        focus2:data.adsInfo.block[0].multi_block[1].data
	      })
	    })
	  }
	
	render(){
		const {focus} = this.state
		const {focus2} = this.state
		if(focus.length>0){
			return (
			<div>
				<ul className="cation_1">
				{
					focus.map((ele,index)=>(
						<li key={index}>
							<a href={ele.child[0].url}>
								<img src={ele.child[0].pic} alt="" />
							</a>
							
						</li>
					))
				}
				 </ul>
				 <ul className="cation_1">
					{
						focus2.map((ele,i)=>(
							<li key={i}>
								<a href={ele.child[0].url}>
									<img src={ele.child[0].pic} alt="" />
								</a>
							</li>
						))
					}
				 </ul>
			 </div>
		)
		}else{
				return(
					<div>正在加载</div>
				)
		}
	}
}


export {Cation}