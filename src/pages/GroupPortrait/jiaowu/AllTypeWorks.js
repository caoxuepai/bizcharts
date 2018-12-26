
import React from 'react';
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';

class AllTypeWorks extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            data: [
                { courseTypeName: '其他', classTimes: 5654 },
                { courseTypeName: '机械设计基础模块', classTimes: 3352 },
                { courseTypeName: '专业基础课', classTimes: 2760 },
                { courseTypeName: '军训模块', classTimes: 288 },
                { courseTypeName: '公共选修课', classTimes: 32 },
                { courseTypeName: '流体传动技术模块', classTimes: 24 },
                { courseTypeName: '专业拓展模块', classTimes: 24 },
                { courseTypeName: '课程设计模块', classTimes: 0 },
                { courseTypeName: '工程训练模块', classTimes: 0 },
                { courseTypeName: '模具工程基础模块', classTimes: 0 }
            ]
        };
    }

    render () {
        const cols = {
            'sales': {tickInterval: 20},
        };

        return (
            <Card style={{height:460}}>
                <h4 className="common-title" style={{marginBottom: 20}}>各类型工作量
                    <span>(单位：小时)</span>
                </h4>
                <Chart height={400} data={this.state.data} scale={cols} forceFit>
                    <Axis name="courseTypeName" />
                    <Axis name="classTimes" />
                    <Tooltip crosshairs={{type : "y"}} />
                    <Geom
                        type="interval"
                        position="courseTypeName*classTimes"
                        tooltip={['courseTypeName*classTimes', (courseTypeName, classTimes) => {
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

export default AllTypeWorks