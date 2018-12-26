import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord, Legend, Label} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class WarningResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            data : [
                // { item: '已处理', count: 40 },
                // { item: '未处理', count: 21 }
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
                    "count": 14,
                    "status": "已处理"
                },
                {
                    "count": 1,
                    "status": "未处理"
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        item: unit.status,
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
                    <h4 className="common-title">预警处理结果
                        <span>（单位：条）</span>
                    </h4>
                    <Chart
                        height={this.props.height}
                        data={dv}
                        scale={cols}
                        padding={[0, 20, 80, 0]}
                        forceFit
                    >
                        <Coord type='theta' radius={0.75}/>
                        <Axis name="percent"/>
                        <Legend
                            position='right'
                            offsetY={-50}
                            offsetX={-120}
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

export default WarningResult