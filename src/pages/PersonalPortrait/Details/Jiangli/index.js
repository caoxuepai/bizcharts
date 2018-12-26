import React, {Component, Fragment} from 'react';
import {Row, Col} from 'antd';
//引入组件
import SelectMoney from './SelectMoney';
import IndividualHelp from "./IndividualHelp";
import HelpDetails from "./HelpDetails";


class Jiangli extends Component{

    constructor(props){
        super(props);
        this.state = {
            curValue: "" //学期筛选条件
        };
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter (curValue) {
        this.setState({
            curValue: curValue // 子组件传递过来的筛选条件
        })
    }

    render () {
            return (
                <Fragment>
                    <Row>
                        <Col span={24} style={{background:'rgba(25,35,60,0.05)', padding:'11px 45px'}}>
                            <SelectMoney changeFilter = {this.changeFilter} />
                        </Col>
                        <Col span={24} style={{background:'#ffffff', boxShadow:'0 0 10px 0 rgba(0,0,0,0.05)', borderRadius:'4px', width: '98%', margin: '1%'}}>
                            <IndividualHelp height={400} curValue={this.state.curValue} />
                        </Col>
                        <Col span={24} style={{background:'#ffffff', boxShadow:'0 0 10px 0 rgba(0,0,0,0.05)', borderRadius:'4px', width: '98%', margin: '0 1%'}}>
                            <HelpDetails curValue={this.state.curValue} />
                        </Col>
                    </Row>
                </Fragment>
            )
        }
}

export default Jiangli