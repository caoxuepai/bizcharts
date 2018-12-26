import React, {Component} from 'react';
import {Button, Modal} from 'antd';
import './style.less';

class MainModal extends Component {
    render() {
        let props = Object.assign({}, this.props, {
            footer: null,
            onOk: undefined,
            className: 'main-mpdal-comp'
        });
        return (
            <Modal
                {...props}
            >
                {this.props.children}
                {this.props.noFooter ? null : <div style={{textAlign: 'center', marginTop: 20}}>
                    <Button type={'primary'} onClick={this.props.onOk}>{this.props.okText || '保 存'}</Button>
                    <Button style={{marginLeft: 10}} onClick={this.props.onCancel}>取 消</Button>
                </div>}
            </Modal>
        );
    }
}

export default MainModal;