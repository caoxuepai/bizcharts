import React from 'react';
import {Row, Col} from 'antd';
//引入组件
import SelectCriteria from './SelectCriteria';
import LearnProcess from './LearnProcess';
import CourseDetails from './CourseDetails';
import CourseGrade from './CourseGrade';
//引入样式
import './academic.less';


class Xueye extends React.Component{
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
                <div>
                    <Row>
                        <Col span={24} className="select-year">
                            <SelectCriteria changeFilter = {this.changeFilter}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10} className="progress-left">
                            <LearnProcess height={400} curValue={this.state.curValue} />
                        </Col>
                        <Col span={14} className="table-right">
                            <CourseDetails height={400} curValue={this.state.curValue} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24} className="person-grade">
                            <CourseGrade height={400} curValue={this.state.curValue} />
                        </Col>
                    </Row>
                </div>
            )
        }
}

export default Xueye;