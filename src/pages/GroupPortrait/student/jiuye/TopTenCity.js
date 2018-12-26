import React, {Component} from 'react';
import {Card} from 'antd';
import './JobAnalysis.less';




class TopTenCity extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                { "cityName": "其他城市", "peopleNum": 1325 },
                { "cityName": "江苏省南京市", "peopleNum": 1112 },
                { "cityName": "江苏省苏州市", "peopleNum": 314 },
                { "cityName": "江苏省常州市", "peopleNum": 197 },
                { "cityName": "江苏省如皋市", "peopleNum": 185 },
                { "cityName": "江苏省南通市", "peopleNum": 170 },
                { "cityName": "江苏省无锡市", "peopleNum": 169 },
                { "cityName": "江苏省溧阳市", "peopleNum": 158 },
                { "cityName": "江苏省扬州市", "peopleNum": 150 },
                { "cityName": "江苏省连云港市", "peopleNum": 138 }
            ]
        }
    }

    render(){
        const listItems = this.state.data.map((item,index) => {
                if (index < 3){
                    return(
                        <li key={index}>
                            <span className="seq select-active">{index + 1}</span>
                            <span className="seq-two">{item.cityName}</span>
                            <span className="text-right">{item.peopleNum}人</span>
                        </li>
                    )
                } else {
                    return(
                        <li key={index}>
                            <span className="seq">{index + 1}</span>
                            <span className="seq-two">{item.cityName}</span>
                            <span className="text-right">{item.peopleNum}人</span>
                        </li>
                    )
                }
            }
        );

        return(
            <Card style={{height:this.props.height, width:'100%'}}>
                <h4 className="common-title">毕业去向前十的城市
                    <span>（单位： 人）</span>
                </h4>
                <ul className="top-list">{listItems}</ul>
            </Card>
        )
    }
}


export default TopTenCity

