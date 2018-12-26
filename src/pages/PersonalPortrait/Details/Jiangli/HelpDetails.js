import React, {Component} from 'react';
import {Card, Table} from 'antd';


const columns = [
    {
        title: '序号',
        dataIndex: 'sortIndex',
        key: 'sortIndex',
        width: '5%',
    }, {
        title: '获奖时间',
        dataIndex: 'time',
        key: 'time',
    }, {
        title: '获奖名称',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '金额（元）',
        dataIndex: 'money',
        key: 'money',
    }
]

class HelpDetails extends Component{
    constructor (props) {
        super (props);
        this.state = {
            data : [
                // {
                //     key: '1',
                //     sortIndex: "1",
                //     time: '2017-12-27 17:46:12',
                //     name: '国家励志奖学金',
                //     money: 5000
                // }
            ],
            pagination: {
                current: 1,
                pageSize: 10,
                total: 0,
                showTotal: (total) => `共${total}条数据`,
                showQuickJumper: true
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
                        current: pagination.current,
                        pageSize: pagination.pageSize,
                        total: pagination.total,
                        showTotal: (total) => `共${total}条数据`,
                        showQuickJumper: true
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
                        "money": "100",
                        "name": "贷款",
                        "time": "2018-03-11 01:00:00"
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
                res.obj.list.forEach(
                    (unit, index) => {
                    newData.push({
                        key: (index + 1),
                        sortIndex: (index + 1),
                        time: unit.time,
                        name: unit.name,
                        money: unit.money
                    })
                })
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
                    <h4 className="common-title">个人奖助详情</h4>
                    <Table
                        dataSource={this.state.data}
                        columns={columns}
                        bordered={true}
                        pagination={this.state.pagination}
                        onChange={this.handleTableChange}
                    />
                </Card>
            )
        }
}

export default HelpDetails