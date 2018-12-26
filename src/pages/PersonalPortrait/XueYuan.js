import React from 'react';
import { Card, Table } from 'antd';
import { withRouter } from 'react-router-dom';
import { setLocal } from './../../utils';

class XueYuan extends React.Component{
    constructor(props){
        super(props);
        this.state={
            columns: [
                {
                    title: '序号',
                    dataIndex: 'sortIndex',
                    width: '6%'
                }, {
                    title: '学号',
                    dataIndex: 'studentNo',
                    width: '15%'
                }, {
                    title: '姓名',
                    dataIndex: 'studentName',
                    width: '15%'
                }, {
                    title: '学院',
                    dataIndex: 'collegeName',
                    render: (text) => {
                    	return (
                    		<span title={text}>{text}</span>
                    	)
                    }
                }, {
                    title: '专业',
                    dataIndex: 'majorName',
                    render: (text) => {
                    	return (
                    		<span title={text}>{text}</span>
                    	)
                    }
                }, {
                    title: '班级',
                    dataIndex: 'className',
                    width: '18%'
                }, {
                    title: '操作',
                    dataIndex: 'handle',
                    width: '10%',
                    render: (text, record) => {
                        return (
                            <span style={{cursor: "pointer", color: "#1890ff"}} onClick={this.toDetails.bind(this, record)}>{text}</span>
                        )
                    }
                }
            ],
            data: [ // table数据结构形式
                // {
                //     key: '1',
                //     sortIndex: "1",
                //     studentNo: "U20136789",
                //     studentName: '胡彦斌',
                //     collegeName: "动力工程学院",
                //     majorName: "动力学",
                //     className: "1102班",
                //     handle: "查看"
                // }
            ],
            pagination: {
                current: 1,
                pageSize: 10,
                total: null
            }
        };
        this.handleTableChange  = this.handleTableChange.bind(this);
        this.toDetails = this.toDetails.bind(this);
        this.getData = this.getData.bind(this);
    }

    toDetails(record){ // 点击查看
        // 本地临时存储查看的学员信息
        setLocal("personalPortraitDetailsData", JSON.stringify(record));
        // 跳转至学院详情页面
        this.props.history.push("/mainframe/personalportrait/details");
    }

    handleTableChange(page) {
        const {current, pageSize, total} = page;
        this.setState(
            ()=>{
                return {
                    pagination: {
                        current,
                        pageSize,
                        total
                    }
                }
            },
            () => {
                this.getData()
            }
        )
    }

    // 根据筛选条件请求列表数据
    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "pageNum": 1,
                "pageSize": 10,
                "size": 10,
                "startRow": 1,
                "endRow": 10,
                "total": 628,
                "pages": 63,
                "list": [
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "陈雨椰",
                        "studentNo": "201180101",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "张茹雪",
                        "studentNo": "201180102",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "鲍晨阳",
                        "studentNo": "201180103",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "车鸣",
                        "studentNo": "201180104",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "陈金龙",
                        "studentNo": "201180105",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "程星源",
                        "studentNo": "201180106",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "樊保博",
                        "studentNo": "201180107",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "宫玉晶",
                        "studentNo": "201180108",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "顾佳晨",
                        "studentNo": "201180109",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    },
                    {
                        "collegeName": "机械工程学院",
                        "studentName": "郭宇尊",
                        "studentNo": "201180110",
                        "className": "机械181",
                        "majorName": "机械设计制造及其自动化"
                    }
                ],
                "prePage": 0,
                "nextPage": 2,
                "isFirstPage": true,
                "isLastPage": false,
                "hasPreviousPage": false,
                "hasNextPage": true,
                "navigatePages": 8,
                "navigatepageNums": [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8
                ],
                "navigateFirstPage": 1,
                "navigateLastPage": 8,
                "lastPage": 8,
                "firstPage": 1
            },
        }
                if (res.success && res.obj && res.obj.list.length > 0) {
                    let newData = res.obj.list;
                    newData.forEach(
                        (item, index) => {
                            item.handle = "查看";
                            item.key= (index -0) + 1;
                            item.sortIndex = (index - 0) + 1;
                        }
                    );
                    this.setState({
                        data: newData,
                        pagination: {
                            current: res.obj.pageNum,
                            pageSize: res.obj.pageSize,
                            total: res.obj.total
                        }
                    })
                } else {
                    this.setState({
                        data:[],
                        pagination: {
                            current: 1,
                            pageSize: 10,
                            total: null
                        }
                    })
                }
            }

    componentDidMount(){
        this.getData()
    }

    render () {
        return (
            <div style={{padding: 20}}>
                <Card title="选择学员">
                    <Table 
                        dataSource={this.state.data} 
                        columns={this.state.columns} 
                        onChange={this.handleTableChange} 
                        pagination={this.state.pagination} 
                        bordered={true}
                        />
                </Card>
            </div>
        )
    }
}

export default withRouter(XueYuan);