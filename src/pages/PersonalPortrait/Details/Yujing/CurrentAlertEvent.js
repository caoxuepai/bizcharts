import React, {Component} from 'react';
import {Card, Table} from 'antd';

let typeList = [
    {code: null, name: '全部' },
    {code: 1, name: '失联预警' },
    {code: 2, name: '网络预警' },
    {code: 3, name: '学业预警' },
    {code: 4, name: '消费预警' }
]

const level = ['#e45a5a','#f5a623','#f8e71c','#309cff'];

const columns = [
    {
        title: '序号',
        dataIndex: 'sortIndex',
        key: 'sortIndex',
        width: '6%',
    }, {
        title: '预警更新时间',
        dataIndex: 'updateTime',
    }, {
        title: '预警描述',
        dataIndex: 'describe',
        render: (text) => {
        	return (
        		<span title={text}>{text}</span>
        	)
        }
    }, {
        title: '预警类别',
        dataIndex: 'category',
        render:(text, record) => {
            let type = typeList[text] ? typeList[text].name:'';
            return type
        }
    }, {
        title: '预警级别',
        dataIndex: 'level',
        render:(text, record)=>{
            const backgroundColor = level[text-1];
            return (
                <span className={'circle-mark'} style={{width:16,height:16,top:4,backgroundColor}}/>
            )
        }
    }, {
        title: '状态',
        dataIndex: 'status',
        render:(text, record)=>{
            let color,val;
            if(parseInt(text,10)===0){
                color = '#e45a5a';val = '待处理';
            } else {
                color = '#71cf09';val = '已处理';
            }
            return (<div style={{color}}>{val}</div>);
        }
    }
]

class CurrentAlertEvent extends Component{
    constructor () {
        super ();
        this.state = {
            data : [
                // {
                //     key: '1',
                //     sortIndex: "1",
                //     updateTime: '2018-04-18 11:56:37',
                //     describe: '连续上网时长超过240小时',
                //     category: 2,
                //     level: '',
                //     status: ''
                // }
            ],
            pagination : {
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
                "size": 10,
                "startRow": 1,
                "endRow": 10,
                "total": 47,
                "pages": 5,
                "list": [
                    {
                        "id": "37cc1bbb0eb749b492db9c949973b9b8",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2017-11",
                        "createTime": "2017-11-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 0,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "d1a584ac20b2418485065560985c0232",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2017-10",
                        "createTime": "2017-10-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "8f03ae716ff740529cbb9c39a852d658",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2017-12",
                        "createTime": "2017-12-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "978b6a6d26ba4810bc9e219558999a93",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2018-07",
                        "createTime": "2018-07-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "9a005411b4154a04a28d5bc05c3117f6",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2018-04",
                        "createTime": "2018-04-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "7d7eb767fcbb40fea27482ee4b2c2e51",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2018-03",
                        "createTime": "2018-03-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "68de60ca179b4a97a548c425265799e9",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2018-05",
                        "createTime": "2018-05-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "93a535bb31ce4e2da94c678b913ea4a1",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2017-09",
                        "createTime": "2017-09-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "f9e4698a640c477fa7041d4943122884",
                        "studentNo": "131594206",
                        "alarmType": 1,
                        "alarmLevel": 1,
                        "alarmDepict": "test_2018-01",
                        "createTime": "2018-01-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
                    },
                    {
                        "id": "355bd935cb36464898b35c16b4726265",
                        "studentNo": "131594206",
                        "alarmType": 2,
                        "alarmLevel": 2,
                        "alarmDepict": "test_2017-12",
                        "createTime": "2017-12-05 15:24:33",
                        "updateTime": "2018-09-06 12:54:15",
                        "status": 1,
                        "flag": 1,
                        "studentName": "何志一",
                        "gender": "男",
                        "majorName": "机械电子工程",
                        "alarmMiss": 0,
                        "alarmNetwork": 0,
                        "alarmConsume": 0
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
                res.obj.list.forEach(
                    (unit, index) => {
                        newData.push({
                            key: (index + 1),
                            sortIndex: (index + 1),
                            updateTime: unit.updateTime,
                            describe: unit.alarmDepict,
                            category: unit.alarmType,
                            level: unit.alarmLevel,
                            status: unit.status
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
                    <h4 className="common-title">当前预警事件</h4>
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

export default CurrentAlertEvent