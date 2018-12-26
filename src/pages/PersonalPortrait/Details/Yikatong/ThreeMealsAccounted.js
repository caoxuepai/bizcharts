import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord, Legend, Label} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class ThreeMealsAccounted extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { item: '早餐', count: 40 }
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
                    "name": "早餐",
                    "value": 97.1
                },
                {
                    "name": "午餐",
                    "value": 518
                },
                {
                    "name": "晚餐",
                    "value": 673.5
                },
                {
                    "name": "其他",
                    "value": 2613.83
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        item: unit.name,
                        count: unit.value
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
        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(this.state.data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = Math.round(val * 100) + '%';
                    return val;
                }
            }
        }

            return (
                <Card style={{width:"100%",height:this.props.height}}>
                    <h4 className="common-title">三餐占比
                        <span>（单位:元）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 40}
                        data={dv}
                        scale={cols}
                        padding={[ 0, 30, 30, 30 ]}
                        forceFit
                    >
                        <Coord type='theta' radius={0.75} />
                        <Axis name="percent" />
                        <Legend
                            position='right'
                            offsetY={-20}
                            offsetX={-100}
                        />
                        <Tooltip
                            showTitle={false}
                            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                        />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color='item'
                            tooltip={['item*percent*count',(item, percent,count) => {
                                percent =  Math.round(percent * 100) + '%';
                                return {
                                    name: item,
                                    value: count + "(" + percent + ")"
                                };
                            }]}
                            style={{lineWidth: 1,stroke: '#fff'}}
                        >
                            <Label content='percent' formatter={(val, item) => {
                                return item.point.item + ': ' + val;}} />
                        </Geom>
                    </Chart>
                </Card>
            )
        }
}

export default ThreeMealsAccounted