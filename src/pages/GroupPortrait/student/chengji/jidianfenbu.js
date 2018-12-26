import React from "react";
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';

const cols = {
    'sales': {tickInterval: 20},
};

class Jidianfenbu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                {
                    "xValue": "0~1.49",
                    "yValue": 36
                },
                {
                    "xValue": "1.5~2.49",
                    "yValue": 134
                },
                {
                    "xValue": "2.5~3.49",
                    "yValue": 208
                },
                {
                    "xValue": "3.5~4.49",
                    "yValue": 220
                },
                {
                    "xValue": "4.5~5.0",
                    "yValue": 1
                }
            ]
        };
    }

    render () {
        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title">平均绩点分布
                    <span>（单位： 人）</span>
                </h4>
                <Chart height={this.props.height - 60} data={this.state.data} scale={cols} padding='auto' forceFit>
                    <Axis name="xValue" />
                    <Axis name="yValue" />
                    <Tooltip
                        crosshairs={{type : "y"}}
                        showTitle={false}
                    />
                    <Geom
                        type="interval"
                        position="xValue*yValue"
                        tooltip={['xValue*yValue', (xValue, yValue) => {
                            return {
                                name: xValue,
                                value: yValue
                            };}]}
                    />
                </Chart>
            </Card>
        )
    }
}

export default Jidianfenbu

