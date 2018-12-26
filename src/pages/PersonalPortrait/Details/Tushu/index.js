import React from 'react';
import {Row, Col} from 'antd';
//引入组件
import SelectLibrary from './SelectLibrary';
import BorrowSituation from './BorrowSituation';
import PopularBooks from "./PopularBooks";
import ReadOrder from "./ReadOrder";


const date = new Date();
const year = date.getFullYear()

class Tushu extends React.Component{
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
            <div>
                <Row>
                    <Col span={24} style={{background: "rgba(25,35,60,0.05)", padding: "11px 45px"}}>
                        <SelectLibrary changeFilter={this.changeFilter}/>
                    </Col>
                </Row>
                <Row>
                    <Col
                        span={24}
                        style={{
                            width: "98%",
                            margin: "1%",
                            background: "white",
                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.05)",
                            borderRadius: "4px"
                        }}
                    >
                        <BorrowSituation height={400} year={this.state.schoolYear} />
                    </Col>
                    <Col
                        span={24}
                        style={{
                            width: "98%",
                            margin: "1%",
                            background: "white",
                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.05)",
                            borderRadius: "4px"
                        }}
                    >
                        <PopularBooks year={this.state.schoolYear} />
                    </Col>
                    <Col
                        span={24}
                        style={{
                            width: "98%",
                            margin: "1%",
                            background: "white",
                            boxShadow: "0 0 10px 0 rgba(0,0,0,0.05)",
                            borderRadius: "4px"
                        }}
                    >
                        <ReadOrder year={this.state.schoolYear} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Tushu;