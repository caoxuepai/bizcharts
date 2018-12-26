import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';



class ConsumerTrends extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { month: '2017/9', '本人': 7.0, '全校平均': 3, '全校男生平均': 5, '全校女生平均': 3 }
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
                    "本人": 0,
                    "month": "01",
                    "全校女生平均": 0.04,
                    "全校平均": 0.04,
                    "全校男生平均": 0.04
                },
                {
                    "本人": 0,
                    "month": "02",
                    "全校女生平均": 0,
                    "全校平均": 0,
                    "全校男生平均": 0
                },
                {
                    "本人": 0.82,
                    "month": "03",
                    "全校女生平均": 0.68,
                    "全校平均": 0.79,
                    "全校男生平均": 0.82
                },
                {
                    "本人": 1.46,
                    "month": "04",
                    "全校女生平均": 2.2,
                    "全校平均": 2.62,
                    "全校男生平均": 2.77
                },
                {
                    "本人": 1.94,
                    "month": "05",
                    "全校女生平均": 2.45,
                    "全校平均": 2.85,
                    "全校男生平均": 2.98
                },
                {
                    "本人": 2.36,
                    "month": "06",
                    "全校女生平均": 2.36,
                    "全校平均": 2.73,
                    "全校男生平均": 2.85
                },
                {
                    "本人": 0,
                    "month": "07",
                    "全校女生平均": 0.36,
                    "全校平均": 0.5,
                    "全校男生平均": 0.54
                },
                {
                    "本人": 1.58,
                    "month": "08",
                    "全校女生平均": 0.54,
                    "全校平均": 0.72,
                    "全校男生平均": 0.79
                },
                {
                    "本人": 3.91,
                    "month": "09",
                    "全校女生平均": 2.45,
                    "全校平均": 2.9,
                    "全校男生平均": 3.06
                },
                {
                    "本人": 3.04,
                    "month": "10",
                    "全校女生平均": 2.23,
                    "全校平均": 2.64,
                    "全校男生平均": 2.79
                },
                {
                    "本人": 2.72,
                    "month": "11",
                    "全校女生平均": 2.55,
                    "全校平均": 2.95,
                    "全校男生平均": 3.1
                },
                {
                    "本人": 1.68,
                    "month": "12",
                    "全校女生平均": 1.71,
                    "全校平均": 1.94,
                    "全校男生平均": 2.02
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    unit.month = Number(unit.month) + "月";
                    newData.push(unit)
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
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '本人', '全校平均', '全校男生平均', '全校女生平均' ], // 展开字段集
            key: 'people', // key字段
            value: 'number', // value字段
        });
        const cols = {
            month: {
                range: [ 0, 1 ]
            }
        }
            return (
                <Card style={{width:'100%',height:this.props.height}}>
                    <h4 className="common-title">消费指数趋势</h4>
                    <Chart
                        height={this.props.height}
                        data={dv}
                        scale={cols}
                        padding={[ 20, 80, 140, 80]}
                        forceFit
                    >
                        <Legend />
                        <Axis name="month" />
                        <Axis name="number" label={{formatter: val => `${val}`}}/>
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom type="line" position="month*number" size={2} color={['people',["#1890ff","#facc14","#2fc25b","#f04864"]]} />
                        <Geom type='point' position="month*number" size={4} shape={'circle'} color={['people',["#1890ff","#facc14","#2fc25b","#f04864"]]} style={{ stroke: '#fff', lineWidth: 1}} />
                    </Chart>
                </Card>
            )
        }
}

export default ConsumerTrends