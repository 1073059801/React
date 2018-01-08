import React,{Component} from "react"
import {Header, Content, Footer} from "../../components/public"
import {DetailsFooter} from "./DetailsFooter.js"
import {Link} from "react-router"
import pic from "./image/Collection.png"
import "./details.scss"
import { Tabs, WhiteSpace } from 'antd-mobile';

class Details extends Component{

	state = {
		focus:[],
		VIP:[],
		details:[],
		lunbo:[]
	 }
	   componentDidMount() {
		//    console.log(this.props.params)
		   var id=this.props.params.splat

		   // simulate img loading
		// https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=74560843&sa_id=14197417&is_pt_goods=0&req_coupons_id=74560843&is_vip=0
		fetch(`/juanpi/api/getMemberAboutInfo?goods_id=`+id+`&is_pt_goods=0&req_coupons_id=74560843&is_vip=0`).then(res=>res.json()).then(data=>{
			console.log(data.skudata.sku)
			
			  this.setState({
				focus:data.discount.coupon[0],
				VIP:data.discount.vip_info,
				details:data.skudata.info,

			  })
		    })
		 }
	render(){
		const {focus, VIP, details} = this.state
		const tabs = [
			{ title: '图文详情' },
			{ title: '商品参数' },
			{ title: '咨询与售后' }
		  ];
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
									￥{details.cprice}
								</span>
								<s>
									￥{details.oprice}
								</s>
								<i>
									包邮
								</i>
							</div>
							<p style={{color:"#999"}}>{details.join_number}</p>
						</div>
						<div className="introduce_bottom">
							<p>{details.goods_title}</p>
							<button>
								
							</button>
						</div>
						
					</div>
					<div className="discount" id="discount_one">
						<div className="left">
							<span>{focus.title}</span>
							<i>{focus.content}</i>
							
						</div>
						<div className="right">
							<span>•••</span>
						</div>
					</div>					
					<a href={VIP.jump_url} className="discount">
						<div className="left">
							<p style={{color:"#000"}}><span style={{color:"#f66",border:"1px solid #f66"}}>VIP</span>{VIP.content}</p>						
						</div>
						<div className="right">
						<span className="iconfont icon-arrow-right"></span>
						</div>
					</a>
					<div className="discount">
						<div className="left">
							<p><span>•</span>24小时发货</p>
							<p><span>•</span>7天包退</p>
							<p><span>•</span>售后补贴</p>
						</div>
						<div className="right">
							<span>•••</span>
						</div>
					</div>
					<div className="discount" id="Selected">
						<div className="left">
							<p>已选择：</p>
							<p>黑白小格XL</p>
						
						</div>
						<div className="right">
							<span className="iconfont icon-arrow-right"></span>
						</div>
					</div>
					<div className="shop">
						<div className="shop_top">
							<div className="shop_logo">

							</div>

							<div className="content">
								<p>言吾女装品质专场</p>
								<span>25万人已购</span>
							</div>
							<div className="right">
								<p>
									进入专场
									<span className="iconfont icon-arrow-right"></span>
								</p>
							</div>
						</div>
						<ul className="shop_con">
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<div className="shop_bottom">
							查看店铺所欲商品
						</div>
						<div>
						<WhiteSpace />
							<Tabs animated={true} tabs={tabs} initialPage={0} useOnPan={false} tabBarActiveTextColor={false}>
							
							<div>
							</div>

							<div>
							</div>

							<div>
							</div>
						</Tabs>
						<WhiteSpace />

						</div>

					</div>
				</Content>
				<DetailsFooter></DetailsFooter>
			</div>
		)
	}
}

export default Details