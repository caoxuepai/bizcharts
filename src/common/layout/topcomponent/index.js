import React, { Component } from 'react';
import { connect } from "react-redux";
import './topcomponent.css';
import logo from './logo.png';
import tx from './tx.png';
import { clearLocal,  getLocal } from '../../../utils';
import { loginAction } from '../../../redux/actions/loginAction'
import { NavLink } from 'react-router-dom';

class TopComponent extends Component{
    render () {
        const userName = JSON.parse(getLocal("userInfo")).name;
        return (
            <div className='topcomponent'>
                <NavLink to='/'>
                    <img src={logo} className="logo" alt=""/>
                </NavLink>
                <p>南京工程大数据应用平台</p>
                <i className="signout iconfont icon-dengchutuichuguanbi" onClick={this.props.logout}></i>
                <div className='touxiang'>
                    <img src={tx} alt=""/>
                </div>
                <span className="username">欢迎，{userName}</span>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout () {
        	clearLocal();
            const action = loginAction(false);
            dispatch(action);
        }
    }
}

export default connect(null, mapDispatchToProps)(TopComponent)