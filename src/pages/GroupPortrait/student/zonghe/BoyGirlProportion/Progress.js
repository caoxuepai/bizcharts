//react基础依赖
import React from 'react';
// 路由组建
import {withRouter} from 'react-router-dom';
// 状态管理组建
import {connect} from 'react-redux';
//引入less文件
import './BoyGirlProportion.less'

class Progress extends React.Component {
    state = {
        processBox:'processBox',
        width:null,
        processWidth:null,
        curProcess:null,
        boxStyle:null,
        bigCircleStyle:null,
        circleStyle:null,
        processStyle:null,
        silderWidth: 40
    }
    constructor(props) {
        super(props);
        this.resize.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps !== this.props) {
            setTimeout(()=>{
                if(!this.props.widthAuto){
                    this.setSizeAction(this.props.width);
                }
            })
        }
    }

    componentWillMount(){
        if(!this.props.widthAuto){
            this.setSizeAction(this.props.width);
        }
    }
    componentDidMount(){
        if(this.props.widthAuto){
            this.resize();
            window.addEventListener('resize', this.resize.bind(this));
        }
    }
    resize(){
        this.setSizeAction(this.refs.processBox.parentNode.clientWidth);
    }
    componentWillUnmount(){
        if(this.props.widthAuto){
            window.removeEventListener('resize', this.resize.bind(this));
        }
    }
    setSizeAction(pwidth) {
        let silderWidth,width,processWidth,curProcess,boxStyle,bigCircleStyle,circleStyle,processStyle;
        width = pwidth || 300;
        silderWidth = this.props.silderWidth || this.state.silderWidth;
        if(this.props.maxWidth && width>this.props.maxWidth){
            width = this.props.maxWidth;
        }
        processWidth = this.props.processWidth || 30;
        curProcess = this.props.process || 50;
        //盒子
        boxStyle = {
            width,
            height:(width-silderWidth*2)/2,
            padding:`0 ${silderWidth}px`
        };
        //外圈
        bigCircleStyle = {
            width:width-silderWidth*2,
            height:(width-silderWidth*2)/2,
            borderTopLeftRadius:(width-silderWidth*2)/2,
            borderTopRightRadius:(width-silderWidth*2)/2,
            padding:`${processWidth}px ${processWidth}px 0 ${processWidth}px`,
            backgroundColor: this.props.bgColor || '#e9e9e9',
        }
        //内圈
        circleStyle = {
            width:width-silderWidth*2-processWidth*2,
            height:(width-silderWidth*2-processWidth*2)/2,
            borderTopLeftRadius:(width-silderWidth*2-processWidth*2)/2,
            borderTopRightRadius:(width-silderWidth*2-processWidth*2)/2
        }
        //进度
        processStyle = {
            width:width-silderWidth*2,
            height:(width-silderWidth*2)/2,
            borderTopLeftRadius:(width-silderWidth*2)/2,
            borderTopRightRadius:(width-silderWidth*2)/2,
            backgroundColor: this.props.color || '#4ed8da',
            transform: `rotateZ(${180+(curProcess*1.8)}deg)`
        }
        this.setState({
            width,silderWidth,processWidth,curProcess,boxStyle,bigCircleStyle,circleStyle,processStyle
        })
    }
    render() {
        let left = this.props.left || 0;
        let right = this.props.right || '100%';
        let title = this.props.title || '50%';
        let desc = this.props.desc || '学习情况';
        return (
            <div className="Progress" style={this.state.boxStyle} ref={this.state.processBox}>
                <div className="main" style={this.state.bigCircleStyle}>
                    <div className="processBar" style={this.state.processStyle}>

                    </div>
                    <div className="cont" style={this.state.circleStyle}>
                        <p className="title">{title}</p>
                        <p className="desc">{desc}</p>
                    </div>
                </div>
                <div className="left" style={{width:this.state.silderWidth}}>{left}</div>
                <div className="right" style={{width:this.state.silderWidth}}>{right}</div>
            </div>
        )
    }
}

export default withRouter(connect(state=>state)(Progress))