import React,{Component} from "react"
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';
class Banner extends Component {
	state = {
	     focus:[{},{},{}],
	    imgHeight: 176,
	  }
componentDidMount() {
    // simulate img loading
     fetch(`/juanpi/api/getIndexFirstPaintInfo?cid=&zy_ids=p8_c4_l4_0&app_name=zhe&app_version=&platform=&catname=newest_zhe`).then(res=>res.json()).then(data=>{
//    console.log(data.adsInfo.slide_ads.config.slide)
      this.setState({
        focus:data.adsInfo.slide_ads.config.slide
      })
    })
  }
	render(){
		return (
			<Carousel
          autoplay={Boolean}
          infinite={Boolean}
          selectedIndex={1}
//        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//        afterChange={index => console.log('slide to', index)}
        >
          {this.state.focus.map(ii => (
            <a
              key={ii}
              href={ii.jump_url}
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={ii.pic}
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


export {Banner}