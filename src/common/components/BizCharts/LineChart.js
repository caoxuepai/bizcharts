import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';
import NoData from '../NoData/NoDataComponent';

class LineChart extends Component {
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
        const data = this.props.data;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        let fields=[], nameKey;
        if (data && data[0]) {
            nameKey = Object.keys(data[0])[0];
            Object.keys(data[0]).forEach((item,index)=>{
                if(index!==0){
                    fields.push(item);
                }
                
            })
        } else {
            return (<NoData height={height} data={'nodata'}/>);
        }
        dv.source(data).transform({
            type: 'fold',
            fields: fields.length>0?fields:['null'],
            key: 'key',
            value: 'value'
        });
        return (
            <Chart height={height} data={dv} padding={this.props.padding || [30, 20, 60, 50]} forceFit>
                {this.props.noLegend?null:<Legend marker={'circle'}/>}
                <Axis name='key' />
                <Axis name="value" />
                <Tooltip crosshairs={{type : "y"}}/>
                <Geom 
                    type="line" 
                    position={nameKey+"*value"} 
                    color={['key',this.props.colors]} />
                <Geom 
                    type={this.props.geomType||'point'} 
                    position={nameKey+"*value"} 
                    shape={'circle'} 
                    color={['key',this.props.colors]} />
            </Chart>
        )
    }
}

export default LineChart;