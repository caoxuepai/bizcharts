import React, {Component} from 'react';
import {Card} from 'antd';


class TopWebsites extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // {"url" : "www.weibo.com", "type" : "社交网站", "times" : "143458524"}

            ]
        }
        this.getData = this.getData.bind(this);
    }

    getData () {
       const res = {
           "success": true,
           "msg": "成功",
           "obj": [
               {
                   "surfUrl": "163.com",
                   "visitCounts": 81883,
                   "surfType": "综合门户"
               },
               {
                   "surfUrl": "douyu.com",
                   "visitCounts": 81875,
                   "surfType": "在线直播"
               },
               {
                   "surfUrl": "jingdong.com",
                   "visitCounts": 81856,
                   "surfType": "网上购物"
               },
               {
                   "surfUrl": "sina.com.cn",
                   "visitCounts": 81705,
                   "surfType": "综合门户"
               },
               {
                   "surfUrl": "bbs.tianya.cn",
                   "visitCounts": 81487,
                   "surfType": "网络社区"
               },
               {
                   "surfUrl": "iqyi.com",
                   "visitCounts": 81258,
                   "surfType": "在线直播"
               },
               {
                   "surfUrl": "zhihu.com",
                   "visitCounts": 81202,
                   "surfType": "社交网站"
               },
               {
                   "surfUrl": "tieba.baidu.com",
                   "visitCounts": 81189,
                   "surfType": "网络社区"
               },
               {
                   "surfUrl": "bbs.hupu.com",
                   "visitCounts": 80888,
                   "surfType": "网络社区"
               },
               {
                   "surfUrl": "tengxu.com",
                   "visitCounts": 80843,
                   "surfType": "在线直播"
               }
           ],
       }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        url: unit.surfUrl,
                        type: unit.surfType,
                        times: unit.visitCounts
                    })
                })
                this.setState({
                    data: newData
                })
            } else {
                this.setState({
                    data: []
                })
            }
    }

    componentDidMount(){
        this.getData()
    }

    render () {
        const listItems = this.state.data.map((item,index) => {
                if (index < 3){
                    return(
                        <li key={index}>
                            <span className="seq select-active">{index + 1}</span>
                            <span className="seq-two">{item.url}</span>
                            <span className="text-right">{item.type}</span>
                            <span className="text-right">{item.times}次</span>
                        </li>
                    )
                } else {
                    return(
                        <li key={index}>
                            <span className="seq">{index + 1}</span>
                            <span className="seq-two">{item.url}</span>
                            <span className="text-right">{item.type}</span>
                            <span className="text-right">{item.times}次</span>
                        </li>
                    )
                }
            }
        );

            return (
                <Card style={{height: this.props.height, width: '100%'}}>
                    <h4 className="common-title">热门网站排行</h4>
                    <ul className="top-list">{listItems}</ul>
                </Card>
            )
        }
}

export default TopWebsites