import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class DistributionHalfYear extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { month: '2017/11', '黄': 7.0, '橙': 3.9, '红': 6.9, '蓝': 5.5 }
            ],
            fieldData : []
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
                        "红": 0,
                        "month": "01",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "02",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "03",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "04",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "05",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "06",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "07",
                        "黄": 0,
                        "橙": 0,
                        "蓝": 0
                    },
                    {
                        "红": 0,
                        "month": "08",
                        "黄": 0,
                        "橙": 2,
                        "蓝": 1
                    },
                    {
                        "红": 1,
                        "month": "09",
                        "黄": 0,
                        "橙": 1,
                        "蓝": 1
                    },
                    {
                        "红": 1,
                        "month": "10",
                        "黄": 0,
                        "橙": 1,
                        "蓝": 1
                    },
                    {
                        "红": 1,
                        "month": "11",
                        "黄": 0,
                        "橙": 1,
                        "蓝": 1
                    },
                    {
                        "红": 1,
                        "month": "12",
                        "黄": 0,
                        "橙": 1,
                        "蓝": 1
                    }
                ],
                "fieldData": [
                    "红",
                    "橙",
                    "黄",
                    "蓝"
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
            key: 'color', // key字段
            value: 'count', // value字段
        });
        const cols = {
            month: {
                range: [ 0, 1 ]
            }
        }

            return (
                <Card style={{width: '100%', height: this.props.height}}>
                    <h4 className="common-title">预警级别分布趋势
                        <span> 预警次数（单位： 次）</span>
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
                        <Geom type="line" position="month*count" size={2} color={['color',['#facc14','#f5a623','#f04864','#1890ff']]}/>
                        <Geom type='point' position="month*count" size={4} shape={'circle'} color={['color',['#facc14','#f5a623','#f04864','#1890ff']]}
                              style={{stroke: '#fff', lineWidth: 1}}/>
                    </Chart>
                </Card>
            )
        }
}

export default DistributionHalfYear