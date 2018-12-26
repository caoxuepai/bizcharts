import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip, Coord, Legend, Label } from 'bizcharts';
import { DataSet } from '@antv/data-set';
import './DegreeDistribution.less'

const { DataView } = DataSet;
const dv = new DataView();
const cols = {
    percent: {
        formatter: val => {
            val = Math.round(val * 100) + '%';
            return val;
        }
    }
};

class DegreeDistribution extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            data: [
                { item: '本科', count: 40 },
                { item: '研究生', count: 60 }
            ]
        };
    }


    render(){
       
        const data = this.state.data;
        
        dv.source(data).transform({
            type: 'percent',
            field: 'count',
            dimension: 'item',
            as: 'percent'
        });

        return(
            <Card className="degree-distribution" style={{height:this.props.height}}>
                <h4 className="common-title">学位分布
                    <span>(单位：人)</span>
                </h4>
                <Chart
                    style={{marginTop: 50}}
                    height={this.props.height || 334}
                    data={dv}
                    scale={cols}
                    padding={[0, 50, 100, 50]}
                    forceFit
                >
                    <Coord type='theta' radius={0.75} />
                    <Axis name="percent" />
                    <Legend
                        position='right'
                        offsetY={-100}
                        offsetX={-100} />
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
                                value: count + " (" + percent + ")"
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

export default withRouter(DegreeDistribution)