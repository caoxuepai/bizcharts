import React from "react";
import {withRouter} from 'react-router-dom';
import {Row, Col} from 'antd'
//引入页面组件
import GraduationGo from "./GraduationGo";
import TopTenCity from './TopTenCity';
import EmploymentAnalysis from "./EmploymentAnalysis";
import GraduatedTrend from "./GraduatedTrend";
//引入组件样式
import './JobAnalysis.less';



class Jiuye extends React.Component {
    render () {
        return (
            <div>
                <Row>
                    <Col span={24} className="first-row">
                        <Col span={16} className="row-border">
                            <GraduationGo height={450} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        </Col>
                        <Col span={8}  className="row-border">
                            <TopTenCity height={450} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        </Col>
                    </Col>
                    <Col span={24} className="second-row">
                        <EmploymentAnalysis height={600} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} />
                    </Col>
                    <Col span={24} className="second-row">
                        <GraduatedTrend height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                    </Col>
                </Row>

            </div>
        )
    }
}

export default withRouter(Jiuye);

