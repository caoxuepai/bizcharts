import React from 'react';
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import {DataSet} from '@antv/data-set';

class TeacherClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { year: '2013', "教授": 379, "副教授": 1207, "讲师": 433, "助教": 123, "其他":10 },
                { year: '2014', "教授": 234, "副教授": 1134, "讲师": 531, "助教": 214, "其他":28 },
                { year: '2015', "教授": 345, "副教授": 2314, "讲师": 341, "助教": 110, "其他":1 },
                { year: '2016', "教授": 231, "副教授": 1521, "讲师": 214, "助教": 310, "其他":12 },
                { year: '2017', "教授": 354, "副教授": 1257, "讲师": 321, "助教": 125, "其他":21 },
                { year: '2018', "教授": 378, "副教授": 1298, "讲师": 368, "助教": 189, "其他":15 }
            ],
            fieldData: [ '教授', '副教授', '讲师','助教', '其他']
        };
    }

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: this.state.fieldData, // 展开字段集
            key: 'teacher', // key字段
            value: 'classNum', // value字段
        });
        const cols = {
            year: {
                range: [ 0, 1 ]
            }
        }

        return (
            <Card>
                <h4 className="common-title">各职称老师开课数量趋势
                    <span> (单位：门)</span>
                </h4>
                <Chart height={500} data={dv} scale={cols} padding={[20, 20, 120, 80]} forceFit>
                    <Legend />
                    <Axis name="year" />
                    <Axis name="classNum"/>
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom type="line" position="year*classNum" size={2} color={'teacher'} />
                    <Geom type='point' position="year*classNum" size={4} shape={'circle'} color={'teacher'} style={{ stroke: '#fff', lineWidth: 1}} />
                </Chart>
            </Card>
        )
    }
}

export default TeacherClass