import React from "react";
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';
import { Breadcrumb } from 'antd';
import asyncComponent from './../../asyncComponent';

// 页面组建
import FilterComponent from './filterComponent';
import CurPageNav from './curPageNav';
import './GroupPortrait.css';

// 获取到异步组件
const Student = asyncComponent(() => import('./student'));
const Jiaowu = asyncComponent(() => import('./jiaowu'));
const Xiaofei = asyncComponent(() => import('./xiaofei'));
const Xuegong = asyncComponent(() => import('./xuegong'));
const Wangluo = asyncComponent(() => import('./wangluo'));
const Tushuguan = asyncComponent(() => import('./tushuguan'));
const Yujing = asyncComponent(() => import('./yujing'));

const date=new Date();
const year=date.getFullYear()

class GroupPortrait extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            schoolYear: year,
            collegeCode: "",
            majorCode: ""
        };
        this.changeFilter = this.changeFilter.bind(this);
    }

    changeFilter (obj) {
        this.setState({
            schoolYear: obj.schoolYear,
            collegeCode: obj.collegeCode,
            majorCode: obj.majorCode
        })
    }

    render () {
        return (
            <div className="groupportrait">

                <Breadcrumb  className="breadcrumb">
                    <Breadcrumb.Item>综合画像</Breadcrumb.Item>
                    <Breadcrumb.Item>群体画像</Breadcrumb.Item>
                </Breadcrumb>

                <FilterComponent changeFilter = {this.changeFilter} />

                <CurPageNav />

                <Switch>
                    <Route
                        path="/mainframe/GroupPortrait/student"
                        render = {() => {
                            return <Student schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/jiaowu"
                        render = {() => {
                            return <Jiaowu schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/xiaofei"
                        render = {() => {
                            return <Xiaofei schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/xuegong"
                        render = {() => {
                            return <Xuegong schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/wangluo"
                        render = {() => {
                            return <Wangluo schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/tushuguan"
                        render = {() => {
                            return <Tushuguan schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/yujin"
                        render = {() => {
                            return <Yujing schoolYear={this.state.schoolYear} collegeCode = {this.state.collegeCode} majorCode = {this.state.majorCode} />
                        }}
                    />
                    <Route path="/mainframe" render={(props) => <Redirect to='/mainframe/GroupPortrait/student'/>}/>
                </Switch>

            </div>
        )
    }
}

export default withRouter(GroupPortrait);

