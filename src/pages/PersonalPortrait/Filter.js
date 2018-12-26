import React from 'react';
import { Select, Input, Button  } from 'antd';

const Option = Select.Option;

// 获取当前的年份， 以及年份列表
const getYear = new Date().getFullYear();
const yearList = [];
for(let i=0; i<6; i++){
    yearList.push(getYear - i);
}

// 定义筛选组建
class Filter extends React.Component{
    constructor (props) {
        super (props);
        this.state={
            year: getYear, // 当前选择的年份/默认年份
            yearList: yearList, // 年份列表
            college: "", // 当前选择的学院/默认为提示文字， 不选择
            collegeList: [// 学院列表
                {
                    collegeName: "请选择学院...",
                    collegeCode: ""
                }
            ],
            major: "", //当前选择专业/默认为提示文字，不选择
            majorList: [ // 专业列表
                {
                    majorName: "请选择专业...",
                    majorCode: ""
                }
            ],
            classes: "", // 当前选择班级/默认为提示文字，不选择
            classesList: [ // 班级列表
                {
                    className: "请选择班级...",
                    classCode: ""
                }
            ],
            nameOrCode: "请输入学生姓名或学号"//姓名或者学号输入框
        };
        this.yearChange = this.yearChange.bind(this);
        this.collegeChange = this.collegeChange.bind(this);
        this.majorChange = this.majorChange.bind(this);
        this.classesChange = this.classesChange.bind(this);
        this.nameOrCodeChange = this.nameOrCodeChange.bind(this);
        this.changeFilter = this.changeFilter.bind(this);
        this.getCollegeList = this.getCollegeList.bind(this);
        this.getMajorList = this.getMajorList.bind(this);
        this.getClassesList = this.getClassesList.bind(this);
        this.inputBlur = this.inputBlur.bind(this);
        this.inputFocus= this.inputFocus.bind(this);
    }

    // 改变年份
    yearChange(value){
        this.setState({
            year: value,
            college: "",
            major: "", // 重置专业
            majorList: [ // 重置专业列表
                {
                    majorName: "请选择专业...",
                    majorCode: ""
                }
            ],
            classes: "", // 重置班级
            classesList: [ // 重置班级列表
                {
                    className: "请选择班级...",
                    classCode: ""
                }
            ],
            nameOrCode: "请输入学生姓名或学号"//重置姓名或者学号输入框
        })
    }

    // 改变学院
    collegeChange(value){
        this.setState(
            () => {
                return {
                    college: value,
                    major: "", // 重置专业
                    majorList: [ // 重置专业列表
                        {
                            majorName: "请选择专业...",
                            majorCode: ""
                        }
                    ],
                    classes: "", // 重置班级
                    classesList: [ // 重置班级列表
                        {
                            className: "请选择班级...",
                            classCode: ""
                        }
                    ],
                    nameOrCode: "请输入学生姓名或学号"//重置姓名或者学号输入框
                }
            },
            () => {
                this.getMajorList();
            }
        )
    }

    // 改变专业
    majorChange(value){
        this.setState(
            () => {
                return{
                    major: value,
                    classes: "", // 重置班级
                    classesList: [ // 重置班级列表
                        {
                            className: "请选择班级...",
                            classCode: ""
                        }
                    ],
                    nameOrCode: "请输入学生姓名或学号"//重置姓名或者学号输入框
                }
            },
            () => {
                this.getClassesList()
            }
        )
    }

    // 改变班级
    classesChange(value){
        this.setState({
            classes: value,
            nameOrCode: "请输入学生姓名或学号"//重置姓名或者学号输入框
        })
    }

    // 改变姓名或者学号
    nameOrCodeChange(e){
        this.setState({
            nameOrCode: e.target.value
        });
    }
    
    inputBlur(e){
    	if (!e.target.value) {
    		this.setState({
	            nameOrCode: '请输入学生姓名或学号'
	        });
    	} else {
			this.setState({
	            nameOrCode: e.target.value
	        });
    	}
    }
    
    inputFocus(e){
    	let val = e.target.value;
    	if (val === '请输入学生姓名或学号') {
    		this.setState({
	            nameOrCode: ''
	        });
    	}
    }

    // 将筛选条件传递给父级组建
    changeFilter() {

        let nameCode;

        if (this.state.nameOrCode === "请输入学生姓名或学号") {
            nameCode = ""
        } else {
            nameCode = this.state.nameOrCode
        }

        const obj = {
            year: this.state.year, 
            college: this.state.college, 
            major: this.state.major, 
            classes:  this.state.classes, 
            nameOrCode: nameCode
        };
        this.props.filterObj(obj);
    }

    // 获取学院列表
    getCollegeList () {
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
                if (res.success && res.obj.length > 0){
                    let newCollegeList = [];
                    res.obj.forEach(
                        (item) => {
                            newCollegeList.push({
                                collegeName: item.collegeName,
                                collegeCode: item.collegeCode
                            })
                        }
                    )
                    newCollegeList.unshift({
                        collegeName: "请选择学院...",
                        collegeCode: ""
                    })
                    this.setState({
                        collegeList: newCollegeList
                    })
                }
            }

    // 获取专业列表
    getMajorList(){
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
                if (res.success && res.obj.length > 0){
                    let newMajorList = [];
                    res.obj.forEach(
                        (item) => {
                            newMajorList.push({
                                majorName: item.majorName,
                                majorCode: item.majorCode
                            })
                        }
                    )
                    newMajorList.unshift({
                        majorName: "请选择专业...",
                        majorCode: ""
                    })
                    this.setState({
                        majorList: newMajorList
                    })
                }
            }

    // 获取班级列表
    getClassesList () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": "2711605",
                    "className": "机自(数维)1614",
                    "classPriority": null
                },
                {
                    "id": null,
                    "collegeName": null,
                    "collegeCode": null,
                    "collegePriority": null,
                    "majorName": null,
                    "majorCode": null,
                    "majorPriority": null,
                    "grade": null,
                    "classCode": "2711606",
                    "className": "机自(数维)1624",
                    "classPriority": null
                }
            ],
        }
                if (res.success){
                    let newClassList = [];
                    res.obj.forEach(
                        (item) => {
                            newClassList.push({
                                className: item.className,
                                classCode: item.classCode
                            })
                        }
                    )
                    newClassList.unshift({
                        className: "请选择班级...",
                        classCode: ""
                    })
                    this.setState({
                        classesList: newClassList
                    })
                }
            }

    componentDidMount(){
        this.getCollegeList()
    }

    render () {
        return (
            <div style={{padding: "10px 20px", borderBottom: "1px solid #ccc"}}>
                <span>选择条件：</span>

                <Select value={this.state.year} style={{ width: 120, marginRight:8}} onChange={this.yearChange}>
                    {
                        this.state.yearList.map(
                            (item, index) => {
                                return (
                                    <Option key={index} value={item}>{item}</Option>
                                )
                            }
                        )
                    }
                </Select>

                <Select value={this.state.college} style={{ width: 150, marginRight:8 }} onChange={this.collegeChange}>
                    {
                        this.state.collegeList.map(
                            (item, index) => {
                                return (
                                    <Option key={index} title={item.collegeName} value={item.collegeCode}>{item.collegeName}</Option>
                                )
                            }
                        )
                    }
                </Select>

                <Select value={this.state.major} style={{ width: 150, marginRight:8 }} onChange={this.majorChange}>
                    {
                        this.state.majorList.map(
                            (item, index) => {
                                return (
                                    <Option key={index} title={item.majorName} value={item.majorCode}>{item.majorName}</Option>
                                )
                            }
                        )
                    }
                </Select>

                <Select value={this.state.classes} style={{ width: 150, marginRight:8 }} onChange={this.classesChange}>
                    {
                        this.state.classesList.map(
                            (item, index) => {
                                return (
                                    <Option key={index} title={item.className} value={item.classCode}>{item.className}</Option>
                                )
                            }
                        )
                    }
                </Select>

                <Input 
                	style={{ width: 180, marginRight:8 }} 
                	value={this.state.nameOrCode} 
                	onChange={this.nameOrCodeChange} 
                	onFocus={this.inputFocus}
                	onBlur={this.inputBlur}
                />
                
                <Button type="primary" icon="search" onClick={this.changeFilter}>搜索</Button>

            </div>
        )
    }
}

export default Filter;