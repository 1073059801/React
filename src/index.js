import React,{Component} from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory,IndexRoute} from "react-router"
import {Provider} from "react-redux"

//HomePage 首页
//DiscountPage 打折
//KindPage 分类
//CartPage 购物车
//MinePage 个人中心
//store  库
//Reg 注册
//Login 登录
//Details 详情

import HomePage from "./routes/HomePage/HomePage"
import DiscountPage	from "./routes/DiscountPage/DiscountPage"
import KindPage from "./routes/KindPage/KindPage"
import CartPage from "./routes/CartPage/CartPage"
import MinePage from "./routes/MinePage/MinePage"
import Reg from "./routes/User/Reg/Reg"
import Login from "./routes/User/Login/Login"
import Details from "./routes/DetailsPage/Details"
import store from "./store"

const App = ()=>{
	return <Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={HomePage}></Route>
			<Route path="/discount" component={DiscountPage}></Route>
			<Route path="/kind" component={KindPage}></Route>
			<Route path="/cart" component={CartPage}></Route>
			<Route path="/mine">
				<IndexRoute component={MinePage} />
				<Route path="reg" component={Reg}></Route>
				<Route path="Login" component={Login}></Route>
			</Route>
			
			<Route path="/deta/*" component={Details}></Route>
		</Router>
	</Provider>
}
render(<App />,document.getElementById("root"))