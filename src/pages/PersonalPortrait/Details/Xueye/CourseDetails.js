import React, {Component} from 'react';
import {Card, Table} from 'antd';


const columns = [
    {
        title: '序号',
        dataIndex: 'sortIndex',
    },
    {
        title: '学科',
        dataIndex: 'courseName',
    }, {
        title: '学分',
        dataIndex: 'credit',
    }, {
        title: '成绩',
        dataIndex: 'score',
    }, {
        title: '平均分',
        dataIndex: 'avgScore',
    }
]

class CourseDetails extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [],
            pagination: {
                current: 1,  // 当前页数
                pageSize: 5,  // 每页条数
                total: 0,  // 数据总条数
                showTotal: (total) => `共${total}条数据`,  // 显示数据总条数
                showQuickJumper: true  // 显示页码快速跳转
            }
        };
        this.handleTableChange = this.handleTableChange.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleTableChange = (pagination) => {
        this.setState(
            () => {
                return {
                    pagination: {
                        current: pagination.current, // 当前页数，
                        pageSize:pagination.pageSize, // 每页条数
                        total: pagination.total, // 数据总条数
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
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
                "pageNum": 1,
                "pageSize": 5,
                "size": 5,
                "startRow": 1,
                "endRow": 5,
                "total": 17,
                "pages": 4,
                "list": [
                    {
                        "score": 54,
                        "courseName": "概论Ⅱ",
                        "avgScore": 78.61,
                        "courseCode": "0302110018",
                        "credit": "0"
                    },
                    {
                        "score": 54,
                        "courseName": "概论Ⅱ",
                        "avgScore": 54,
                        "courseCode": "0302110018",
                        "credit": "0"
                    },
                    {
                        "score": 87,
                        "courseName": "大学生创新创业教育",
                        "avgScore": 84.71,
                        "courseCode": "0401161002",
                        "credit": "1.5"
                    },
                    {
                        "score": 72,
                        "courseName": "工程学科英语",
                        "avgScore": 74.04,
                        "courseCode": "0502104154",
                        "credit": "2.0"
                    },
                    {
                        "score": 72,
                        "courseName": "工程学科英语",
                        "avgScore": 56.2,
                        "courseCode": "0502104154",
                        "credit": "2.0"
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
                    4
                ],
                "navigateFirstPage": 1,
                "navigateLastPage": 4,
                "lastPage": 4,
                "firstPage": 1
            },
        }
            if (res.success && res.obj && res.obj.list.length > 0) {
                let newData = res.obj.list;
                newData.forEach(
                    (item, index) => {
                        item.sortIndex = (index - 0) + 1;
                        item.key = index;
                    }
                );
                this.setState({
                    data: newData,
                    pagination: {
                        current: res.obj.pageNum,
                        pageSize: res.obj.pageSize,
                        total: res.obj.total,
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    }
                })
            } else {
                this.setState({
                    data: [],
                    pagination: {
                        current: 1,
                        pageSize: 5,
                        total: null,
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true // 显示页码快速跳转
                    }
                })
            }
    }

    componentDidMount(){
        this.getData()
    }

    render () {
            return (
                <Card style={{width:'100%', height:this.props.height}}>
                    <h4 className="common-title">个人课程详情</h4>
                    <Table
                        dataSource={this.state.data}
                        columns={columns}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange}
                        bordered={true}
                    />
                </Card>
            )
        }
}

export default CourseDetails