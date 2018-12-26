import React from "react";
import {withRouter} from 'react-router-dom';
import { Row, Col } from 'antd';

import Hot from './Hot';
import ReadingTimes from './ReadingTimes';
import Fenlei from './Fenlei';
import Qushi from './Qushi';

class Tushuguan extends React.Component {
    render () {
        return (
            <Row>
                <Col span={24} style={{padding: 20}}>
                    <Hot year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={24} style={{padding: 20, paddingTop: 0}}>
                    <ReadingTimes year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20, paddingTop: 0}}>
                    <Fenlei height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20, paddingTop: 0}}>
                    <Qushi height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
            </Row>
        )
    }
}

export default withRouter(Tushuguan);

