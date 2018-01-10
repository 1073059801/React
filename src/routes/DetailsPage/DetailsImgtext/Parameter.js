import React,{Component} from "react"
// import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import qs from 'qs'

class Parameter extends Component {
	state = {
	     focus:[]
	  }
	componentDidMount() {
        var id=this.props.params.splat
	    // simulate img loading
        fetch(`/juanpi/api/getDetailFirst?goods_id=`+id).then(res=>res.json()).then(data=>{
            // console.log(data.goodsDetail)	
            // var arr = eval(data.goodsDetail.images)
            // console.log(arr)
			  this.setState({				
				focus:data.goodsDetail.attr
			  })
			})
	  }
	render(){
        const {focus} = this.state
        if(!focus) return null   
		return (    
			<ul className="Parameter">
				{
					focus.map((ele, index)=>(
						<li key={index}>
							<p>{ele.st_key}</p>
							<span dangerouslySetInnerHTML={{__html:ele.st_value}}></span>
						</li>
					))
				}
                
            </ul>
		)
	}
}


export {Parameter}