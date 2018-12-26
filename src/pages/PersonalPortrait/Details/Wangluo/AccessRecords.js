import React, {Component} from 'react';
import {Card, Table} from 'antd';


const columns = [
    {
        title: '序号',
        dataIndex: 'sortIndex',
        key: 'sortIndex',
        width: '5%',
    }, {
        title: '上网时间',
        dataIndex: 'loginTime',
        key: 'loginTime',
    }, {
        title: '在线时间',
        dataIndex: 'onTime',
        key: 'onTime',
    }, {
        title: '登录地点名称',
        dataIndex: 'address',
        key: 'address',
    }
]
class AccessRecords extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // {
                //     key: '1',
                //     sortIndex: "1",
                //     loginTime: '2018-06-25 09:11:30',
                //     onTime: '00:23:44',
                //     address: '南京工程大学4号宿舍楼'
                // }
            ],
            pagination: {
                current: 1,  // 当前页数
                pageSize: 10,  // 每页条数
                total: 0,  // 数据总条数
                showTotal: (total) => `共${total}条数据`,  // 显示数据总条数
                showQuickJumper: true  // 显示页码快速跳转
            }
        }
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
                "pageNum": 1,
                "pageSize": 10,
                "size": 10,
                "startRow": 1,
                "endRow": 10,
                "total": 47,
                "pages": 5,
                "list": [
                    {
                        "loginTime": "2017-09-25 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-24 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-23 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-22 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-21 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-20 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-19 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-18 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-17 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
                    },
                    {
                        "loginTime": "2017-09-16 08:00:00",
                        "address": "南京工程大学",
                        "stayTime": "03:00:00"
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
                    5
                ],
                "navigateFirstPage": 1,
                "navigateLastPage": 5,
                "lastPage": 5,
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
                            sortIndex: (index + 1),
                            loginTime: unit.loginTime,
                            onTime: unit.stayTime,
                            address: unit.address
                        })
                    }
                )
                this.setState({
                    data: newData,
                    pagination: {
                        current: pageInfo.pageNum,
                        pageSize: pageInfo.pageSize,
                        total: pageInfo.total,
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true
                    }

                })
            } else {
                this.setState({
                    data: [],
                    pagination: {
                        current: 1,
                        pageSize: 10,
                        total: 0,
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true
                    }
                })
            }
    }

    componentDidMount () {
        this.getData()
    }

    render () {
            return (
                <Card>
                    <h4 className="common-title">上网记录</h4>
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

export default AccessRecords