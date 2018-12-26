import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip} from 'bizcharts';


class CollegeMoney extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                // {college: '计算机科学与技术', money: 38}
            ],
            titleName: "",
            type: "1"
        };
        this.getData = this.getData.bind(this);
        this.getItem = this.getItem.bind(this);
    }

    getData() {
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
                            money: unit.money
                        })
                    });
                    this.setState({
                        data: newData,
                    })
                } else {
                    this.setState({
                        data: []
                    })
                }
            }

    getItem() {
        const {currentItem} = this.props;
        if (currentItem === "item1") {
            this.setState({
                titleName: "各学院助学金金额TOP5",
                type: "1"
            });
            this.getData(this.state.type);
        }
    }

    componentDidMount() {
        this.getItem()
    }

    render() {
        const cols = {
            'sales': {tickInterval: 20},
        }

            return (
                <Card style={{width: '100%', height: this.props.height}}>
                    <h4 className="common-title">{this.state.titleName}
                        <span>（单位：万元）</span>
                    </h4>
                    <Chart
                        height={this.props.height - 60}
                        data={this.state.data}
                        scale={cols}
                        padding={[30, 50, 50, 50]}
                        forceFit
                    >
                        <Axis name="college"/>
                        <Axis name="money"/>
                        <Tooltip crosshairs={{type: "y"}}/>
                        <Geom
                            type="interval"
                            position="college*money"
                            tooltip={['college*money', (college, money) => {
                                return {
                                    name: college,
                                    value: money
                                }
                            }]}
                        />
                    </Chart>
                </Card>
            )
        }
}

export default CollegeMoney