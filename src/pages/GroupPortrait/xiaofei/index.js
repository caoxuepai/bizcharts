import React from "react";
import {withRouter} from 'react-router-dom';
import { Row, Col } from 'antd';

import Qushi from './Qushi';
import Place from './Place';
import Liushui from './Liushui';

class Xiaofei extends React.Component {
    render () {
        return (
            <Row>
                <Col span={24} style={{padding: 20}}>
                    <Qushi year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20, paddingTop: 0}}>
                    <Place height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20, paddingTop: 0}}>
                    <Liushui height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
            </Row>
        )
    }
}

export default withRouter(Xiaofei);

