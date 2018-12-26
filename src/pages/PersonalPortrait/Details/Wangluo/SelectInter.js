import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {Select, Button} from 'antd';


const Option = Select.Option;

class SelectCard extends Component{

    constructor (props) {
        super(props);
        this.state = {
            yearlist: [],
            curyear: ""
        };
        this.handleYearChange = this.handleYearChange.bind(this);
        this.sure = this.sure.bind(this);
    }

    componentDidMount() {
        // 年份
        let date = new Date();
        let year = date.getFullYear() + "";
        let list = [year];
        for (let i = 0; i < 5; i++) {
            list.push(year - (i + 1) + "");
        };
        this.setState(() => {
            return {
                yearlist: list,
                curyear: year
            }
        })
    }


    render () {
        return (
            <Fragment>
                <span>选择条件：</span>
                <Select value={this.state.curyear} style={{ width: 124, marginRight: 10 }} onChange={this.handleYearChange}>
                    {this.state.yearlist.map(item => <Option key={item} value={item}>{item + "年"}</Option>)}
                </Select>
                <Button type="primary" icon="search" onClick={this.sure}>搜  索 </Button>
            </Fragment>
        )
    }

    handleYearChange (value) {
        this.setState({
            curyear: value
        })
    }

    // 点击搜索， 将当前选择年份传递给父级组件
    sure () {
        this.props.changeFilter(this.state.curyear)
    }
}

export default withRouter(SelectCard)