import React,{Component} from "react"
import {Link} from "react-router"
import "./details.scss"


class DetailsFooter extends Component {
	render(){
		return(
			<div className="DetailsFooter">
				 <ul>
			          <li>
			            <dt><Link to="/"  activeClassName="active" className="iconfont icon-shouye"></Link></dt>
			            <dd><Link to="/" activeClassName="active">首页</Link></dd>
			          </li>
			          
			            
			            
			          
			          <li>
			            <dt><Link to="/cart" className="iconfont icon-gouwuche
" activeClassName="active"></Link></dt>
			            <dd><Link to="/cart" activeClassName="active">购物车</Link></dd>
			          </li>
			          
			          <li className="addcart">
			          	<Link to="/">
			          		立即购买
			          	</Link>
			          </li>
			          
			          <li className="addcart addcart2">
			          	<Link to="/">
			          		加入购物车
			          	</Link>
			          </li>
      			 </ul>
			</div>
		)
	}

	
}


export{ DetailsFooter }