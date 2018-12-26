import React from 'react';
import { Card } from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord} from 'bizcharts';
import { DataSet } from '@antv/data-set';

class Liushui extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                { storeName: '02010104', money: 22.07 },
                { storeName: '02010103', money: 15.1 },
                { storeName: '0403', money: 14.78 },
                { storeName: '030101', money: 13.43 },
                { storeName: '02010102', money: 11.33 }
            ]
        };
    }

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.source(this.state.data)
            .transform({
            type: 'sort',
            callback(a, b) { // 排序依据，和原生js的排序callback一致
                return a.money - b.money > 0;
            }
            });

        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title">商户流水排名TOP5
                    <span>（单位： 万元）</span>
                </h4>
                <Chart height={this.props.height - 60} data={dv} forceFit>
                    <Coord transpose />
                    <Axis name="storeName" label={{offset: 12}} />
                    <Axis name="money" />
                    <Tooltip />
                    <Geom
                        type="interval"
                        position="storeName*money"
                        tooltip={['storeName*money', (storeName, money)=>{
                            return {
                                title: "商铺：" + storeName,
                                name:'流水',
                                value:money
                            }
                        }]}
                    />
                </Chart>
            </Card>
        )
    }
}

export default Liushui