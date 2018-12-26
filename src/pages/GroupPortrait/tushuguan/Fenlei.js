import React from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend} from 'bizcharts';
import {DataSet} from '@antv/data-set';

const { DataView } = DataSet;

class Fenlei extends React.Component {

    constructor (props) {
        super (props);
        this.state = {
            data: [
                // { item: '事例一', count: 80 }
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
                    "year": "2017",
                    "totalBorrowTimes": 1,
                    "typeBorrowTimes": 1,
                    "percent": "100.00%",
                    "bookType": "其他"
                }
            ],
        }
            if (res.success) {
                let newData = [];
                res.obj.forEach((unit) => {
                    newData.push({
                        item: unit.bookType,
                        count: unit.typeBorrowTimes
                    })
                });
                this.setState({
                    data:newData
                })
            } else {
                this.setState({
                    data:[]
                })
            }
    }

    componentDidMount () {
        this.getData()
    }

    render () {
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
                <Card style={{height: this.props.height}}>
                    <h4 className="common-title">借阅图书分类
                        <span>(单位： 次)</span>
                    </h4>
                    <Chart height={this.props.height - 60} data={dv} scale={cols} padding={["20","30","60","30"]} forceFit>
                        <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
                        <Axis name="percent" />
                        <Legend position='right' offsetY={20} offsetX={-80} />
                        <Tooltip 
                            showTitle={false} 
                            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                            />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color='item'
                            tooltip={['item*percent*count',(item, percent, count) => {
                                percent = Math.round(percent * 100) + '%';
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

export default Fenlei