import React,{Component} from "react"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Brand extends Component {
	state = {
		focus:[],
		focus2:[],
		focus3:[],
		focus4:[],
		focus5:[]
	}
	componentDidMount(){
		fetch(`/juanpi/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe`).then(res=>res.json()).then(data=>{
//			console.log(data.adsInfo.block[0].multi_block[9].data[0].child[0].pic)
			this.setState({
				focus:data.adsInfo.block[0].multi_block[6].data[0].child[0].pic,
				focus2:data.adsInfo.block[0].multi_block[7].data,
				focus3:data.adsInfo.block[0].multi_block[8].data,
				focus4:data.adsInfo.block[0].multi_block[9].data,
				focus5:data.adsInfo.block[0].multi_block[10].data
				
			})
		})
	}
	
	render(){
		const {focus, focus2, focus3, focus4, focus5} = this.state
		return (
			
			<div className="brand">
					 	<div className="brand_top">
					 		<img src={focus} alt="" />
					 	</div>
					 	<div className="brand_content">
					 		{
					 			focus2.map((ele, index)=>(
					 				<a key={index} href={ele.child[0].url}>
					 					<img src={ele.child[0].pic} alt="" />
					 				</a>
					 			))
					 		}
					 		{
					 			focus3.map((ele, index)=>(
					 				<a key={index} href={ele.child[0].url}>
					 					<img src={ele.child[0].pic} alt="" />
					 				</a>
					 			))
					 		}
					 	</div>
					 	<div className="commoditykind">
					 	{
					 		focus4.map((ele, index)=>(
					 			<a href={ele.child[0].url} key={index}>
					 				<img src={ele.child[0].pic} alt=""/>
					 			</a>
					 		))
					 	}
					 	{
					 		focus5.map((ele, index)=>(
					 			<a href={ele.child[0].url} key={index}>
					 				<img src={ele.child[0].pic} alt=""/>
					 			</a>
					 		))
					 	}
					 	</div>
					</div>
		)
	}
}


export {Brand}