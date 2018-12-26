import React, {Component} from 'react';
import {Card, Table} from 'antd';


//表头设置
const columns = [
    {
        title: '排名',
        dataIndex: 'sortIndex',
        width: '6%'
    }, {
        title: '图书名称',
        dataIndex: 'bookName',
        render: (text) => {
        	return (
        		<span title={text}>{text}</span>
        	)
        }
    }, {
        title: '索书号',
        dataIndex: 'bookIndex',
        width: '20%'
    }, {
        title: '作者',
        dataIndex: 'writer',
        width: '15%'
    }, {
        title: '出版社',
        dataIndex: 'public',
        width: '20%',
        render: (text) => {
        	return (
        		<span title={text}>{text}</span>
        	)
        }
    }, {
        title: '借阅次数',
        dataIndex: 'borrowTimes',
        width: '10%'
    }
]

class PopularBooks extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // {
                //     key: '1',
                //     sortIndex: "1",
                //     bookName: '计算机理论',
                //     bookIndex: 'B27689',
                //     writer: '张三',
                //     public: '华中科技大学出版社',
                //     borrowTimes: 1111
                // }
            ],
            pagination: {
                current: 1,  // 当前页数
                pageSize: 10,  // 每页条数
                total: 0,  // 数据总条数
                showTotal: (total) => `共${total}条数据`,  // 显示数据总条数
                showQuickJumper: true  // 显示页码快速
            }
        }
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
                "pageSize": 10,
                "size": 1,
                "startRow": 1,
                "endRow": 1,
                "total": 1,
                "pages": 1,
                "list": [
                    {
                        "bookPress": "-",
                        "bookCode": "978-7-111-47985-7",
                        "sortIndex": 1,
                        "bookAuthor": "-",
                        "bookName": "C语言解惑",
                        "bookTimes": 1
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
        }
            if (res.success) {
                const pageInfo = res.obj;
                let newData = [];
                pageInfo.list.forEach(
                    (unit, index) => {
                        newData.push({
                            key: (index + 1),
                            sortIndex: unit.sortIndex,
                            bookName: unit.bookName,
                            bookIndex: unit.bookCode,
                            writer: unit.bookAuthor,
                            public: unit.bookPress,
                            borrowTimes: unit.bookTimes
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
                    }
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
                    }
                })
            }
    }

    componentDidMount () {
        this.getData();
    }

    render () {
        return (
            <Card>
                <h4 className="common-title">热门图书排行（TOP100）</h4>
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

export default PopularBooks