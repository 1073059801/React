import React,{Component} from "react"
import { Tabs, WhiteSpace } from 'antd-mobile';
import {Link} from "react-router"

class Clearance extends Component {
		state = {
			     focus:[],
			     focus2:[],
			     focus3:[],
			     focus4:[],
			     focus5:[],
			     focus6:[],
			     focus7:[]
			  }
		componentDidMount() {
		    // simulate img loading
		     fetch(`/juanpi/api/getBrandClearanceLimitAndAds?cid=ppqc_jingxuan&zy_ids=c4_l4_0&app_name=zhe&catname=`).then(res=>res.json()).then(data=>{
		    console.log(data.limitInfo.data)
		      this.setState({
		        focus:data.limitInfo,
		        focus2:data.limitInfo.data[0].goods,
		        focus3:data.limitInfo.data[1].goods,
		        focus4:data.limitInfo.data[2].goods,
		        focus5:data.adsInfo.block[0].multi_block[0].data[0].child,
		        focus6:data.adsInfo.block[0].multi_block[1].data[0].child,
		        focus7:data.adsInfo.block[0].multi_block[2].data[0].child
		      })
		    })
		  }
	render(){
		const {focus, focus2, focus3, focus4, focus5, focus6, focus7} = this.state
		const tabs = [
		  { title: '10:00' },
		  { title: '14:00' },
		  { title: '20:00' },
		];
		return (
		<div>
			<div className="Clearance">
      			<div className="Clearance_top"> 
      				<img src={focus.bg_img} alt="" />
      			</div>
      			<div className="Clearance_bottom">
				    <Tabs animated={true} tabs={tabs} initialPage={0} useOnPan={false} tabBarActiveTextColor={false}>
				      <div className="one">
				      {
				      	focus2.map((ele, index)=>(
				      		<div className="one_" key={index}>
							  {/* <Link to={"/deta/"+pro.goods_id}> */}
							  <Link to={"/deta/"+ele.en_gid}>
				      			<div className="img">
				      				<img src={ele.gi_pic} alt=""/>
				      				{/* <div className="img_position">
				      					<img src={ele.corner} alt="" />
				      				</div> */}
				      				<div className="img_posi">
									  
				      					<img src={ele.logo_url} alt="" />
				      				</div>
				      			</div>
				      			<p><span>￥{ele.gi_tuan_price}</span><i>￥{ele.gi_price}</i></p>
							   </Link>
				      		</div>
				      	))
				      }
				      </div>
				      
				      <div className="one">
				      	{
				      	focus3.map((ele, index)=>(
				      		<div className="one_" key={index} >
				      			<div className="img">
				      				<img src={ele.gi_pic} alt=""/>
				      				{/* <div className="img_position">
				      					<img src={ele.corner} alt="" />
				      				</div> */}
				      				<div className="img_posi">
				      					<img src={ele.logo_url} alt="" />
				      				</div>
				      			</div>
				      			<p><span>￥{ele.gi_tuan_price}</span><i>￥{ele.gi_price}</i></p>
				      		</div>
				      	))
				      }
				      </div>
				      <div className="one">
				      	{
				      	focus4.map((ele, index)=>(
				      		<div className="one_" key={index}>
				      			<div className="img">
				      				<img src={ele.gi_pic} alt=""/>
				      				{/* <div className="img_position">
				      					<img src={ele.corner} alt="" />
				      				</div> */}
				      				<div className="img_posi">
				      					<img src={ele.logo_url} alt="" />
				      				</div>
				      			</div>
				      			<p><span>￥{ele.gi_tuan_price}</span><i>￥{ele.gi_price}</i></p>
				      		</div>
				      	))
				      }
				      </div>
				    </Tabs>
      			</div>
      		</div>
      		
  			<div className="Majorsuit">
  				<div className="Majorsuit_top">
					<img src={focus5} alt=""/>
  				</div>
  				<ul className="Majorsuit_con">
  				{
  					focus6.map((ele, index)=>(
	  						<li key={index}>
		  						<a href={ele.url}>
			  						<img src={ele.pic} alt="" />
		  						</a>
	  						</li>
  					))
  				}
  				</ul>
  				<ul className="Majorsuit_con">
  					{
	  					focus7.map((ele, index)=>(
	  						<li key={index}>
	  							<a href={ele.url}>
			  						<img src={ele.pic} alt="" />
		  						</a>
	  						</li>
	  					))
	  				}
  				</ul>
  			</div>
      	</div>
		)
	}
}

export {Clearance}