import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class TimeDistribution extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { month: '1月', '本人': 7.0, '全校平均': 3.9 }
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
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "1月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "2月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "3月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "4月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "5月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "6月"
                },
                {
                    "surfDuration": 12,
                    "average": 210.5,
                    "surfMonth": "7月"
                },
                {
                    "surfDuration": 57,
                    "average": 57,
                    "surfMonth": "8月"
                },
                {
                    "surfDuration": 72,
                    "average": 72,
                    "surfMonth": "9月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "10月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "11月"
                },
                {
                    "surfDuration": 0,
                    "average": 0,
                    "surfMonth": "12月"
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        month: unit.surfMonth,
                        '本人': unit.surfDuration,
                        '全校平均': unit.average
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
        this.getData()
    }

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '本人', '全校平均' ], // 展开字段集
            key: 'hour', // key字段
            value: 'number', // value字段
        });
        const cols = {
            month: {
                range: [ 0, 1 ]
            }
        }

            return (
                <Card style={{widht:"100%", height:this.props.height}}>
                    <h4 className="common-title">上网时长分布
                        <span>（单位：小时）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 40}
                        data={dv}
                        scale={cols}
                        forceFit
                    >
                        <Legend />
                        <Axis name="month" />
                        <Axis name="number" label={{formatter: val => `${val}`}}/>
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom type="line" position="month*number" size={2} color={['hour',["#f5a623","#4a90e2"]]} />
                        <Geom type='point' position="month*number" size={4} shape={'circle'} color={['hour',["#f5a623","#4a90e2"]]} style={{ stroke: '#fff', lineWidth: 1}} />
                    </Chart>
                </Card>
            )
        }
}

export default TimeDistribution