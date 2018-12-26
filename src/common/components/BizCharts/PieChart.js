import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';
import NoData from '../NoData/NoDataComponent';

class PieChart extends Component {
    onFirstLoad(ev){
        if(this.props.onFirstLoad){
            this.props.onFirstLoad(ev);
        }
    }
    onClickAction(ev){
        if(this.props.onClickAction){
            this.props.onClickAction(ev);
        }
    }
    render() {
        const height = this.props.height || 350;
        const { DataView } = DataSet;
        const data = this.props.data;
        const dv = new DataView();
        let field, dimension;
        if (data && data[0]) {
            dimension = Object.keys(data[0])[0];
            field = Object.keys(data[0])[1];
        } else {
            return (<NoData height={height} data={'nodata'}/>);
        }
        
        dv.source(data).transform({
            type: 'percent',
            field: field,
            dimension: dimension,
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
            <Chart height={height} data={dv} scale={cols} padding={this.props.padding} forceFit
                onGetG2Instance={(ev)=>this.onFirstLoad(ev)}
                onPlotClick={(ev)=>this.onClickAction(ev)}
                >
                <Coord type='theta' radius={this.props.radius || 0.75} innerRadius={this.props.innerRadius}/>
                <Axis name="percent" />
                <Legend 
                    marker={'circle'} 
                    position={this.props.position} 
                    offsetY={this.props.offsetY}
                    offsetX={this.props.offsetX}
                    g2-legend = {this.props.g2Legend || {}}
                    useHtml={true} />
                <Tooltip
                    showTitle={false}
                    itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                />
                <Geom
                    type="intervalStack"
                    position="percent"
                    color={[dimension,this.props.colors]}
                    tooltip={[dimension+'*percent*'+field, (item, percent,val) => {
                        percent = Math.round(percent * 100) + '%';
                        return {
                            name: item,
                            value: val + ' (' + percent +')'
                        };
                    }]}
                    style={{ lineWidth: 1, stroke: '#fff' }}
                >
                    <Label content='percent' formatter={(val, item) => {
                        return item.point[dimension] + ': ' + val;
                    }} />
                </Geom>
            </Chart>
        )
    }
}

export default PieChart;