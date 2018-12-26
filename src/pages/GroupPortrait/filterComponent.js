import React from "react";
import {withRouter} from 'react-router-dom';
import { Select, Button } from 'antd';


// 选择条件
const Option = Select.Option;

class FilterComponent extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            yearlist: [],
            curyear: "",
            collegeList: [],
            curCollege: '',
            majorList: [{
                "majorName": "全部",
                "majorCode": ""
            }],
            curMajor: ""
        };
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleCollegeChange = this.handleCollegeChange.bind(this);
        this.handleMajorChange = this.handleMajorChange.bind(this);
        this.handleObjToDispatch = this.handleObjToDispatch.bind(this);
        this.getMajor = this.getMajor.bind(this);
    }

    componentDidMount() {
        // 年份
        let date=new Date();
        let year=date.getFullYear() + ""; 
        let list = [year];
        for(let i=0; i<5; i++){
            list.push(year - (i+1) + "");
        };
        this.setState(() => {
            return {
                yearlist: list,
                curyear: year
            }
        })
        // 院校
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "id": null,
                    "collegeName": "机械工程学院",
                    "collegeCode": "40010",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "计算机工程学院",
                    "collegeCode": "40070",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "通信工程学院",
                    "collegeCode": "40060",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "自动化学院",
                    "collegeCode": "40050",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "外国语学院",
                    "collegeCode": "40141",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "材料工程学院",
                    "collegeCode": "40020",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "电力工程学院",
                    "collegeCode": "40040",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "能源与动力工程学院",
                    "collegeCode": "40030",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "经济与管理学院",
                    "collegeCode": "40081",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "人文与社会科学学院",
                    "collegeCode": "40131",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "艺术与设计学院",
                    "collegeCode": "40100",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "建筑工程学院",
                    "collegeCode": "40090",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "汽车与轨道交通学院",
                    "collegeCode": "40111",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "环境工程学院",
                    "collegeCode": "40121",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "工业中心",
                    "collegeCode": "40171",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "康尼学院",
                    "collegeCode": "40210",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "国际合作与交流处",
                    "collegeCode": "10110",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "机械工程学院(联合培养)",
                    "collegeCode": "L40010",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "建筑工程学院(路桥与港航工程学联合培养)",
                    "collegeCode": "L40090",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": "自动化学院(电气工程学院)",
                    "collegeCode": "L40050",
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                }
            ],
        }
                if (res.success) {
                    res.obj.unshift({
                        "collegeName": "全部",
                        "collegeCode": "",
                    });
                    this.setState( () => {
                        return {
                            collegeList: res.obj,
                            curCollege: res.obj[0].collegeCode
                        }
                    })
                }
            }

    

    render () {
        return (
                <div style={{width: "100%", height: 54, padding: "10px 20px"}}>

                    <span>选择条件：</span>

                    <Select value={this.state.curyear} style={{ width: 124, marginRight: 10 }} onChange={this.handleYearChange}>
                        {this.state.yearlist.map(item => <Option key={item} value={item}>{item + "年"}</Option>)}
                    </Select>

                    <Select value={this.state.curCollege} style={{ width: 178, marginRight: 10 }} onChange={this.handleCollegeChange}>
                        {this.state.collegeList.map(item => <Option title={item.collegeName} key={item.collegeCode} value={item.collegeCode}>{item.collegeName}</Option>)}
                    </Select>

                    <Select value={this.state.curMajor} style={{ width: 240, marginRight: 10 }} onChange={this.handleMajorChange}>
                         {this.state.majorList.map(item => <Option title={item.majorName} key={item.majorCode} value={item.majorCode}>{item.majorName}</Option>)}
                    </Select>

                    <Button type="primary" icon="search" onClick={this.handleObjToDispatch}>搜  索 </Button>
                </div>
        )
    }

    handleYearChange (value) {
        this.setState({
            curyear: value
        })
    }

    handleCollegeChange (value) {
        if (!value) {
            this.setState( () => {
                return {
                    curCollege: ''
                }
            }, () => {
                this.setState({
                    majorList: [{
                        "majorName": "全部",
                        "majorCode": ""
                    }],
                    curMajor: ""
                })
            })
        } else {
            this.setState( () => {
                return {
                    curCollege: value
                }
            }, () => {
                this.getMajor()
            })
        }
    }

    handleMajorChange (value) {
        this.setState({
            curMajor: value
        })
    }

    getMajor () {
        // postAction("/bigdata/school/listMajorByCollege",{
        //     collegeCode: this.state.curCollege
        // }).then((res) => {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电力工程(中外合作办学)",
                    "majorCode": "0610",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(供用电技术)",
                    "majorCode": "0609",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(电网监控)",
                    "majorCode": "0607",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程与智能控制",
                    "majorCode": "0606",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(输配电工程)",
                    "majorCode": "0605",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(电力系统及其自动化)",
                    "majorCode": "0604",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(电力系统继电保护)",
                    "majorCode": "0603",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(电力系统及其自动化)(卓越工程师计划)",
                    "majorCode": "0683",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "智能电网信息工程",
                    "majorCode": "0602",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(专转本)",
                    "majorCode": "0613",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化",
                    "majorCode": "0601",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "电气工程及其自动化(中外合作办学)",
                    "majorCode": "0612",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": "建筑电气与智能化",
                    "majorCode": "0611",
                    "majorPriority": null,
                    "grade": null,
                    "classCode": null,
                    "className": null,
                    "classPriority": null
                }
            ],
        }
            if (res.success && res.obj.length > 0) {
                res.obj.unshift({
                    "majorName": "全部",
                    "majorCode": ""
                });
                this.setState( 
                    () => {
                        return {
                            majorList: res.obj,
                            curMajor: res.obj[0].majorCode
                        }
                    }
                )
            }
    }

    // 调取dispath方法的中间方法
    handleObjToDispatch () {
        const obj = {
            schoolYear: this.state.curyear, 
            collegeCode: this.state.curCollege, 
            majorCode: this.state.curMajor
        }
        this.props.changeFilter(obj)
    }
}

export default withRouter(FilterComponent);
