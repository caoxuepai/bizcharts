import React from "react";
import {withRouter, Route, Switch, Redirect} from 'react-router-dom';

import asyncComponent from './../../../asyncComponent';

// 页面组建
import CurPageNav2 from './curPageNav2';

//获取到异步组件
const Zhaosheng = asyncComponent(() => import('./zhaosheng'));
const Zonghe = asyncComponent(() => import('./zonghe'));
const Chengji = asyncComponent(() => import('./chengji'));
const Jiuye = asyncComponent(() => import('./jiuye'));

class Student extends React.Component {

    render () {
        return (
            <div className="groupportrait">

                <div style={{width: "100%", overflow: "hidden", padding: "20px 0px 0px 10px", textAlign:"center"}}>
                    <CurPageNav2 />
                </div>

                <Switch>
                    <Route
                        path="/mainframe/GroupPortrait/student/zonghe"
                        render = {() => {
                            return <Zonghe schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/student/chengji"
                        render = {() => {
                            return <Chengji schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/student/jiuye" 
                        render = {() => {
                            return <Jiuye schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        }}
                    />
                    <Route
                        path="/mainframe/GroupPortrait/student/zhaosheng"
                        render = {() => {
                            return <Zhaosheng schoolYear={this.props.schoolYear} collegeCode = {this.props.collegeCode} majorCode = {this.props.majorCode} />
                        }}
                    />
                    <Route path="/mainframe/GroupPortrait/student" render={(props) => <Redirect to='/mainframe/GroupPortrait/student/zonghe'/>}/>
                </Switch>

            </div>
        )
    }
}

export default withRouter(Student);

