import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Geom, Axis, Tooltip, Legend, View} from 'bizcharts';


class TimeDistributionLeft extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // {"surfMonth": '1月', "surfDuration": 17, "surfFlow": 200 }
            ]
        }
        this.getData = this.getData.bind(this);
    }

    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "1月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "2月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "3月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "4月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "5月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "6月"
                },
                {
                    "surfDuration": 421,
                    "surfFlow": 2129920,
                    "surfMonth": "7月"
                },
                {
                    "surfDuration": 114,
                    "surfFlow": 10117120,
                    "surfMonth": "8月"
                },
                {
                    "surfDuration": 144,
                    "surfFlow": 12779520,
                    "surfMonth": "9月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "10月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "11月"
                },
                {
                    "surfDuration": 0,
                    "surfFlow": 0,
                    "surfMonth": "12月"
                }
            ],
        }

            if (res.success) {
                let newData = [];
                res.obj.forEach(
                    (unit) => {
                        newData.push(unit)
                    }
                )
                this.setState({
                    data: newData
                })
            } else {
                this.setState({
                    data: []
                })
            }
    }

    componentDidMount () {
        this.getData();
    }

    render () {
        function pick(data, field) {
            return data.map(function(item) {
                var result = {};
                for (var key in item) {
                    if (item.hasOwnProperty(key) && field.indexOf(key) !== -1) {
                        result[key] = item[key];
                    }
                }
                return result;
            });
        }
        const cols = {
            'sales': {
                type: 'linear'
            },
            surfDuration: {
                alias: '总时长',
            },
            surfFlow: {
                alias: '总流量',
            }
        };

            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">上网时长分布
                        <span style={{transform:"rotate(90deg)",position:"absolute",top:"40%",left:"0"}}>（单位：小时）</span>
                        <span style={{transform:"rotate(90deg)",position:"absolute",top:"40%",right:"0"}}>（单位：M）</span>
                    </h4>
                    <Chart
                        height={this.props.height || 334}
                        padding={[20, 100, 140, 80]}
                        forceFit
                        scale={cols}
                    >
                        <Tooltip />
                        <Legend
                            custom={true}
                            items={[
                                { value: '总时长', fill: '#f5a623', marker: 'circle' },
                                { value: '总流量', fill: '#65a1e7', marker: 'circle' }
                            ]}
                        />
                        <View data={pick(this.state.data, ['surfDuration', 'surfFlow', 'surfMonth'])} scale={cols} >
                            <Axis name="surfFlow" grid={null} />
                            <Geom type="line" position="surfMonth*surfDuration" color="#f5a623" size={2} />
                            <Geom type="line" position="surfMonth*surfFlow" color="#65a1e7" size={2} />
                        </View>
                    </Chart>
                </Card>
            )
        }
}

export default TimeDistributionLeft