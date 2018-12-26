import React from "react";
import {withRouter, NavLink} from 'react-router-dom';
import { Menu } from 'antd';

class CurPageNav extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            current: 'item1',
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    render () {
        return (
            <Menu onClick={this.handleNavClick} selectedKeys={[this.state.current]} mode="horizontal" style={{paddingLeft: 20}}>

                <Menu.Item key="item1" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/student">学生分析</NavLink>
                </Menu.Item>

                <Menu.Item key="item2" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/jiaowu">教务分析</NavLink>
                </Menu.Item>

                <Menu.Item key="item3" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/xiaofei">消费分析</NavLink>
                </Menu.Item>

                <Menu.Item key="item4" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/xuegong">学工分析</NavLink>
                </Menu.Item>

                <Menu.Item key="item5" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/wangluo">网络分析</NavLink>
                </Menu.Item>

                <Menu.Item key="item6" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/tushuguan">图书馆分析</NavLink>
                </Menu.Item>

                <Menu.Item key="item7" style={{paddingLeft:35, paddingRight:35}}>
                    <NavLink to="/mainframe/GroupPortrait/yujin">预警分析</NavLink>
                </Menu.Item>

            </Menu>
        )
    }

    // 切换tap页
    handleNavClick = (e) => {
        this.setState({
            current: e.key,
        });
    }
}

export default withRouter(CurPageNav);
