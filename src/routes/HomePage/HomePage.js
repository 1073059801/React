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
import {Brand} from "./Brand/Brand" 

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
						{/*轮播图*/}
					<div className="banner">
						<Banner></Banner>
					</div>
						{/*各个分类*/}
					<Cation></Cation>
						{/*限时秒杀  及其它下面的  商品的 分类*/}
					<Seckill></Seckill>
						{/*精选品牌*/}
					<Brand></Brand>
					<ComTad></ComTad>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
}

export default HomePage