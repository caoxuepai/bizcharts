import React from "react";
import { Card } from 'antd';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts'
import { DataSet } from '@antv/data-set';

const { DataView } = DataSet;
const dv = new DataView();
const cols = {
    percent: {
        formatter: val => {
            val = Math.round(val * 100) + '%';
            return val;
        }
    }
}

class Place extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                { item: '原一公司北五餐厅', count: 27536 },
                { item: '原一公司北四餐厅', count: 27081 },
                { item: '北区教育超市自营', count: 19455 },
                { item: '自助多媒体多媒体其他', count: 17506 },
                { item: '原二公司萃园一餐厅', count: 14965 }
            ]
        };
    }

    render () {
        dv.source(this.state.data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });

        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title">消费地点分布TOP5
                    <span>（单位： 人次）</span>
                </h4>
                <Chart height={this.props.height - 60} data={dv} scale={cols} padding='auto' forceFit>
                    <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
                    <Axis name="percent" />
                    <Legend position='right' offsetY={-110} offsetX={-50} />
                    <Tooltip
                        showTitle={false}
                        itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                    />
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color='item'
                        tooltip={['item*count*percent',(item, count, percent) => {
                            percent = Math.round(percent * 100) + '%';
                            return {
                                name: item,
                                value:count + " (" + percent + ")"
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

export default Place

