import React from 'react';
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';

class Qushi extends React.Component {

    constructor(props){
        super(props);
        this.state={
            data: [
                // { month: "1月", value: 3 }
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
                    "borrowMonth": "1月",
                    "borrowTimes": 16
                },
                {
                    "borrowMonth": "2月",
                    "borrowTimes": 9
                },
                {
                    "borrowMonth": "3月",
                    "borrowTimes": 26
                },
                {
                    "borrowMonth": "4月",
                    "borrowTimes": 12
                },
                {
                    "borrowMonth": "5月",
                    "borrowTimes": 11
                },
                {
                    "borrowMonth": "6月",
                    "borrowTimes": 19
                },
                {
                    "borrowMonth": "7月",
                    "borrowTimes": 0
                },
                {
                    "borrowMonth": "8月",
                    "borrowTimes": 0
                },
                {
                    "borrowMonth": "9月",
                    "borrowTimes": 27
                },
                {
                    "borrowMonth": "10月",
                    "borrowTimes": 20
                },
                {
                    "borrowMonth": "11月",
                    "borrowTimes": 57
                },
                {
                    "borrowMonth": "12月",
                    "borrowTimes": 31
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        month: unit.borrowMonth,
                        value: unit.borrowTimes
                    })
                })
                this.setState({
                    data: newData
                })
            } else {
                this.setState({
                    data:[]
                })
            }
    }

    componentDidMount () {
        this.getData()
    }

    render () {
        const cols = {
            'value': { min: 0 },
            'month': {range: [ 0 , 1] }
        };
            return (
                <Card style={{height: this.props.height}}>
                    <h4 className="common-title">不同时间借阅趋势
                        <span>(单位： 次)</span>
                    </h4>
                    <Chart
                        height={this.props.height - 60}
                        data={this.state.data}
                        scale={cols}
                        padding={["20","30","60","50"]}
                        forceFit
                    >
                        <Axis name="month" />
                        <Axis name="value" />
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom 
                            type="line" 
                            position="month*value" 
                            size={2} 
                            tooltip={['month*value', (month, value)=>{
                                return {
                                    name:'借阅数量',
                                    value,
                                }
                            }]}   
                        />
                        <Geom type='point' position="month*value" size={4} shape={'circle'} style={{ stroke: '#fff', lineWidth: 1}} />
                    </Chart>
                </Card>
            )
        }
}

export default Qushi