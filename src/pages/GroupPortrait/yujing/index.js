import React from "react";
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'antd';
//引进组件
import WarningResult from "./WarningResult";
import WarningCategory from './WarningCategory';
import CategoryHalfYear from "./CategoryHalfYear";
import DistributionHalfYear from "./DistributionHalfYear";
//引进样式
import './warning.less';



class Yujing extends React.Component {
    render () {
        return (
            <div>
                <Row>
                    <Col span={12} className="warning-bg">
                        <WarningResult height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode}/>
                    </Col>
                    <Col span={12} className="warning-bg">
                        <WarningCategory height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} className="half-bg">
                        <CategoryHalfYear height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode}/>
                    </Col>
                    <Col span={24} className="half-bg">
                        <DistributionHalfYear height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default withRouter(Yujing);

