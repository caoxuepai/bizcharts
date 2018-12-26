import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend} from 'bizcharts';
import {DataSet} from  '@antv/data-set';


class WarningCategory extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                // { item: '失联', count: 40 }
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
                    "alarmType": "失联",
                    "count": 5
                },
                {
                    "alarmType": "网络",
                    "count": 4
                },
                {
                    "alarmType": "消费",
                    "count": 6
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        item: unit.alarmType,
                        count: unit.count
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
                <Card style={{width:"100%", height:this.props.height}}>
                    <h4 className="common-title">预警类别分布
                        <span>（单位：次）</span>
                    </h4>
                    <Chart
                        height={this.props.height}
                        data={dv}
                        scale={cols}
                        padding={[0, 20, 80, 0]}
                        forceFit
                    >
                        <Coord type={'theta'} radius={0.75} innerRadius={0.6}/>
                        <Axis name="percent"/>
                        <Legend
                            position='right'
                            offsetY={-50}
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
                            tooltip={['item*percent*count', (item, percent, count) => {
                                percent = Math.round(percent * 100) + '%';
                                return {
                                    name: item,
                                    value: count + "(" + percent + ")"
                                };
                            }]}
                            style={{lineWidth: 1, stroke: '#fff'}}
                        >
                            <Label content='percent' formatter={(val, item) => {
                                return item.point.item + ': ' + val;
                            }}/>
                        </Geom>
                    </Chart>
                </Card>
            )
        }
}

export default WarningCategory