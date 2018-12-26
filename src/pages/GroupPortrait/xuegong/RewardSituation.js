import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord, Legend} from 'bizcharts'
import {DataSet} from '@antv/data-set';


class RewardSituation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {types: '贷款', "奖助人数": 2, "总人数": 2},
                {types: '勤工俭学', "奖助人数": 2, "总人数": 4},
                {types: '助学金', "奖助人数": 2, "总人数": 2},
                {types: '奖学金', "奖助人数": 2, "总人数": 4},
                {types: '困难补助', "奖助人数": 1, "总人数": 1},
                {types: '竞赛奖金', "奖助人数": 1, "总人数": 2},
                {types: '劳务费', "奖助人数": 1, "总人数": 2}
            ],
        };
    }

    render() {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '总人数', '奖助人数' ], // 展开字段集
            key: 'number', // key字段
            value: 'value', // value字段
            retains: [ 'types', '奖助人数', '总人数' ]
        });

        return (
            <Card style={{width: '100%', height: this.props.height}}>
                <h4 className="common-title">奖助情况（人数）</h4>
                <Chart
                    height={this.props.height - 40}
                    data={dv}
                    forceFit
                >
                    <Legend />
                    <Coord transpose scale={[1,-1]}/>
                    <Axis name="types" label={{offset: 12}} />
                    <Axis name="value" position={'right'} />
                    <Tooltip />
                    <Geom
                        type="interval"
                        position="types*value"
                        color={'number'}
                        adjust={[{
                            type: 'dodge',
                            marginRatio: 1 / 32
                        }]}
                        tooltip={['value*number*总人数*奖助人数', (value, number, 总人数, 奖助人数)=>{
                            return {
                                name: number,
                                value: value + "(" + Math.round((奖助人数/总人数)*100) + "%)"
                            }
                        }]}
                    />
                </Chart>
            </Card>
        )
    }
}


export default RewardSituation