import React, {Component} from 'react';
import {Card, Tag, Row, Col} from 'antd';
import boyPng from '../../../../assets/img/boyPng.png';
import girlPng from '../../../../assets/img/girlPng.png';


class PeoplePortrait extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                "scoreInfo": {
                    "courseCount": 0,
                    "avgScore": 0,
                    "label": "",
                    "credit": 0
                },
                "personalInfo": {
                    "gender": "",
                    "native": "",
                    "grade": "",
                    "name": "",
                    "schoolLength": 0,
                    "age": 0
                },
                "readInfo": {
                    "level": "",
                    "count": 0
                },
                "cardInfo": {
                    "avgAmount": 0,
                    "place": ""
                },
                "rewardInfo": {
                    "totalAmount": 0
                },
                "surfInfo": {
                    "avgHours": 0,
                    "label": "",
                    "surfTime": ""
                }
            },
            tagColor: ['cyan', 'volcano', 'green']
        }
        this.getData = this.getData.bind(this);
    }

    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "scoreInfo": {
                    "courseCount": 64,
                    "avgScore": 73.25,
                    "label": "学良",
                    "credit": 129
                },
                "personalInfo": {
                    "role": "female",
                    "gender": "女",
                    "native": "",
                    "grade": "2015",
                    "name": "吴智蕾",
                    "schoolLength": 4,
                    "age": 21
                },
                "readInfo": {
                    "level": "读书习惯很差",
                    "count": 0
                },
                "cardInfo": {
                    "avgAmount": 433.6,
                    "place": "原一公司北四餐厅"
                },
                "rewardInfo": {
                    "totalAmount": 7000
                },
                "surfInfo": {
                    "avgHours": 179.33,
                    "label": "一般沉迷上网,亚健康状态",
                    "surfTime": "06:00-12:00"
                }
            },
        }
            if (res.success) {
                this.setState({
                    data: res.obj
                })
            } else {
                this.setState({
                    data: []
                })
            }
    }

    componentDidMount () {
        this.getData()
    }

    render() {
        const Genderpic = this.state.data.personalInfo.gender === '男'?boyPng:girlPng;
            return (
                <Card style={{width: '100%', height: this.props.height}}>
                    <h4 className="common-title">个人画像</h4>
                    <Row>
                        <Col span={9} className="portrait-img">
                            <img src={Genderpic} alt=""/>
                        </Col>
                        <Col span={15}>
                            {/*第一排*/}
                            <Row>
                                <Col span={12}>
                                    <Card className="first-card">
                                        <div className="card-left">
                                            <i className="iconfont icon-ziliaoguanli"></i>
                                            <p>基础信息</p>
                                        </div>
                                        <div className="card-right">
                                            <p>姓名：{(this.state.data.personalInfo && this.state.data.personalInfo.name) ? this.state.data.personalInfo.name : "暂无数据"}</p>
                                            <p>性别：{(this.state.data.personalInfo && this.state.data.personalInfo.gender) ? this.state.data.personalInfo.gender : "暂无数据"}</p>
                                            <p>年级：{(this.state.data.personalInfo && this.state.data.personalInfo.grade) ? this.state.data.personalInfo.grade : "暂无数据"}</p>
                                            <p>年龄：{(this.state.data.personalInfo && this.state.data.personalInfo.age) ? this.state.data.personalInfo.age : "暂无数据"}</p>
                                            <p>籍贯：{(this.state.data.personalInfo && this.state.data.personalInfo.native) ? this.state.data.personalInfo.native : "暂无数据"}</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card>
                                        <div className="card-left">
                                            <i className="iconfont icon-chengjizhongxin"></i>
                                            <p>学习成绩</p>
                                        </div>
                                        <div className="card-right" style={{paddingTop: '15px'}}>
                                            <p>累计完成课程：{(this.state.data.scoreInfo && this.state.data.scoreInfo.courseCount) ? this.state.data.scoreInfo.courseCount : "暂无数据"}</p>
                                            <p>累计学分：{(this.state.data.scoreInfo && this.state.data.scoreInfo.credit) ? this.state.data.scoreInfo.credit : "暂无数据"}</p>
                                            <p>平均成绩：{(this.state.data.scoreInfo && this.state.data.scoreInfo.avgScore) ? this.state.data.scoreInfo.avgScore : "暂无数据"}</p>
                                            <div className="text-tag">
                                                {(this.state.data.scoreInfo && this.state.data.scoreInfo.label) ? <Tag color={this.state.tagColor[0]}>{this.state.data.scoreInfo.label}</Tag> : null}
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            {/*第二排*/}
                            <Row>
                                <Col span={12}>
                                    <Card className="second-card">
                                        <div className="card-left">
                                            <i className="iconfont icon-jianglijilu"></i>
                                            <p>奖助信息</p>
                                        </div>
                                        <div className="card-right">
                                            <p style={{lineHeight: '20px'}}>累计奖助金额：{(this.state.data.rewardInfo && this.state.data.rewardInfo.totalAmount) ? this.state.data.rewardInfo.totalAmount : "暂无数据"}</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card className="second-card">
                                        <div className="card-left">
                                            <i className="iconfont icon-shu"></i>
                                            <p>阅读习惯</p>
                                        </div>
                                        <div className="card-right" style={{paddingTop: '25px'}}>
                                            <p>累计借阅图书：{(this.state.data.readInfo && this.state.data.readInfo.count) ? this.state.data.readInfo.count : "暂无数据"}</p>
                                            <div className="text-tag">
                                                {(this.state.data.readInfo && this.state.data.readInfo.level) ? <Tag color={this.state.tagColor[1]}>{this.state.data.readInfo.level}</Tag> : null}
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                            {/*第三排*/}
                            <Row>
                                <Col span={12}>
                                    <Card className="first-card">
                                        <div className="card-left">
                                            <i className="iconfont icon-qia"></i>
                                            <p>一卡通</p>
                                        </div>
                                        <div className="card-right">
                                            <p style={{lineHeight: '20px'}}>月均消费金额：{(this.state.data.cardInfo && this.state.data.cardInfo.avgAmount )? this.state.data.cardInfo.avgAmount:"暂无数据"}</p>
                                            <p>常去消费地点：{(this.state.data.cardInfo && this.state.data.cardInfo.place) ? this.state.data.cardInfo.place : "暂无数据"}</p>
                                        </div>
                                    </Card>
                                </Col>
                                <Col span={12}>
                                    <Card>
                                        <div className="card-left">
                                            <i className="iconfont icon-iconset0402"></i>
                                            <p>上网习惯</p>
                                        </div>
                                        <div className="card-right" style={{padding: '15px 10px'}}>
                                            <p>月均上网时长：{(this.state.data.surfInfo && this.state.data.surfInfo.avgHours) ? this.state.data.surfInfo.avgHours : "暂无数据"}</p>
                                            <p>上网偏好时段：{(this.state.data.surfInfo && this.state.data.surfInfo.surfTime) ? this.state.data.surfInfo.surfTime : "暂无数据"}</p>
                                            <div className="text-tag">
                                                {(this.state.data.surfInfo && this.state.data.surfInfo.label) ? <Tag color={this.state.tagColor[2]}>{this.state.data.surfInfo.label}</Tag> : null}
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Card>
            )
        }
}

export default PeoplePortrait