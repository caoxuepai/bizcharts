import React, {Component} from 'react';
import {Card, Row, Col} from 'antd';


// 没有import引入， 通过window全局拿取BMap，BMapLib;
const BMap = window.BMap;

class RecentInternetRecords extends Component{

    constructor (props) {
        super (props);
        this.state = {
        	loginTime: "",
            longitude: "",
            latitude: "",
            address: ""
        };
        this.makeMap = this.makeMap.bind(this);
        this.getData = this.getData.bind(this);
    }
    
    makeMap () {
    	if (this.state.longitude && this.state.latitude) {
	    	let map = new BMap.Map("locationMap");
			let point = new BMap.Point(this.state.longitude, this.state.latitude);
			map.centerAndZoom(point, 15);
			map.enableScrollWheelZoom();
			map.enableContinuousZoom();
			
			let makerPoint = new BMap.Point(this.state.longitude, this.state.latitude);
			var marker = new BMap.Marker(makerPoint);
			map.addOverlay(marker);
	    }
    }
    
    getData () {
    	const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "loginTime": "2017-09-25 08:00:00",
                "address": "南京工程大学",
                "latitude": "32.209229",
                "longitude": "118.721777"
            },
		}
    			if (res.success) {
    				let address = res.obj.address;
                    if (address.length > 16) {
                        address = address.substring(0, 16) + "...";
                    }
	    			this.setState(
	    				() => {
	    					return {
	    						loginTime: res.obj.loginTime,
					            longitude: res.obj.longitude,
					            latitude: res.obj.latitude,
					            address: address
	    					}
	    				},
	    				()=>{
	    					this.makeMap();
	    				}
	    			)
    			}
    		}

    componentDidMount() {
    	this.getData();
    }
    

    render () {
    		return (
    		    <Card style={{width:"100%",height:this.props.height}}>
            
    		        <h4 className="common-title">最近上网记录</h4>
                
    		      <Row>
    		        	<Col span={10}>
    		        		<p style={{fontSize:"14px",color:"#aaa"}}>最后上网时间</p>
    		        		<p style={{fontSize:"16px",color:"#333"}}>{this.state.loginTime}</p>
    		        	</Col>
    		        	<Col span={14} style={{paddingRight: "-15px"}}>
    		        		<p style={{fontSize:"14px",color:"#aaa"}}>最后上网地点</p>
    		        		<p title={this.state.address} style={{fontSize:"16px",color:"#333"}}>{this.state.address}</p>
    		        	</Col>
    		       </Row>
                
    		        <div id="locationMap" style={{height: 240, width: "100%"}}></div>
                
    		    </Card>
    		)
    	}
}

export default RecentInternetRecords