import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Coord, Label, Legend } from 'bizcharts';
import {DataSet} from '@antv/data-set';

class CollegePeople extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [
                // { college: '计算机科学与技术', people: 80 }
            ],
            titleName: "",
            type:"1"
        }
        this.getData = this.getData.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "collegeName": "机械工程学院(联合培养)",
                    "money": 300,
                    "count": 1
                },
                {
                    "collegeName": "机械工程学院",
                    "money": 300,
                    "count": 1
                }
            ],
        }
                if (res.success) {
                    let newData = [];
                    res.obj.forEach((unit) => {
                        newData.push({
                            college: unit.collegeName,
                            people: unit.count
                        })
                    })
                    this.setState({
                        data: newData
                    })
                } else {
                    this.setState({
                        data:[]
                    })
                }
    }

    getItem () {
        const {currentItem} = this.props;
        if (currentItem === "item1") {
            this.setState({
                titleName: "各学院助学金人数TOP5",
                type: "1"
            });
            this.getData(this.state.type);
        }
    }

    componentDidMount () {
        this.getItem()
    }

    render() {
        const { DataView } = DataSet;
        const dv = new DataView();
        dv.source(this.state.data).transform({
            type: 'percent',
            field: 'people',
            dimension: 'college',
            as: 'percent'
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = Math.round(val * 100) + '%';
                    return val;
                }
            }
        }

            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">{this.state.titleName}
                        <span>（单位：人）</span>
                    </h4>
                    <Chart
                        style={{marginLeft:'-20%'}}
                        height={this.props.height}
                        data={dv}
                        scale={cols}
                        padding={[ 0, 50, 60, 50]}
                        forceFit
                    >
                        <Coord type={'theta'} radius={0.75} innerRadius={0.6} />
                        <Axis name="percent" />
                        <Legend position='right' offsetY={-100} offsetX={-140} />
                        <Tooltip
                            showTitle={false}
                            itemTpl='<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
                        />
                        <Geom
                            type="intervalStack"
                            position="percent"
                            color='college'
                            tooltip={['college*percent*people',(college, percent,people) => {
                                percent = Math.round(percent * 100) + '%';
                                return {
                                    name: college,
                                    value: people + " (" + percent + ")"
                                };
                            }]}
                            style={{lineWidth: 1,stroke: '#fff'}}
                        >
                            <Label content='percent'
                                   formatter={(val, college) => {
                                       let str = college.point.college;
                                       if (str.length > 7) {
                                           str = str.substr(0, 7) + "...";
                                       }
                                return str + ': ' + val;}
                                   }
                            />
                        </Geom>
                    </Chart>
                </Card>
            )
        }
}

export default CollegePeople