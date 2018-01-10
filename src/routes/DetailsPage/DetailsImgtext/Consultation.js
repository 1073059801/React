import React,{Component} from "react"
// import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';

class Consultation extends Component {
	state = {
	     focus:[]
	  }
	componentDidMount() {
        var id=this.props.params.splat
	    // simulate img loading
        fetch(`/juanpi/api/getDetailFirst?goods_id=`+id).then(res=>res.json()).then(data=>{
            // console.log(data.goodsDetail.logistics.rule_infos)	
            // var arr = eval(data.goodsDetail.images)
            // console.log(arr)
			  this.setState({				
				focus:data.goodsDetail.logistics.rule_infos
			  })
			})
	  }
	render(){
        const {focus} = this.state
        if(!focus) return null   
		return (    
			<ul className="Consultation">
            {
                focus.map((ele,index)=>(
                    <li key={index}>
                        <p dangerouslySetInnerHTML={{__html:ele.ri_title}}></p>
                        <span dangerouslySetInnerHTML={{__html:ele.ri_content}}></span>
                    </li>
                ))
            }   
            </ul>
		)
	}
}


export {Consultation}