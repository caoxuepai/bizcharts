import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip} from 'bizcharts';


class IndividualHelp extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { award: '勤工俭学', money: 38 }
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
                    "money": 100,
                    "type": "贷款"
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        award: unit.type,
                        money: unit.money
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

    componentDidMount () {
        this.getData();
    }

    render () {
        const cols = {
            'sales': {tickInterval: 20},
        };

            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">个人奖助情况
                        <span> 奖助金额（单位：元）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 40}
                        data={this.state.data}
                        scale={cols}
                        forceFit
                    >
                        <Axis name="award" />
                        <Axis name="money" />
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom
                            type="interval"
                            position="award*money"
                            tooltip={['award*money', (award,money)=>{
                                return {
                                    name: award,
                                    value: money
                                }
                            }]}
                        />
                    </Chart>
                </Card>
            )
        }
}

export default IndividualHelp