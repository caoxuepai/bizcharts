import React, {Component} from 'react';
import { NavLink, withRouter } from "react-router-dom";
import {Row, Col} from 'antd';
import './home.less';
import BgImg from '../../assets/img/bg.jpg';
import ZhaoshengRenshu from '../GroupPortrait/student/zhaosheng/ZhaoshengRenshu';
import TimeDistributionLeft from "../GroupPortrait/wangluo/TimeDistributionLeft";
import Course from "../GroupPortrait/jiaowu/Course";

class Home extends Component{
    render () {
        return (
            <div className="main">
                <img src={BgImg} alt="" className="bg-img"/>
                <div className="content">
                    <Row className="top-bar">
                        <Col span={24}>
                            <h4 className="top-title">南京工程学院大数据应用平台</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={9} offset={3} className="bg-color" style={{marginRight:"0.5%"}}>
                            <NavLink to="/mainframe/GroupPortrait/wangluo">
                                <TimeDistributionLeft height={334}/>
                            </NavLink>
                        </Col>
                        <Col span={9} className="bg-color" style={{marginLeft:"0.5%"}}>
                            <NavLink to="/mainframe/GroupPortrait/student/zhaosheng">
                                <ZhaoshengRenshu height={334} />
                            </NavLink>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={18} offset={3} className="bg-color bg-margin">
                            <NavLink to="/mainframe/GroupPortrait/jiaowu">
                                <Course height={300} />
                            </NavLink>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}


export default withRouter(Home)