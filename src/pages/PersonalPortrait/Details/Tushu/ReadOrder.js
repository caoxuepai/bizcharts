import React, {Component} from 'react';
import {Card, Table, Progress} from 'antd';


const columns = [
    {
        title: '排名',
        dataIndex: 'sortIndex',
        key: 'sortIndex',
        width:'6%'
    }, {
        title: '借书证号',
        dataIndex: 'cardId',
        key: 'cardId',
        width:'15%'
    }, {
        title: '姓名',
        dataIndex: 'borrower',
        key: 'borrower',
        width:'15%'
    }, {
        title: '单位',
        dataIndex: 'department',
        key: 'department',
        width:'20%',
        render: (text) => {
        	return (
        		<span title={text}>{text}</span>
        	)
        }
    }, {
        title: '外借数量（本）',
        dataIndex: 'borrowTimes',
        key: 'borrowTimes',
        width:'37%',
        render : (text, record, index) => {
            return (
                <div>
                    <Progress
                        percent={Math.round((record.borrowTimes/120)*100)} showInfo={false} style={{width: "70%", float:"left"}} />
                    <span style={{float: "right"}}>{record.borrowTimes}</span>
                </div>
            )
        }
    }
]

class ReadOrder extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                {
                    key: '1',
                    sortIndex: "1",
                    cardId: 'U20173847',
                    borrower: '张三',
                    department: '理学院一大队五队计算机专业',
                    borrowTimes: '30'
                }
            ],
            pagination: {
                current: 1,  // 当前页数
                pageSize: 10,  // 每页条数
                total: 0,  // 数据总条数
                showTotal: (total) => `共${total}条数据`,  // 显示数据总条数
                showQuickJumper: true  // 显示页码快速跳转
            },
            averageReading: 0
        };
        this.handleTableChange = this.handleTableChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleTableChange = (pagination) => {
        this.setState (
            () => {
                return {
                    pagination: {
                        current: pagination.current,  // 当前页数
                        pageSize: pagination.pageSize,  // 每页条数
                        total: pagination.total,  // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true  // 显示页码快速跳转
                    }
                }
            },
            () => {
                this.getData()
            }
        )
    }

    getData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "countList": {
                    "pageNum": 1,
                    "pageSize": 10,
                    "size": 1,
                    "startRow": 1,
                    "endRow": 1,
                    "total": 1,
                    "pages": 1,
                    "list": [
                        {
                            "unitName": "经济与管理学院信息管理与信息系统专业信息管理151班",
                            "sortIndex": 1,
                            "bookCount": 1,
                            "studentName": "冯倩",
                            "studentNo": "209150906",
                            "borrowCode": "209150906"
                        }
                    ],
                    "prePage": 0,
                    "nextPage": 0,
                    "isFirstPage": true,
                    "isLastPage": true,
                    "hasPreviousPage": false,
                    "hasNextPage": false,
                    "navigatePages": 8,
                    "navigatepageNums": [
                        1
                    ],
                    "navigateFirstPage": 1,
                    "navigateLastPage": 1,
                    "lastPage": 1,
                    "firstPage": 1
                },
                "avgCount": "1.00"
            },
        }
            if (res.success) {
                const pageInfo = res.obj.countList;
                let newData = [];
                pageInfo.list.forEach(
                    (unit, index) => {
                        newData.push({
                            key: (index + 1),
                            sortIndex: unit.sortIndex,
                            cardId: unit.borrowCode,
                            borrower: unit.studentName,
                            department: unit.unitName,
                            borrowTimes: unit.bookCount
                        })
                    }
                )
                this.setState({
                    data: newData,
                    pagination: {
                        current: pageInfo.pageNum, // 当前页数，
                        pageSize: pageInfo.pageSize, // 每页条数
                        total: pageInfo.total, // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    },
                    averageReading: res.obj.avgCount
                });
            } else {
                this.setState({
                    data: [],
                    pagination: {
                        current: 1, // 当前页数，
                        pageSize: 10, // 每页条数
                        total: 0, // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    },
                    averageReading: 0
                })
            }
    }

    componentDidMount () {
        this.getData();
    }

    render () {
            return (
                <Card>
                    <h4 className="common-title">阅读量排行（TOP20）</h4>
                    <Table
                        dataSource={this.state.data}
                        columns={columns}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange}
                        bordered={true}
                        footer={
                            (currentPageData) => {
                                return (
                                    <div>
                                        <span>平均阅读量</span>
                                        <div style={{width: "40%",float: "right", paddingLeft: "20px"}}>
                                            <Progress percent={Math.round(((this.state.averageReading - 0)/120)*100)} showInfo={false} style={{width: "70%", float:"left"}} />
                                            <span style={{float: "right"}}>{this.state.averageReading}</span>
                                        </div>
                                    </div>
                                )
                            }
                        }
                    />
                </Card>
            )
        }
}

export default ReadOrder