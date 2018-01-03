import React,{Component} from "react"
import {render} from "react-dom"
import {Router,Route,hashHistory} from "react-router"
import {Provider} from "react-redux"

//HomePage 首页
//DiscountPage 打折
//KindPage 分类
//CartPage 购物车
//MinePage 个人中心
//store  库

import HomePage from "./routes/HomePage/HomePage"
import DiscountPage	from "./routes/DiscountPage/DiscountPage"
import KindPage from "./routes/KindPage/KindPage"
import CartPage from "./routes/CartPage/CartPage"
import MinePage from "./routes/MinePage/MinePage"
import store from "./store"

const App = ()=>{
	return <Provider store={store}>
		<Router history={hashHistory}>
			<Route path="/" component={HomePage}></Route>
			<Route path="/discount" component={DiscountPage}></Route>
			<Route path="/kind" component={KindPage}></Route>
			<Route path="/cart" component={CartPage}></Route>
			<Route path="/mine" component={MinePage}></Route>
		</Router>
	</Provider>
}
render(<App />,document.getElementById("root"))
