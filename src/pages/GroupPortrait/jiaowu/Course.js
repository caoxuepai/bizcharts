import React from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip} from 'bizcharts';


class Course extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { courseName: '机械设计基础', classTimes: 964 },
                { courseName: '工程制图B', classTimes: 940 },
                { courseName: '工程制图C', classTimes: 916 },
                { courseName: '互换性与技术测量', classTimes: 672 },
                { courseName: '工程制图AⅠ', classTimes: 508 },
                { courseName: '工程制图AⅡ', classTimes: 508 },
                { courseName: '机械设计', classTimes: 452 },
                { courseName: '机械制造基础', classTimes: 338 },
                { courseName: '数控技术', classTimes: 328 },
                { courseName: '液压与气压传动', classTimes: 324 }
            ]
        };
    }

    render() {
        const cols = {
            'sales': {tickInterval: 20},
        };

        return (
            <Card style={{height: 360}}>
                <h4 className="common-title" style={{marginBottom: 20}}>课程工作量TOP10
                    <span>(单位：小时)</span>
                </h4>
                <Chart
                    height={360}
                    data={this.state.data}
                    scale={cols}
                    padding={[10, 80, 110, 80]}
                    forceFit
                >
                    <Axis name="courseName"/>
                    <Axis name="classTimes"/>
                    <Tooltip crosshairs={{type: "y"}}/>
                    <Geom
                        type="interval"
                        position="courseName*classTimes"
                        tooltip={['courseName*classTimes', (courseName, classTimes) => {
                            return {
                                name: '工作量',
                                value: classTimes
                            };
                        }]}
                    />
                </Chart>
            </Card>
        )
    }
}

export default Course