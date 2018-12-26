import React, {Component} from 'react';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import { Card } from 'antd';
import {DataSet} from '@antv/data-set';

class BoyGirl extends Component {
    constructor (props) {
        super(props);
        this.state = {
            data: [
                { name:'男生', '2012': 18, '2013': 28, '2014' :39, '2015': 81, '2016': 47, '2017': 20, '2018': 24},
                { name:'女生', '2012': 12, '2013': 23, '2014' :34, '2015': 99, '2016': 52, '2017': 35, '2018': 37}
            ]
        };
    }

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '2012','2013','2014','2015','2016','2017','2018'], // 展开字段集
            key: '年份', // key字段
            value: '人数', // value字段
        });

        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title">历年生源男女比例</h4>
                <Chart height={this.props.height - 60} data={dv} forceFit>
                    <Axis name="年份" />
                    <Axis name="人数" />
                    <Legend />
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom
                        type='interval'
                        position="年份*人数"
                        color={['name', ['#1890ff', '#f0785f']]}
                        adjust={[{type: 'dodge',marginRatio: 1/32}]}
                    />
                </Chart>
            </Card>
        )
    }
}

export default BoyGirl