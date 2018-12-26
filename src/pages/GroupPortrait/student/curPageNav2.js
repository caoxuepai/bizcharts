import React from "react";
import {withRouter, NavLink} from 'react-router-dom';


class CurPageNav2 extends React.Component {
    render () {
        return (
            <div className="tabs">
                <NavLink to="/mainframe/GroupPortrait/student/zonghe">
                    <span>综合分析</span>
                </NavLink>
                <span>/</span>
                <NavLink to="/mainframe/GroupPortrait/student/chengji">
                    <span>成绩分析</span>
                </NavLink>
                <span>/</span>
                <NavLink to="/mainframe/GroupPortrait/student/zhaosheng">
                    <span>招生分析</span>
                </NavLink>
                <span>/</span>
                <NavLink to="/mainframe/GroupPortrait/student/jiuye">
                    <span>就业分析</span>
                </NavLink>
            </div>
        )
    }
}

export default withRouter(CurPageNav2);
