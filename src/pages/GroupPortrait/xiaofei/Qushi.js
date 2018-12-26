import React from 'react';
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import {DataSet} from '@antv/data-set';

class Qushi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { months: '1月', "总消费金额": 0, "平均消费金额": 0, "总充值金额": 0 },
                { months: '2月', "总消费金额": 0, "平均消费金额": 0, "总充值金额": 0 },
                { months: '3月', "总消费金额": 30097, "平均消费金额": 171, "总充值金额": 27990 },
                { months: '4月', "总消费金额": 101909, "平均消费金额": 572, "总充值金额": 101177 },
                { months: '5月', "总消费金额": 110483, "平均消费金额": 627, "总充值金额": 113007 },
                { months: '6月', "总消费金额": 104350, "平均消费金额": 586, "总充值金额": 95424 },
                { months: '7月', "总消费金额": 3468, "平均消费金额": 63, "总充值金额": 3224 },
                { months: '8月', "总消费金额": 29081, "平均消费金额": 169, "总充值金额": 39807 },
                { months: '9月', "总消费金额": 165652, "平均消费金额": 613, "总充值金额": 172155 },
                { months: '10月', "总消费金额": 143078, "平均消费金额": 535, "总充值金额": 147316 },
                { months: '11月', "总消费金额": 163840, "平均消费金额": 613, "总充值金额": 161892 },
                { months: '12月', "总消费金额": 108331, "平均消费金额": 405, "总充值金额": 108023 }
            ],
            fieldData: [ '总消费金额', '平均消费金额', '总充值金额'],
            totalCost: "960293"
        };
    }

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: this.state.fieldData, // 展开字段集
            key: 'costType', // key字段
            value: 'costNum', // value字段
        });
        const cols = {
            months: {
                range: [ 0, 1 ]
            }
        }

        return (
            <Card>
                <h4 className="common-title">
                    消费趋势
                    <span> (单位：元)</span>
                    <span style={{float: "right",fontSize:"14px"}}>全年消费总金额（元）：<span style={{color:'#1890ff',fontSize:"16px"}}>{this.state.totalCost}</span></span>
                </h4>
                <Chart height={400} data={dv} scale={cols} forceFit>
                    <Legend />
                    <Axis name="months" />
                    <Axis name="costNum"/>
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom type="line" position="months*costNum" size={2} color={'costType'} />
                    <Geom type='point' position="months*costNum" size={4} shape={'circle'} color={'costType'} style={{ stroke: '#fff', lineWidth: 1}} />
                </Chart>
            </Card>
        )
    }
}

export default Qushi