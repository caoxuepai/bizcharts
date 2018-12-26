import React from "react";
import {withRouter} from 'react-router-dom';
import Chengjifenbu from './chengjifenbu';
import Pingjunchengjiqushi from './pingjunchengjiqushi';
import Jidianfenbu from './jidianfenbu';
import { Row, Col } from 'antd';

class Chengji extends React.Component {
    render () {
        return (
            <Row>
                <Col span={12} style={{padding: 20}}>
                    <Chengjifenbu height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12} style={{padding: 20}}>
                    <Pingjunchengjiqushi height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={24} style={{padding: 20, paddingTop: 0}}>
                    <Jidianfenbu height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
            </Row>
        )
    }
}

export default withRouter(Chengji);

