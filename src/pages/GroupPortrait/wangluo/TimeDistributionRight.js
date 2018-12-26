import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord, Legend, Label} from 'bizcharts';
import {DataSet} from '@antv/data-set';


class TimeDistributionRight extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { item: '00:00-06:00', count: 40 }
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
                       "surfYear": "2017",
                       "surfTimeInterval": "06:00-12:00",
                       "percent": "22.28%",
                       "surfTime": 85500
                   },
                   {
                       "surfYear": "2017",
                       "surfTimeInterval": "00:00-06:00",
                       "percent": "12.36%",
                       "surfTime": 47450
                   },
                   {
                       "surfYear": "2017",
                       "surfTimeInterval": "18:00-24:00",
                       "percent": "41.59%",
                       "surfTime": 159600
                   },
                   {
                       "surfYear": "2017",
                       "surfTimeInterval": "12:00-18:00",
                       "percent": "23.77%",
                       "surfTime": 91200
                   }
               ],
           }
                if (res.success) {
                    let newData = [];
                    res.obj.forEach((unit) => {
                        newData.push({
                            item: unit.surfTimeInterval,
                            count: unit.surfTime
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
                <Card style={{width: '100%', height: this.props.height}}>
                    <Chart
                        height={this.props.height - 10}
                        data={dv}
                        scale={cols}
                        padding={[10, 30, 30, 10]}
                        forceFit
                    >
                        <Coord type='theta' radius={0.75}/>
                        <Axis name="percent"/>
                        <Legend
                            position='right'
                            offsetY={-40}
                            offsetX={-90}
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

export default TimeDistributionRight