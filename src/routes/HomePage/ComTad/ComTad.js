import React,{Component} from "react"
import img from "../image/logo.png"
import img1 from "../image/sp_1.png"
import { Tabs, WhiteSpace } from 'antd-mobile';

class ComTad extends Component {
	state = {
	    focus:[],
	    focus2:[],
	    focus3:[],
	    focus4:[]
	}
	componentDidMount() {
		
	     fetch(`/juanpi/api/getGoods?page=2&zy_ids=p8_c4_l4_0&app_name=zhe&catname=newest_zhe&flag=tab_hpzc`).then(res=>res.json()).then(data=>{
//	    	console.log(data.data.goods)
	      this.setState({
	        focus:data.data.goods
	        
	      })
	    })
	    fetch(`/juanpi/api/getGoods?page=1&zy_ids=p8_c4_l4_0&app_name=zhe&catname=newest_zhe_jingxuandanpin&flag=tab_hpdp`).then(res=>res.json()).then(data=>{
//	    	console.log(data.data.goods)
	      this.setState({
	        focus2:data.data.goods
	        
	      })
	    })
	}
	render(){
		const {focus, focus2} = this.state
		const tabs = [
		  { title: '精选专场' },
		  { title: '精选单品' }
		];
		return (
			<div className="commoditydetails">
				 <WhiteSpace />
				    <Tabs animated={true} tabs={tabs} initialPage={0} useOnPan={false} tabBarActiveTextColor={false}>
				      <div>
				        <ul className="commoditydetails_content">
				        {
				        	focus.map((ele, index)=>(
				        		<li className="con_list" key={index}>
				        		<a href={ele.goods_jump_url}>
									<div className="img" >
										<img className="img_one" src={ele.pic_url} alt="" />
										<div className="img_position">
											<img className="img_two" src={ele.logo_url} alt="" />
										</div>
									</div>
									<div className="con_list_2">
										<i>{ele.coupon_tips}</i>
										<p><s>{ele.title}</s><span>上新</span></p>
									</div>
								</a>
								</li>
				        	))
						}
						</ul>
				      </div>
				      <div>
				        <ul className="commoditydetails_content">
					        {
					        	focus2.map((ele, index)=>(
						        	<li className="con_list" key={index}>
						        		<a href={ele.goods_jump_url}>
											<div className="img" >
												<img className="img_one" src={ele.pic_url} alt="" />
											</div>
											<div className="con_list_2">
												<i>￥{ele.cprice}<span>￥{ele.oprice}</span></i>
												<p><s>{ele.title}</s><span>{ele.time_left}</span></p>
											</div>
										</a>
									</li>
					        	))
							}
						</ul>
				      </div>
				    </Tabs>
				    <WhiteSpace />
			</div>
		)
	}
}


export {ComTad}