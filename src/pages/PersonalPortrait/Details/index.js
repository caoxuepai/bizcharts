import React from 'react';
import { Breadcrumb, Menu } from 'antd';
import Huaxiang from './Huaxiang';
import Xueye from './Xueye';
import Jiangli from './Jiangli';
import Yikatong from './Yikatong';
import Tushu from './Tushu';
import Wangluo from './Wangluo/index';
import Yujing from './Yujing';

class Details extends React.Component{
    constructor(props){
        super(props);
        this.state={
            current:'item1'
        };
        this.handleNavClick = this.handleNavClick.bind(this);
        this.changePage = this.changePage.bind(this);
    }

    // 切换tab
    handleNavClick = (e) => {
        this.setState({
            current: e.key,
        });
    }

    // 根据不同的tab， 返回不同的组件页面
    changePage () {
        const current = this.state.current;
        if (current === "item1") {
            return (
                <Huaxiang />
            )
        } else if (current === "item2") {
            return (
                <Xueye />
            )
        } else if (current === "item3") {
            return (
                <Jiangli />
            )
        } else if (current === "item4") {
            return (
                <Yikatong />
            )
        } else if (current === "item5") {
            return (
                <Tushu />
            )
        } else if (current === "item6") {
            return (
                <Wangluo />
            )
        } else if (current === "item7") {
            return (
                <Yujing />
            )
        }
    }

    render () {
        return (
            <React.Fragment>


                <Breadcrumb  className="breadcrumb">
                    <Breadcrumb.Item>综合画像</Breadcrumb.Item>
                    <Breadcrumb.Item>个人画像</Breadcrumb.Item>
                </Breadcrumb>


                <Menu onClick={this.handleNavClick} selectedKeys={[this.state.current]} mode="horizontal" style={{paddingLeft: 20, borderTop: "1px solid #ccc"}}>

                    <Menu.Item key="item1" style={{paddingLeft:35, paddingRight:35}}>
                        整体画像
                    </Menu.Item>

                    <Menu.Item key="item2" style={{paddingLeft:35, paddingRight:35}}>
                        学业成绩
                    </Menu.Item>

                    <Menu.Item key="item3" style={{paddingLeft:35, paddingRight:35}}>
                        奖励情况
                    </Menu.Item>

                    <Menu.Item key="item4" style={{paddingLeft:35, paddingRight:35}}>
                        一卡通
                    </Menu.Item>

                    <Menu.Item key="item5" style={{paddingLeft:35, paddingRight:35}}>
                        图书借阅
                    </Menu.Item>

                    <Menu.Item key="item6" style={{paddingLeft:35, paddingRight:35}}>
                        网络使用
                    </Menu.Item>

                    <Menu.Item key="item7" style={{paddingLeft:35, paddingRight:35}}>
                        预警信息
                    </Menu.Item>

                </Menu>

                {
                    this.changePage()
                }

            </React.Fragment>
        )
    }
}

export default Details;