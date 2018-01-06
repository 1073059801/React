import React,{Component} from "react"
import {Header,Content,Footer} from "../../components/public"
import "./index.scss"
import { Tabs, WhiteSpace } from 'antd-mobile';
import {Banner} from "./Banner/Banner"
import Coupons from "./image/Coupons.png"
import {Clearance} from "./Clearance/Clearance"
import {BestSellers} from "./BestSellers/BestSellers"
import {Boutique} from "./BestSellers/Boutique"
import {Shoes} from "./BestSellers/Shoes"
import {Motion} from "./BestSellers/Motion"

class DiscountPage extends Component {
	
	render(){

		const tabs = [
		  { title: '精选' },
		  { title: '美妆' },
		  { title: '鞋子' },
		  { title: '运动' }
		];
		return (
			<div id="discount" className="div">
				<Header>
					<a className="iconfont icon-fanhuishangyiye-jiachang" href="javascript:window.history.go(-1);"></a>
					<p>品牌特卖</p>
					<a></a>
				</Header>
				<Content>
					<div className="commoditydetails">
				 	<WhiteSpace />
				    	<Tabs animated={true} tabs={tabs} initialPage={0} useOnPan={false} tabBarActiveTextColor={false}>
				      	<div className="Selected">
				      		<Banner></Banner>
				      		<div className="Coupons">
				      			<img src={Coupons} alt=""/>
				      		</div>
				      		<Clearance></Clearance>
				      		<BestSellers />
				      	</div>
				      	
					    <div>
					    	<Boutique />
					    </div>
					    <div>
					    	<Shoes />
					    </div>
					    <div>
					      <Motion />
					    </div>
				    </Tabs>
				    <WhiteSpace />
				</div>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default DiscountPage