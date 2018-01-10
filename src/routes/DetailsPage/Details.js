import React,{Component} from "react"
import {Header, Content, Footer} from "../../components/public"
import {DetailsFooter} from "./DetailsFooter/DetailsFooter"
import {DetailsBanner} from "./DetailsBanner/DetailsBanner"
import {DetailsImgtext} from "./DetailsImgtext/DetailsImgtext"   
import {Parameter} from "./DetailsImgtext/Parameter.js"      
import {Consultation} from "./DetailsImgtext/Consultation.js"      

import {Link} from "react-router"
import pic from "./image/Collection.png"
import "./details.scss"
import { Tabs, WhiteSpace } from 'antd-mobile';

class Details extends Component{

	state = {
		details:[],
		lunbo:[],
		shouhou:[],
		shouhou1:[],
		VIP:[],
		focus:[],
		baoyou:[],
		baoyou2:[],
		shop:[],
		shop2:[],
		Special:[]
	 }
	   componentDidMount() {
		// console.log(this.props.params)
		var id=this.props.params.splat
		//  限时秒杀的接口  //http://webservice.juanpi.com/api/getDetailFirst?goods_id=77280527
		//https://webservice.juanpi.com/api/getDetailFirst?goods_id=70280455
		fetch(`/juanpi/api/getDetailFirst?goods_id=`+id).then(res=>res.json()).then(data=>{
			console.log(data.brand_info)	
			  this.setState({				
				details:data.baseInfo,
				shouhou:data.commitments.show_content,
				shouhou1:data.commitments,
				baoyou:data.baseInfo.tag_list[0],
				baoyou2:data.goodsDetail,
				shop:data.schedule_info,
				shop2:data.schedule_info.jump_button,
				// Special:data.brand_info.sub_goods
			  })
			})
			fetch(`https://webservice.juanpi.com/api/getMemberAboutInfo?goods_id=73550528&sa_id=`+id+`&is_pt_goods=0&req_coupons_id=73550528&is_vip=0`).then(res=>res.json()).then(data=>{
				// console.log(data.discount.coupon[0].content)
				this.setState({
					VIP:data.discount.vip_info,
					focus:data.discount.coupon[0]
				})
			})
		 }
	render(){
		const {details, shouhou, shouhou1, VIP, focus, baoyou, baoyou2, shop, shop2, Special} = this.state
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
						<DetailsBanner params={this.props.params} />
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
									{baoyou.text}
								</i>
							</div>
							<p style={{color:"#999"}}>{details.join_number}</p>
						</div>
						<div className="introduce_bottom">
							<p>{details.title}</p>
							<button>
								
							</button>
						</div>
						
					</div>
					<div className="discount" id="discount_one">
						<div className="left">
							<span id="left_span">{focus.title}</span>
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
						<a href={shouhou1.jump_url}>
							{
								shouhou.map((ele,index)=>(
									<p key={index}><span>•</span>{ele.content}</p>
								))
							}
						</a>
						</div>
						<div className="right">
							<span>•••</span>
						</div>
					</div>
					<div className="discount" id="Selected">
						<div className="left" style={{display:"flex"}}>
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
								<img src={shop.logo_url}/>
							</div>

							<div className="content">
								<p>{shop.brand_title}</p>
								<span>{shop.store_info}</span>
							</div>
							<div className="right">
								<a>
									{shop2.desc}
									<span className="iconfont icon-arrow-right"></span>
								</a>
							</div>
						</div>
						<div className="discount" id="discount_one">
							<div className="left" style={{display:"flex"}}>
								<span style={{color:"orange",background:"#fff"}}>商家提醒：</span>
								{/* <i style={{color:"#999",}}>此商品由品牌从<span style={{color:"#333",background:"#fff"}}>【{details.shipping_origin}】</span>发货</i> */}
								<div dangerouslySetInnerHTML={{__html:baoyou2.business_reminder}}/>
							</div>
							<div className="right">
								<span></span>
							</div>
						</div>
						<ul className="shop_con">
							{
								Special.map((ele, index)=>(
									<li key={index}>
										<img src={ele.pic}/>
									</li>
								))
							}
						</ul>
						<div className="shop_bottom">
							查看店铺所欲商品
						</div>
						<div>
						<WhiteSpace />
							<Tabs animated={true} tabs={tabs} initialPage={0} useOnPan={false} tabBarActiveTextColor={false}>
							
							<div>
								<DetailsImgtext params={this.props.params}/>
							</div>

							<div>
								<Parameter params={this.props.params}/>
							</div>

							<div>
								<Consultation params={this.props.params}/>
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