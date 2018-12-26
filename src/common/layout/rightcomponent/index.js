import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import asyncComponent from '../../../asyncComponent';
import './rightcomponent.css'

//获取到异步组件
// 群体画像
const GroupPortrait = asyncComponent(() => import('../../../pages/GroupPortrait'));
// 个人画像
const PersonalPortrait = asyncComponent(() => import('../../../pages/PersonalPortrait'));
// 群体轨迹
const GroupPath = asyncComponent(() => import('../../../pages/GroupPath'));
// 个人轨迹
const PersonalPath = asyncComponent(() => import('../../../pages/PersonalPath'));
//综合预警
const ComprehensiveWarning = asyncComponent(() => import('../../../pages/ComprehensiveWarning')); //列表页
const ComprehensiveWarningDetail = asyncComponent(() => import('../../../pages/ComprehensiveWarning/Detail/Detail')); //详情页
//系统设置
const BehaviorTrajectory = asyncComponent(() => import('../../../pages/SystemSetup/BehaviorTrajectory')); //行为轨迹设置
const EarlyWarningSetting = asyncComponent(() => import('../../../pages/SystemSetup/EarlyWarningSetting')); //预警设置
const EarlyWarningConfigAdd = asyncComponent(() => import('../../../pages/SystemSetup/EarlyWarningSetting/EarlyWarningConfig/AddPage')); //预警设置
const WhitelistPersonalAdd = asyncComponent(() => import('../../../pages/SystemSetup/EarlyWarningSetting/WhiteListConfig/Personal/AddOrEditPage')); //预警白名单添加编辑页面
const WhitelistHolidayAdd = asyncComponent(() => import('../../../pages/SystemSetup/EarlyWarningSetting/WhiteListConfig/Holiday/AddOrEditPage')); //预警白名单节假日添加编辑页面
// 权限管理
const Account = asyncComponent(() => import('../../../pages/AccessManage/Account')); //账户管理
const Menu = asyncComponent(() => import('../../../pages/AccessManage/Menu')); //菜单管理
const Authority = asyncComponent(() => import('../../../pages/AccessManage/Authority')); //权限配置

class RightComponent extends React.Component{
    render () {
        return (
            <div className='rightcomponent'>
                <div className='scrollcontainer'>
                    <Switch>
                        <Route path="/mainframe/GroupPortrait" component={GroupPortrait}/>
                        <Route path="/mainframe/personalportrait" component={PersonalPortrait}/>
                        <Route path="/mainframe/grouppath" component={GroupPath}/>
                        <Route path="/mainframe/personalpath" component={PersonalPath}/>
                        <Route path="/mainframe/systemsetup/behaviortrajectory" component={BehaviorTrajectory}/>
                        <Route path="/mainframe/systemsetup/earlywarningsetting" component={EarlyWarningSetting}/>
                        <Route path="/mainframe/systemsetup/earlywarningconfigadd" component={EarlyWarningConfigAdd}/>
                        <Route path="/mainframe/systemsetup/earlywarningwhitelist/personal/addoredit" component={WhitelistPersonalAdd}/>
                        <Route path="/mainframe/systemsetup/earlywarningwhitelist/holiday/addoredit" component={WhitelistHolidayAdd}/>
                        <Route path="/mainframe/comprehensivewarning" exact component={ComprehensiveWarning}/>
                        <Route path="/mainframe/comprehensivewarning/detail/:id" exact component={ComprehensiveWarningDetail}/>
                        <Route path="/mainframe/accessmanage/account" component={Account}/>
                        <Route path="/mainframe/accessmanage/menu" component={Menu}/>
                        <Route path="/mainframe/accessmanage/authority" component={Authority}/>
                        {/*<Route component={GroupPortrait}/>*/}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default withRouter(RightComponent)