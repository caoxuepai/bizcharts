
import React from "react";
import {withRouter} from 'react-router-dom';
import { Row, Col } from 'antd';
import Shengyuanfenbu from './Shengyuanfenbu';
import ZhaoshengRenshu from './ZhaoshengRenshu';
import BoyGirl from './BoyGirl';

class Zhaosheng extends React.Component {
    render () {
        return (
            <Row>
                <Col span={24} style={{padding: 20}}>
                    <Shengyuanfenbu height={700} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20, paddingTop: 0}}>
                    <ZhaoshengRenshu height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20, paddingTop: 0}}>
                    <BoyGirl height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
            </Row>
        )
    }
}

export default withRouter(Zhaosheng);



