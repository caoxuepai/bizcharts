import React from "react";
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'antd';
//引入组件
import TimeDistributionLeft from './TimeDistributionLeft';
import TimeDistributionRight from "./TimeDistributionRight";
import ContentDistribution from './ContentDistribution';
import TopWebsites from './TopWebsites';
//引入样式
import './network.less';

class Wangluo extends React.Component {
    render () {
        return (
            <div>
                <Row>
                    <Col span={24} className="network-bg">
                        <Col span={12}>
                            <TimeDistributionLeft height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        </Col>
                        <Col span={12}>
                            <TimeDistributionRight height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        </Col>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} className="distrbution-bg">
                        <ContentDistribution height={450} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                    </Col>
                    <Col span={12} className="distrbution-bg">
                        <TopWebsites height={450} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Wangluo);

