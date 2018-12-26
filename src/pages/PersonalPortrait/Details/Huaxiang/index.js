import React from 'react';
import {Row, Col} from 'antd';
//引入样式
import './portrait.less';
//引入组件
import PeoplePortrait from './PeoplePortrait';
import RelationshipGraph from "./RelationshipGraph";


class Huaxiang extends React.Component{
    render () {
        return (
            <div>
                <Row>
                    <Col span={24} className="people-portrait">
                        <PeoplePortrait height={590}/>
                    </Col>
                    <Col span={24} className="relationship">
                        <RelationshipGraph />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Huaxiang