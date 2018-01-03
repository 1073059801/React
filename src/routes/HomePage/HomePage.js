import React,{Component} from "react"
import "./HomePage.css"
import {Link} from "react-router"
//图片
import pic from "./image/logo.png"
import top from "./image/top.png"
import {Header,Content,Footer} from "../../components/public"
import {ComTad} from "./ComTad/ComTad"
import {Banner} from "./Banner/Banner"
import {Cation} from "./Cation/Cation"
import {Seckill} from "./Seckill/Seckill"

class HomePage extends Component {
	render(){
		let _this = this
		return (
			<div id="home" className="div">
				<Header></Header>
				<Content>
					 <div className="top">
					 	<img src={top} alt="" />
					 </div>
					 <div className="search">
					 	<label>
					 		<i className="iconfont icon-search"></i>
					 		<span></span>
						 	<input type="text" name="search" id="sea" className="sea" value="" placeholder="输入商品名称"/>
					 	</label>
					 	<i className="search_search"></i>
					 </div>
					 <div className="banner">
					 	<Banner></Banner>
					 </div>
						 <Cation></Cation>
						 
					 	 <Seckill></Seckill>
					 
					 
					 <div className="two">
					 	<a href="#"></a>
					 	<a href="#"></a>
					 </div>
					<div className="commodity">
					 	<a href="#"></a>
					 	<a href="#"></a>
					 	<a href="#"></a>
					 	<a href="#"></a>
					</div>
					 <div className="brand">
					 	<div className="brand_top">
					 		<p>精选品牌</p>
					 		<span>货好不贵的良心品牌</span>
					 	</div>
					 	<div className="brand_content">
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 	</div>
					 	<div className="commoditykind">
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 		<a href="#"></a>
					 	</div>
					</div>
					<ComTad></ComTad>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default HomePage