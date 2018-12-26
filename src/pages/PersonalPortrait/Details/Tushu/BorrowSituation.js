import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class BorrowSituation extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { borrowMonth: '1月', '本人': 7.0, '平均': 3.9 }
            ]
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
                        "borrowMonth": "1月",
                        "本人": 0,
                        "平均": 2.67
                    },
                    {
                        "borrowMonth": "2月",
                        "本人": 0,
                        "平均": 1.5
                    },
                    {
                        "borrowMonth": "3月",
                        "本人": 1,
                        "平均": 1.44
                    },
                    {
                        "borrowMonth": "4月",
                        "本人": 0,
                        "平均": 1.71
                    },
                    {
                        "borrowMonth": "5月",
                        "本人": 0,
                        "平均": 1.22
                    },
                    {
                        "borrowMonth": "6月",
                        "本人": 0,
                        "平均": 1.58
                    },
                    {
                        "borrowMonth": "7月",
                        "本人": 0,
                        "平均": 0
                    },
                    {
                        "borrowMonth": "8月",
                        "本人": 0,
                        "平均": 0
                    },
                    {
                        "borrowMonth": "9月",
                        "本人": 0,
                        "平均": 1.23
                    },
                    {
                        "borrowMonth": "10月",
                        "本人": 0,
                        "平均": 1.25
                    },
                    {
                        "borrowMonth": "11月",
                        "本人": 0,
                        "平均": 2.04
                    },
                    {
                        "borrowMonth": "12月",
                        "本人": 0,
                        "平均": 1.35
                    }
                ]
            },
        }
            if (res.success) {
                let newData = [];
                res.obj.data.forEach((unit) => {
                    newData.push(unit)
                });
                this.setState({
                    data: res.obj.data
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
            fields: [ '本人', '平均' ], // 展开字段集
            key: 'book', // key字段
            value: 'number', // value字段
        });
        const cols = {
            borrowMonth: {
                range: [ 0, 1 ]
            }
        }
        
            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">借阅概况
                        <span>（单位:次）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 40}
                        data={dv}
                        scale={cols}
                        forceFit
                    >
                        <Legend />
                        <Axis name="borrowMonth" />
                        <Axis name="number" label={{formatter: val => `${val}`}}/>
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom type="line" position="borrowMonth*number" size={2} color={['book',['#1890ff','#facc14']]} />
                        <Geom type='point' position="borrowMonth*number" size={4} shape={'circle'} color={['book',['#1890ff','#facc14']]} style={{ stroke: '#fff', lineWidth: 1}} />
                    </Chart>

                </Card>
            )
        }
}


export default BorrowSituation