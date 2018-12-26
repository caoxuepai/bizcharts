import React, { Component } from "react";
import {withRouter, Route, Switch} from 'react-router-dom';
import { Breadcrumb } from 'antd';
import Filter from './Filter';
import XueYuan from './XueYuan';
import Details from './Details';
import { removeLocal, setLocal } from './../../utils';

const curYear = new Date().getFullYear();

class ListPage extends Component {
    constructor (props) {
        super (props);
        this.state={
            filterObj: {
                year: curYear, 
                college: "", 
                major: "", 
                classes:  "", 
                nameOrCode: ""
            }
        };
        this.filterObj = this.filterObj.bind(this);
    }

    filterObj (obj) {
        this.setState({
            filterObj: {...obj}
        })
    }

    render () {
        return (
            <React.Fragment>
                <Breadcrumb  className="breadcrumb">
                    <Breadcrumb.Item>综合画像</Breadcrumb.Item>
                    <Breadcrumb.Item>个人画像</Breadcrumb.Item>
                </Breadcrumb>
                <Filter filterObj={this.filterObj} />
                <XueYuan {...this.state.filterObj} />
            </React.Fragment>
        )
    }
}

class PersonalPortrait extends Component {
	constructor(props){
		super(props);
		this.state={
			student: false
		}
	}
	componentDidMount(){
		// 验证角色
		const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "personalPortraitDetailsData": "",
                "student": false
            },
            "errorCode": null
        }
				if (res.success){
					if (!res.obj.student) {// 用户角色不是学生， 显示list页面， 清除本地学生信息
						removeLocal('personalPortraitDetailsData');
						this.setState({
							student: false
						})
					} else { // 用户角色是学生， 直接显示详情页面， 不显示list页面， 本地存储学生信息
						setLocal('personalPortraitDetailsData', JSON.stringify(res.obj.personalPortraitDetailsData));
						this.setState({
							student: true
						})
					}
				}
	}
	
    render () {
    	if (!this.state.student) {
    		return (
    		    <React.Fragment>
    		        <Switch>
    		            <Route path="/mainframe/personalportrait/list" component={ListPage}/>
    		            <Route path="/mainframe/personalportrait/details" component={Details}/>
    		            <Route component={ListPage}/>
    		        </Switch>
    		    </React.Fragment>
    		)
    	} else {
    		return (
    		    <React.Fragment>
    		        <Switch>
    		            <Route path="/mainframe/personalportrait/details" component={Details}/>
    		            <Route component={Details}/>
    		        </Switch>
    		    </React.Fragment>
    		)
    	}
    }
}

export default withRouter(PersonalPortrait)