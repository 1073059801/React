import React,{Component} from "react"
import {Link} from "react-router"
import "./public.css"

class Header extends Component {
	render(){
		return <div className="Header">{this.props.children}</div>
	}
}

class Content extends Component {
	render(){
		return <div className="Content">{this.props.children}</div>
	}
}

class Footer extends Component {
	render(){
		return(
			<div className="Footer">
				 <ul>
			          <li>
			            <dt><Link to="/"  activeClassName="active" className="iconfont icon-shouye"></Link></dt>
			            <dd><Link to="/" activeClassName="active">首页</Link></dd>
			          </li>
			          
			          <li>
			            <dt><Link to="/discount" className="iconfont icon-cebianlan_xinyongqia" activeClassName="active"></Link></dt>
			            <dd><Link to="/discount" activeClassName="active">品牌秒杀</Link></dd>
			          </li>
			            
			            
			          <li>
			            <dt><Link to="/kind" activeClassName="active" className="iconfont icon-leimupinleifenleileibie"></Link></dt>
			            <dd><Link to="/kind" activeClassName="active">分类</Link></dd>
			          </li>
			          
			          <li>
			            <dt><Link to="/cart" className="iconfont icon-gouwuche
" activeClassName="active"></Link></dt>
			            <dd><Link to="/cart" activeClassName="active">购物车</Link></dd>
			          </li>
			          <li>
			            <dt><Link to="/mine" className="iconfont icon-wodedangxuan
" activeClassName="active"></Link></dt>
			            <dd><Link to="/mine" activeClassName="active">我的卷皮</Link></dd>
			          </li>
      			 </ul>
			</div>
		)
	}
}

export{Header,Content,Footer}
