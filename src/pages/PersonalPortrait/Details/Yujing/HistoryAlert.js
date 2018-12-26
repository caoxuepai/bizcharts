import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class HistoryAlert extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { month: '2017/09', '失联': 7.0, '消费': 3.9, '上网': 3.9 }
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
                    "createMonth": "2017-09",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2017-10",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2017-11",
                    "alarmMiss": 1,
                    "alarmNetwork": 0,
                    "alarmConsume": 2
                },
                {
                    "createMonth": "2017-12",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2018-01",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2018-02",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2018-03",
                    "alarmMiss": 2,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2018-04",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2018-05",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 2
                },
                {
                    "createMonth": "2018-06",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 1
                },
                {
                    "createMonth": "2018-07",
                    "alarmMiss": 1,
                    "alarmNetwork": 1,
                    "alarmConsume": 0
                },
                {
                    "createMonth": "2018-08",
                    "alarmMiss": 0,
                    "alarmNetwork": 0,
                    "alarmConsume": 0
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        month: unit.createMonth,
                        '失联': unit.alarmMiss,
                        '消费': unit.alarmConsume,
                        '上网': unit.alarmNetwork
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
            fields: [ '失联', '消费', '上网' ], // 展开字段集
            key: 'warning', // key字段
            value: 'count', // value字段
        });
        const cols = {
            month: {
                range: [ 0, 1 ]
            }
        }

            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">历史预警
                        <span> 预警次数（单位：次）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 40}
                        data={dv}
                        scale={cols}
                        padding={[ 20, 50, 100, 50]}
                        forceFit
                    >
                        <Legend />
                        <Axis name="month" />
                        <Axis name="count" label={{formatter: val => `${val}`}}/>
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom type="line" position="month*count" size={2} color={['warning',['#f04864','#2fc25b','#1890ff','#FACC14']]} />
                        <Geom type='point' position="month*count" size={4} shape={'circle'} color={['warning',['#f04864','#2fc25b','#1890ff','#FACC14']]} style={{ stroke: '#fff', lineWidth: 1}} />
                    </Chart>
                </Card>
            )
        }
}

export default HistoryAlert