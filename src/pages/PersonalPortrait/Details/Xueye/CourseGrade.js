import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import {DataSet} from '@antv/data-set';


class CourseGrade extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [],
            fields : []
        }
        this.getData = this.getData.bind(this);
    }

    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "data": [
                    {
                        "化工原理课程设计": 84,
                        "电工电子技术基础": 68,
                        "概论Ⅱ": 54,
                        "GX ERP沙盘模拟实训": 85,
                        "工程学科英语": 72,
                        "name": "我的成绩",
                        "大学生创新创业教育": 87,
                        "高分子化学A": 66,
                        "电工电子技术基础实验": 84,
                        "材料加工技术基础": 70,
                        "化工原理": 68,
                        "工程材料": 83
                    },
                    {
                        "化工原理课程设计": 78.25,
                        "电工电子技术基础": 72.24,
                        "概论Ⅱ": 54,
                        "GX ERP沙盘模拟实训": 85,
                        "工程学科英语": 56.2,
                        "name": "平均成绩",
                        "大学生创新创业教育": 84.71,
                        "高分子化学A": 52.8,
                        "电工电子技术基础实验": 85.12,
                        "材料加工技术基础": 51.83,
                        "化工原理": 53.35,
                        "工程材料": 80.35
                    }
                ],
                "fields": [
                    "概论Ⅱ",
                    "概论Ⅱ",
                    "大学生创新创业教育",
                    "工程学科英语",
                    "工程学科英语",
                    "工程材料",
                    "材料加工技术基础",
                    "材料加工技术基础",
                    "化工原理",
                    "化工原理",
                    "化工原理课程设计",
                    "高分子化学A",
                    "高分子化学A",
                    "电工电子技术基础",
                    "电工电子技术基础",
                    "电工电子技术基础实验",
                    "GX ERP沙盘模拟实训"
                ]
            },
        }
            if (res.success) {
                let newfieldData = [];
                res.obj.fields.forEach(
                    (unit) => {
                    newfieldData.push(unit)
                });
                this.setState({
                    data: res.obj.data,
                    fields: newfieldData
                })
            } else {
                this.setState({
                    data: [],
                    fields:[]
                })
            }
    }

    componentDidMount () {
        this.getData()
    }

    render () {
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: this.state.fields.length > 0 ? this.state.fields : [''], // 展开字段集
            key: 'course', // key字段
            value: 'score', // value字段
        });
        const label = {
            offset: 10,
            textStyle: {
                textAlign: 'center', // 文本对齐方向，可取值为： start center end
                fill: '#404040', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'nomal', // 文本粗细
                rotate: 0,
                textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
            },
            autoRotate: false,
            formatter: (str) => {
                if (str.length > 7) {
                    str = str.substr(0, 7) + "...";
                }
                return str
            }
        };

            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">个人课程成绩
                        <span>（单位：分）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 35}
                        data={dv}
                        forceFit
                    >
                        <Axis name="course" label={label} />
                        <Axis name="score" />
                        <Legend />
                        <Tooltip crosshairs={{type : "y"}}/>
                        <Geom
                            type='interval'
                            position="course*score"
                            color={'name'}
                            adjust={[{type: 'dodge',marginRatio: 1/32}]}
                            tooltip={['name*score',(name, score) => {
                                return {
                                    name: name,
                                    value: score
                                };
                            }]}
                        />
                    </Chart>
                </Card>
            )
        }
}

export default CourseGrade