import React,{Component} from "react"
import {Header,Content,Footer} from "../../components/public"
import {Link} from "react-router"
import {connect} from "react-redux"
import fetchJsonp from 'fetch-jsonp'
import "./kind.css"

class ClassList extends Component{
	changeClass(index){
		this.props.dispatch({
			type:"CHANGE_CLASS_ID",
			payload:{
				classID:index,
			}
		})
	}

render(){
	return(
		<ul className="class-list">
			{
				this.props.classData.map((ele,index)=>(
					<li key={index} onClick={this.changeClass.bind(this,ele.classID)}>{ele.name}</li>
				)
			)
		}
		</ul>
	)
}
}

class ProList extends Component {
	changeClass(index){
		this.props.dispatch({
			type:"PRO_LIST_DATA",
			payload:{
				listData:[]
			}
		})
	}
	
	render(){
		return (
			<ul className="pro-list">
			{
				this.props.listData.map((ele,index)=>(
					<li key={index} className="pro-item">
					<Link>
					<img  alt="" />
					</Link>
					<p></p>
					</li>
				))
			}
			</ul>
		)
	}
}


class KindPage extends Component {
	render(){
		const{listData,classData,dispatch} = this.props
		return (
			<div id="kind" className="div">
				<Header>
					<Link>
						<div className="search">
						<input type="search" id="keyword" name="keyword" placeholder="搜索商品"  disabled />
						</div>
						<p className="iconfont icon-search"></p>
					</Link>
				</Header>	
				<Content>
				<div className="leftcontent">
				<ClassList classData={classData} dispatch={dispatch}></ClassList>
				</div>
				<div className="rightcontent">
				<ProList listData={listData} />
				</div>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
	
	getProData(index){
		
	}
	
	componentDidMount(){
		fetchJsonp("https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1515204323355&callback=jsonp2").then(res=>res.json()).then(data=>{
			console.log(data)
			this.props.dispatch({
				type:"PRO_CLASS_DATA",
				payload:{
					classData:data
				}
			})
		})
		fetchJsonp("https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1515204323355&callback=jsonp2").then(res=>res.json()).then(data=>{
			this.props.dispatch({
				type:"PRO_LIST_DATA",
				payload:{
					listData:data
				}
			})
		})
	}
	
	componentWillReceiveProps(newProps){
		if(newProps.classID != this.props.classID){
			this.getProData(newProps.classID)
		}
	}
	
	/*getProData(id){
		fetchJsonp("https://m.juanpi.com/cate/catelist?pf=8&area=4&bi=222&dtype=jsonp&_=1515204323355&callback=jsonp2")
	}*/
}


{/*class KindPage extends Component {
	render(){
		return (
			<div id="kind" className="div">
				<Header>
					<Link>
						<div className="search">
						<input type="search" id="keyword" name="keyword" placeholder="搜索商品"  disabled />
						</div>
						<p className="iconfont icon-search"></p>
					</Link>
				</Header>	
				<Content>
				<div className="leftcontent">
				
				</div>
				<div className="rightcontent">
				
				</div>
				</Content>
				<Footer></Footer>
			</div>
		)
	}
}*/}


function mapStateToProps(state){
	return {
		classData: state.classData,
		listData: state.listData,
		classID:state.classID
	}
}

export default connect(mapStateToProps)(KindPage)
