import React from "react";
import {withRouter} from 'react-router-dom';
import { Row, Col } from 'antd';

// 页面组建
import DegreeDistribution from './DegreeDistribution';
import BoyGirlProportion from './BoyGirlProportion';
import NumberDistribution from './NumberDistribution';
import NumberProfessional from './NumberProfessional';

class Zonghe extends React.Component {
   
    render () {
        return (
            <Row>
                <Col span={12}>
                    <BoyGirlProportion height={360} schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={12}>
                    <DegreeDistribution height={360} schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
                <Col span={24}>
                    <NumberDistribution height={600} schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode}  />
                </Col>
                <Col span={24}>
                    <NumberProfessional height={400} schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                </Col>
            </Row>
        )
    }
}

export default withRouter(Zonghe);

