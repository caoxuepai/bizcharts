import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {Select, Button} from 'antd';


const Option = Select.Option;
class SelectCriteria extends Component{
    constructor (props) {
        super(props);
        this.state = {
            valuelist: [],
            curValue: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.sure = this.sure.bind(this);
    }

    componentDidMount() {
        // 年份
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "name": "2017-2018-2",
                    "value": "2017-2018下学期"
                },
                {
                    "name": "2017-2018-1",
                    "value": "2017-2018上学期"
                },
                {
                    "name": "2016-2017-2",
                    "value": "2016-2017下学期"
                },
                {
                    "name": "2016-2017-1",
                    "value": "2016-2017上学期"
                },
                {
                    "name": "2015-2016-2",
                    "value": "2015-2016下学期"
                },
                {
                    "name": "2015-2016-1",
                    "value": "2015-2016上学期"
                }
            ],
        }
            if (res.success) {
                this.setState(
                    () =>{
                        return {
                            valuelist: res.obj,
                            curValue: res.obj[0].name
                        }
                    },
                    ()=>{
                        this.sure()
                    }
                )
            }
    }


    render () {
        return (
            <Fragment>
                <span>选择条件：</span>
                <Select value={this.state.curValue} style={{ width: 200, marginRight: 10 }} onChange={this.handleChange}>
                    {this.state.valuelist.map(item => <Option key={item.name} value={item.name}>{item.value}</Option>)}
                </Select>
                <Button type="primary" icon="search" onClick={this.sure}>搜  索 </Button>
            </Fragment>
        )
    }

    handleChange (value) {
        this.setState({
            curValue: value
        })
    }

    // 点击搜索， 将当前选择年份传递给父级组件
    sure () {
        this.props.changeFilter(this.state.curValue)
    }
}

export default withRouter(SelectCriteria)