import React from 'react';
import {connect} from 'react-redux';
import {loginAction} from './../../redux/actions/loginAction';
// import { postAction } from './../../axios';
import {setLocal} from './../../utils';
import {Input, Icon, Button, message} from 'antd';
import BgImg from './../../assets/img/bg.jpg';
import Logo from './../../assets/img/logo.png';

const divstyle = {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative"
};

const bgimg = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "100%",
    height: "100%",
    zIndex: "0",
};

const content = {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: "348px",
    height: "418px",
    background: "white",
    borderRadius: "5px",
    padding: "35px",
    zIndex: "1",
    marginTop: "-209px",
    marginLeft: "-174px",
    textAlign: "center"
};


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            userCode: ""
        };

        // 账户名称
        this.userEmpty = this.userEmpty.bind(this);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        // 账户密码
        this.codeEmpty = this.codeEmpty.bind(this);
        this.onChangeUserCode = this.onChangeUserCode.bind(this);
    }


    // 账户名称
    userEmpty() {
        this.userNameInput.focus();
        this.setState({userName: ''});
    }

    onChangeUserName(e) {
        this.setState({userName: e.target.value});
    }

    // 账户密码
    codeEmpty() {
        this.userCodeInput.focus();
        this.setState({userCode: ''});
    }

    onChangeUserCode(e) {
        this.setState({userCode: e.target.value});
    }

    render() {
        const suffixUserName = this.state.userName ? <Icon type="close-circle" onClick={this.userEmpty}/> : null;
        const suffixUserCode = this.state.userCode ? <Icon type="close-circle" onClick={this.codeEmpty}/> : null;
        return (
            <div style={divstyle}>
                <img src={BgImg} alt="" style={bgimg}/>
                <div style={content}>

                    <img src={Logo} alt="" style={{marginTop: 10}}/>

                    <h4 style={{fontSize: "18px", margin: "20px auto"}}>南京工程学院大数据应用平台</h4>

                    <form onSubmit={
                        (e) => {
                            e.preventDefault();
                            if (!this.state.userName) {
                                message.warn("请输入账户名称");
                                return;
                            }
                            if (!this.state.userCode) {
                                message.warn("请输入账户密码");
                                return;
                            }
                            const curUrl = `/bigdata/user/login?username=${this.state.userName}&password=${this.state.userCode}`;
                            this.props.handleLogin(curUrl);
                        }
                    }
                    >
                        <Input
                            placeholder="请输入账户名称"
                            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            suffix={suffixUserName}
                            value={this.state.userName}
                            onChange={this.onChangeUserName}
                            ref={node => this.userNameInput = node}
                            size="large"
                            style={{marginBottom: 24, marginTop: 18}}
                        />

                        <Input
                            placeholder="请输入账户密码"
                            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                            suffix={suffixUserCode}
                            value={this.state.userCode}
                            onChange={this.onChangeUserCode}
                            ref={node => this.userCodeInput = node}
                            type="password"
                            size="large"
                            style={{marginBottom: 50}}
                        />

                        <Button
                            type="primary"
                            block
                            size="large"
                            htmlType='submit'
                        >登 录</Button>
                    </form>

                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleLogin(curUrl) {
            const res = {
                "msg": "登录成功",
                "obj": {
                    "accountNonExpired": true,
                    "accountNonLocked": true,
                    "authorities": [],
                    "credentialsNonExpired": true,
                    "enabled": true,
                    "id": 1,
                    "menus": [
                        {
                            "iconSelectedUrl": "test",
                            "iconUrl": "test",
                            "id": 150,
                            "name": "综合画像",
                            "parentId": -1,
                            "seq": 11,
                            "subMenus": [
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 151,
                                    "name": "群体画像",
                                    "parentId": 150,
                                    "seq": 12,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/GroupPortrait"
                                },
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 152,
                                    "name": "个人画像",
                                    "parentId": 150,
                                    "seq": 13,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/personalportrait"
                                }
                            ],
                            "tags": [],
                            "url": ""
                        },
                        {
                            "iconSelectedUrl": "n_ico3.png",
                            "iconUrl": "n_ico3.png",
                            "id": 2,
                            "name": "轨迹分析",
                            "parentId": -1,
                            "seq": 14,
                            "subMenus": [
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 4,
                                    "name": "个人轨迹",
                                    "parentId": 2,
                                    "seq": 58,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/personalpath"
                                },
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 153,
                                    "name": "群体轨迹",
                                    "parentId": 2,
                                    "seq": 59,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/grouppath"
                                }
                            ],
                            "tags": [],
                            "url": ""
                        },
                        {
                            "iconSelectedUrl": "",
                            "iconUrl": "",
                            "id": 178,
                            "name": "综合预警",
                            "parentId": -1,
                            "seq": 256,
                            "subMenus": [],
                            "tags": [],
                            "url": "/mainframe/comprehensivewarning"
                        },
                        {
                            "iconSelectedUrl": "",
                            "iconUrl": "",
                            "id": 179,
                            "name": "系统设置",
                            "parentId": -1,
                            "seq": 257,
                            "subMenus": [
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 180,
                                    "name": "预警设置",
                                    "parentId": 179,
                                    "seq": 387,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/systemsetup/earlywarningsetting"
                                },
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 181,
                                    "name": "行为轨迹设置",
                                    "parentId": 179,
                                    "seq": 388,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/systemsetup/behaviortrajectory"
                                }
                            ],
                            "tags": [],
                            "url": "/mainframe/systemsetup"
                        },
                        {
                            "iconSelectedUrl": "xitongguanli2.png",
                            "iconUrl": "xitongguanli.png",
                            "id": 10,
                            "name": "权限管理",
                            "parentId": -1,
                            "seq": 259,
                            "subMenus": [
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 25,
                                    "name": "账户管理",
                                    "parentId": 10,
                                    "seq": 264,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/accessmanage/account"
                                },
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 24,
                                    "name": "菜单管理",
                                    "parentId": 10,
                                    "seq": 265,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/accessmanage/menu"
                                },
                                {
                                    "iconSelectedUrl": "",
                                    "iconUrl": "",
                                    "id": 26,
                                    "name": "权限配置",
                                    "parentId": 10,
                                    "seq": 266,
                                    "subMenus": [],
                                    "tags": [],
                                    "url": "/mainframe/accessmanage/authority"
                                }
                            ],
                            "tags": [],
                            "url": ""
                        }
                    ],
                    "name": "Administrator",
                    "sex": 1,
                    "userId": "",
                    "username": "admin"
                },
                "success": true
            };

            if (res.success) {
                setLocal("userInfo", JSON.stringify(res.obj));
                setLocal("loginStatus", true);
                const action = loginAction(true);
                dispatch(action);
            } else {
                message.error(res.obj);
            }

            // postAction(
            // 	curUrl
            // ).then (function (res) {

            // })
        }
    };
};

export default connect(null, mapDispatchToProps)(LoginPage);

