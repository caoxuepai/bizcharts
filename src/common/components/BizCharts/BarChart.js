import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Coord, Legend } from "bizcharts"
import { DataSet } from '@antv/data-set';
import NoData from '../NoData/NoDataComponent';

class BarChart extends Component {
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
        const data = this.props.data || [];
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
            <Chart height={height} data={dv} padding={this.props.padding} forceFit
                onGetG2Instance={(ev)=>this.onFirstLoad(ev)}
                onPlotClick={(ev)=>this.onClickAction(ev)}
                >
                {this.props.transpose?<Coord transpose />:null}
                <Axis name="key" />
                <Axis name="value" />
                {this.props.noLegend?null:<Legend marker={'circle'}/>}
                <Tooltip crosshairs={{type : "y"}}/>
                <Geom 
                    type={this.props.geomType || 'interval'} 
                    position="key*value" 
                    color={[nameKey,this.props.colors]} 
                    adjust={[{type: 'dodge',marginRatio: 1/32}]} />
            </Chart>
        )
    }
}

export default BarChart;