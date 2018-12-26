import React from "react";
import {withRouter} from 'react-router-dom';
import { Row, Col } from 'antd';

import TotalClass from './TotalClass';
import Course from './Course';
import AllTypeWorks from './AllTypeWorks';
import TeacherClass from './TeacherClass';

class Jiaowu extends React.Component {
    render () {
        return (
            <Row>
                <Col span={24} style={{padding: 20}}>
                    <TotalClass year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={24} style={{padding: 20, paddingTop: 0}}>
                    <Course year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={24} style={{padding: 20, paddingTop: 0}}>
                    <AllTypeWorks year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={24} style={{padding: 20, marginBottom: 50}}>
                    <TeacherClass year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
            </Row>
        )
    }
}

export default withRouter(Jiaowu);

