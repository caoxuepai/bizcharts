import React from "react";
import {withRouter} from 'react-router-dom'
import {Row, Col, Menu} from 'antd';
//引入组件
import RewardSituation from "./RewardSituation";
import CollegePeople from "./CollegePeople";
import CollegeMoney from "./CollegeMoney";
//引入样式
import './StudentWorker.less';


class Xuegong extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            current: 'item1',
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    render () {
        return (
            <div>
                <Row>
                    <Col span={24} className="first-row">
                        <RewardSituation height={400} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                    </Col>
                </Row>

                <div style={{overflow: "hidden",margin: "1%", background: "white"}}>

                    <Menu onClick={this.handleNavClick} selectedKeys={[this.state.current]} mode="horizontal" style={{paddingLeft: 20}}>

                        <Menu.Item key="item1" style={{paddingLeft:35, paddingRight:35}}>
                            助学金
                        </Menu.Item>

                        <Menu.Item key="item2" style={{paddingLeft:35, paddingRight:35}}>
                            奖学金
                        </Menu.Item>

                        <Menu.Item key="item3" style={{paddingLeft:35, paddingRight:35}}>
                            困难补助
                        </Menu.Item>

                    </Menu>

                    <Row className="second-row">
                        <Col span={12}>
                            <CollegePeople height={400} currentItem={this.state.current} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} handleNavClick={this.handleNavClick}/>
                        </Col>
                        <Col span={12}>
                            <CollegeMoney height={400} currentItem={this.state.current} year={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} handleNavClick={this.handleNavClick} />
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default withRouter(Xuegong);

