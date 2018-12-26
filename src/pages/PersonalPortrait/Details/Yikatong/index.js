import React, {Component, Fragment} from 'react';
import {Row, Col} from 'antd';
//引入组件
import SelectCard from './SelectCard';
import ConsumerTrends from "./ConsumerTrends";
import CardLocationDistribution from "./CardLocationDistribution";
import ThreeMealsAccounted from "./ThreeMealsAccounted";


const date = new Date();
const year = date.getFullYear()

class Yikatong extends Component{
    constructor(props){
        super(props);
        this.state = {
            schoolYear: year   //学期筛选条件
        };
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter (curyear) {
        this.setState({
            schoolYear: curyear // 子组件传递过来的筛选条件
        })
    }

    render () {
        return (
            <Fragment>
                <Row>
                    <Col span={24} style={{background:"rgba(25,35,60,0.05)",padding:"11px 45px"}}>
                        <SelectCard changeFilter={this.changeFilter} />
                    </Col>
                    <Col span={24} style={{background:"#fff",boxShadow:"0 0 10px 0 rgba(0,0,0,0.05)",borderRadius:"4px",width:"98%",margin:"1%"}}>
                        <ConsumerTrends height={400} year={this.state.schoolYear}/>
                    </Col>
                    <Col span={12} style={{background:"#fff",boxShadow:"0 0 10px 0 rgba(0,0,0,0.05)",borderRadius:"4px",width:"48.5%",margin:"0 0.5% 1% 1%"}}>
                        <CardLocationDistribution height={400} year={this.state.schoolYear} />
                    </Col>
                    <Col span={12} style={{background:"#fff",boxShadow:"0 0 10px 0 rgba(0,0,0,0.05)",borderRadius:"4px",width:"48.5%",margin:"0 1% 1% 0.5%"}}>
                        <ThreeMealsAccounted height={400} year={this.state.schoolYear}/>
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Yikatong;