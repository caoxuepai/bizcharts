import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend, Guide} from 'bizcharts';
import {DataSet} from '@antv/data-set';
import './JobAnalysis.less';

const {DataView} = DataSet;
const dv = new DataView();
const {Html} = Guide;
const cols = {
    percent: {
        formatter: val => {
            val = Math.round(val * 100) + '%';
            return val;
        }
    }
}

class GraduationGo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { item: '其他企业', count: 3526 },
                { item: '国有企业', count: 1307 },
                { item: '升学', count: 709 },
                { item: '三字企业', count: 385 },
                { item: '出国、处境', count: 110 },
            ],
            total: '6037'
        }
    }

    render() {
        dv.source(this.state.data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });

        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title">毕业去向TOP5
                    <span>（单位： 人）</span>
                </h4>
                <Chart
                    height={this.props.height - 61}
                    data={dv}
                    scale={cols}
                    padding={[10, 10, 10, 10]}
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
                    <Guide>
                        <Html
                            position={['50%', '50%']}
                            html={`<div style="color:#8c8c8c;font-size:12px;text-align: center;width: 10em;"><span style="color:#262626;font-size:20px">${this.state.total}</span><br/>人</div>`}
                            alignX='middle'
                            alignY='middle'
                        />
                    </Guide>
                    <Geom
                        type="intervalStack"
                        position="percent"
                        color='item'
                        tooltip={['item*count*percent', (item,count, percent) => {
                            percent = Math.round(percent * 100) + '%';
                            return {
                                name: item,
                                value: count + "(" + percent + ")"
                            };
                        }]}
                        style={{lineWidth: 1, stroke: '#fff'}}
                    >
                        <Label
                            content='percent'
                            formatter={(text, item) => {
                                var point = item.point;
                                var percent = point['percent'];
                                percent = Math.round(percent * 100) + '%';
                                return item.point.item + ' ' + percent;
                            }}
                        />
                    </Geom>
                </Chart>
            </Card>
        )
    }
}


export default GraduationGo