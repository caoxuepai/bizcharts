import React from "react";
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';

const cols = {
    'value': { min: 0 },
    'year': {range: [ 0 , 1] }
};

class Pingjunchengjiqushi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [
                { year: "2013", value: 76.27 },
                { year: "2014", value: 79.47 },
                { year: "2015", value: 80 },
                { year: "2016", value: 78.65 },
                { year: "2017", value: 78.14 },
                { year: "2018", value: 0 }
            ]
        };
    }

    render () {
        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title">平均成绩趋势
                    <span>（单位： 人）</span>
                </h4>
                <Chart height={this.props.height - 60} data={this.state.data} scale={cols} padding={'auto'} forceFit>
                    <Axis name="year" />
                    <Axis name="value" />
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom
                        type="line"
                        position="year*value"
                        size={2}
                        tooltip={['year*value', (year, value) => {
                            return {
                                name: '平均成绩',
                                value
                            };}]}
                    />
                    <Geom type='point'
                          position="year*value"
                          size={4}
                          shape={'circle'}
                          style={{ stroke: '#fff', lineWidth: 1}}
                    />
                </Chart>
            </Card>
        )
    }
}

export default Pingjunchengjiqushi

