import React from 'react';

const config =  [
    {
        name: '综合画像',
        icon: <i className="iconfont icon-shujumofang" style={{marginRight: 5}}></i>,
        subMenus:[{
            name: '群体画像',
            url: '/mainframe'
        },{
            name: '个人画像',
            url: '/mainframe/personalportrait'
        }]
    },
    {
        name: '轨迹分析',
        icon: <i className="iconfont icon-guiji" style={{marginRight: 5}}></i>,
        subMenus:[{
            name: '个人轨迹',
            url:'/mainframe/personalpath'
        },{
            name: '群体轨迹',
            url:'/mainframe/grouppath'
        }]
    },
    {
        name: '综合预警',
        icon: <i className="iconfont icon-yujing" style={{marginRight: 5}}></i>,
        url:'/mainframe/comprehensivewarning'
    },
    {
        name: '系统设置',
        icon: <i className="iconfont icon-icon--" style={{marginRight: 5}}></i>,
        subMenus:[{
            name: '预警设置',
            url:'/mainframe/systemsetup/earlywarningsetting'
        },{
            name: '行为轨迹设置',
            url:'/mainframe/systemsetup/behaviortrajectory'
        }]
    },
    {
        name: '权限管理',
        icon: <i className="iconfont icon-quanxianguanli" style={{marginRight: 5}}></i>,
        subMenus:[
        	{
	            name: '账户管理',
	            url:'/mainframe/accessmanage/account'
	        },
	        {
	            name: '菜单管理',
	            url:'/mainframe/accessmanage/menu'
	        },
	        {
	            name: '权限配置',
	            url:'/mainframe/accessmanage/authority'
	        }
        ]
    },
]

export default config;