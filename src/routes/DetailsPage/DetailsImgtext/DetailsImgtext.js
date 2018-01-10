import React,{Component} from "react"
// import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import qs from 'qs'

class DetailsImgtext extends Component {
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
				focus:data.goodsDetail.images
			  })
			})
	  }
	render(){
        const {focus} = this.state
        if(!focus.length) return null   
		return (    
			<ul className="imgtext">
                {
                    focus.map((ele, index)=>( 
                        <li key={index}><img src={ele} /></li>
                    )) 
                } 
                {/* {  
                    focus.map(function(username){  
                        return <li>{username}</li>  
                    })  
                } */}
            </ul>
		)
	}
}


export {DetailsImgtext}