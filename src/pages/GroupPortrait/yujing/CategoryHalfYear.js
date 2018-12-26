import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class CategoryHalfYear extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { month: '2017/11', '失联': 7.0, '消费': 3.9, '网络': 5 , '学业': 4.6 }
            ],
            fieldData: []
        }
        this.getData = this.getData.bind(this);
    }

    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "data": [
                    {
                        "month": "01",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "02",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "03",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "04",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "05",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "06",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "07",
                        "网络": 0,
                        "失联": 0,
                        "消费": 0
                    },
                    {
                        "month": "08",
                        "网络": 1,
                        "失联": 1,
                        "消费": 1
                    },
                    {
                        "month": "09",
                        "网络": 1,
                        "失联": 1,
                        "消费": 1
                    },
                    {
                        "month": "10",
                        "网络": 1,
                        "失联": 1,
                        "消费": 1
                    },
                    {
                        "month": "11",
                        "网络": 0,
                        "失联": 1,
                        "消费": 2
                    },
                    {
                        "month": "12",
                        "网络": 1,
                        "失联": 1,
                        "消费": 1
                    }
                ],
                "fieldData": [
                    "失联",
                    "消费",
                    "网络"
                ]
            },
        }
            if (res.success) {
                let newData = [];
                res.obj.data.forEach((unit) => {
                    unit.month = Number(unit.month) + "月";
                    newData.push(unit)
                })
                this.setState({
                    data: newData,
                    fieldData: res.obj.fieldData
                })
            } else {
                this.setState({
                    data: [],
                    fieldData: []
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
            fields: this.state.fieldData.length > 0 ? this.state.fieldData : [''], // 展开字段集
            key: 'number', // key字段
            value: 'count', // value字段
        });
        const cols = {
            month: {
                range: [ 0, 1 ]
            }
        }
            return (
                <Card style={{width: '100%', height: this.props.height}}>
                    <h4 className="common-title">预警类别分布趋势
                        <span> 预警次数（单位：次）</span>
                    </h4>
                    <Chart
                        height={this.props.height}
                        data={dv}
                        scale={cols}
                        padding={[20, 50, 130, 50]}
                        forceFit
                    >
                        <Legend/>
                        <Axis name="month"/>
                        <Axis name="count" label={{formatter: val => `${val}`}}/>
                        <Tooltip crosshairs={{type: "y"}}/>
                        <Geom type="line" position="month*count" size={2} color={['number',['#1890ff','#f04864','#2fc25b','#facc14']]}/>
                        <Geom type='point' position="month*count" size={4} shape={'circle'} color={['number',['#1890ff','#f04864','#2fc25b','#facc14']]}
                              style={{stroke: '#fff', lineWidth: 1}}/>
                    </Chart>
                </Card>
            )
        }
}

export default CategoryHalfYear