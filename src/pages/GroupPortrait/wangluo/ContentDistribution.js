import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts';
import {DataSet} from '@antv/data-set';


class ContentDistribution extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // { item: '网络社区', count: 40 }
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
                       "percent": "21.26%",
                       "surfType": "网上购物",
                       "surfTime": 81600
                   },
                   {
                       "surfYear": "2017",
                       "percent": "21.16%",
                       "surfType": "在线直播",
                       "surfTime": 81199
                   },
                   {
                       "surfYear": "2017",
                       "percent": "21.14%",
                       "surfType": "社交网站",
                       "surfTime": 81133
                   },
                   {
                       "surfYear": "2017",
                       "percent": "20.88%",
                       "surfType": "综合门户",
                       "surfTime": 80112
                   },
                   {
                       "surfYear": "2017",
                       "percent": "15.56%",
                       "surfType": "网络社区",
                       "surfTime": 59706
                   }
               ],
           }
                if (res.success) {
                    let newData = [];
                    res.obj.forEach((unit) => {
                        newData.push({
                            item: unit.surfType,
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
                    <h4 className="common-title">上网内容分布</h4>
                    <Chart
                        height={this.props.height}
                        data={dv}
                        scale={cols}
                        padding={[0, 30, 80, 10]}
                        forceFit
                    >
                        <Coord type={'theta'} radius={0.75} innerRadius={0.6}/>
                        <Axis name="percent"/>
                        <Legend
                            position='right'
                            offsetY={-130}
                            offsetX={-80}
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

export default ContentDistribution