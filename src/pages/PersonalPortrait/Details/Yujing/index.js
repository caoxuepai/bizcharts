import React from 'react';
import {Row, Col} from 'antd';
//引入组件
import CurrentAlertEvent from './CurrentAlertEvent';
import HistoryAlert from './HistoryAlert';
//引入样式
import './warning.less';


class Yujing extends React.Component{
    render () {
        return (
            <div>
                <Row>
                    <Col span={24} className="current" style={{}}>
                        <CurrentAlertEvent />
                    </Col>
                    <Col span={24} style={{background:'#ffffff', boxShadow:'0 0 10px 0 rgba(0,0,0,0.05)', borderRadius:'4px', width: '98%', margin: '0 1%'}}>
                        <HistoryAlert height={400}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Yujing;