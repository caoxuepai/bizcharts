import React, {Component} from 'react';
import {Row, Col, Spin} from 'antd';

import noDataImg from './NoData.png';
import './noData.less';

class NoDataComponent extends Component {

    render() {
        return (
            <Row className={"no-data-con"} style={{height: this.props.height ? this.props.height : '100%'}}>
                {this.props.data === 'nodata' ? <Col span={24} className={"no-data"}><img src={noDataImg} alt="nodata"/></Col> :
                    <Spin size="large"/>}
            </Row>
        );
    }
}

export default NoDataComponent;

