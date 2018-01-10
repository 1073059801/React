import React,{Component} from "react"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class DetailsBanner extends Component {
	 state = {
      focus: [],
      imgHeight: 176
	  }
	  componentDidMount() {
	  	// console.log(this.props.params)
	  	var id=this.props.params.splat
		//https://webservice.juanpi.com/api/getDetailFirst?goods_id=70280455
	    fetch(`/juanpi/api/getDetailFirst?goods_id=`+id).then(res=>res.json()).then(data=>{
			// console.log(data)
          this.setState({
          focus:data.goodImages
          })
        })
        
	  }
	render(){
		return (
        <Carousel
          autoplay={false}
          infinite={Boolean}
          selectedIndex={1}  
        >
          {this.state.focus.map(ii => (
            <a
              key={ii}
              href="#"  
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={ii}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
		)
	}
}


export {DetailsBanner}