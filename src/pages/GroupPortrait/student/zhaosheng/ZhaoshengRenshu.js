
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

class ZhaoshengRenshu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                { item: '汉族', count: 88 },
                { item: '回族', count: 36 },
                { item: '土家族', count: 23 },
                { item: '布依族', count: 19 },
                { item: '苗族', count: 19 },
                { item: '彝族', count: 12 },
                { item: '蒙古族', count: 12 },
                { item: '侗族', count: 11 },
                { item: '满族', count: 9 },
                { item: '仡佬族', count: 6 }
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
                <h4 className="common-title">各民族招生人数TOP10
                    <span>（单位：人）</span>
                </h4>
                <Chart height={this.props.height - 60} data={dv} scale={cols} padding='auto' forceFit>
                    <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
                    <Axis name="percent" />
                    <Legend position='right' offsetY={-50} offsetX={-50} />
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
                                value: count + " (" + percent + ")"
                            };}]}
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

export default ZhaoshengRenshu

