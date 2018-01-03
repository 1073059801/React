import React,{Component} from "react"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import pic from "../image/logo.png"

class Seckill extends Component {
	state = {
	    focus:[],
	    focus2:[]
	}
	componentDidMount() {
	    // simulate img loading
	     fetch(`/juanpi/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe`).then(res=>res.json()).then(data=>{
	    console.log(data.adsInfo.block[0].multi_block[2].data)
	      this.setState({
	        focus:data.adsInfo.block[0].multi_block[2].data,
	        focus2:data.adsInfo.block[0].multi_block[3].data.child
	      })
	    })
	}
	
	render(){
		const {focus} = this.state
		const {focus2} = this.state
		console.log(focus2)
		return (
			<div className="seckill">
						<div className="seckill_top">
					 		<div className="top_left">
					 			<img src={focus.left_img} alt="" />
					 		</div>
					 		<div className="top_content">
					 			<p>{focus.text}</p>
					 			<span>
					 				<i>00</i>:<i>00</i>:<i>00</i>
					 			</span>
					 		</div>
					 		<div className="top_right">
					 			<img src={focus.right_img} alt="" />
					 		</div>
					 	</div>
			 	
			 	<div className="seckill_button">
			 			{
			 				focus2.map((ele,index)=>(
			 					<a key={index} href={ele.jump_url}>
					 			<div className="sp" key={index}>
						 			<img src={ele.pic_url} alt="" />
						 			<div className="jg">
						 			<b>{ele.cprice}</b>
						 			<span>{ele.oprice}</span>
						 			</div>
						 			<div className="js">
						 				{ele.title}
						 			</div>
						 		</div>
						 		</a>
					 		))
			 			}
			 	</div>
			 </div>
		)
	}
}


export {Seckill}