import React from 'react';
import {withRouter} from 'react-router-dom';
import { Card,Row, Col, Badge } from 'antd';
import girlPng from './girl.png';
import boyPng from './boy.png';
//引入半圆环组件
import Progress from './Progress';
//引入less文件
import "./BoyGirlProportion.less";

class BoyGirlProportion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hasdata: false,
            boy: 19471,
            girl: 7132,
            boypercent: "73%",
            girlpercent: "27%",
            totalNum: 26603,
            processnum: 0
        };
    }
    
    getBoyAndGirlData () {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": [
                {
                    "gender": "女",
                    "amount": 375
                },
                {
                    "gender": "男",
                    "amount": 1735
                }
            ],
            "errorCode": null
        }
        if (res.success && res.obj.length > 0) {
            let boynum = 0;
            let girlnum = 0;
            res.obj.forEach( item => {
                if (item.gender === "男") {
                    boynum = item.amount
                } else if (item.gender === "女") {
                    girlnum = item.amount
                }
            })
            this.setState(() => {
                return {
                    hasdata: true,
                    boy: boynum,
                    girl: girlnum,
                    boypercent: Math.round(((boynum - 0) / ((boynum - 0) + (girlnum - 0))) * 100) + "%" ,
                    girlpercent:Math.round(((girlnum - 0) / ((boynum - 0) + (girlnum - 0))) * 100) + "%",
                    totalNum: (boynum - 0) + (girlnum - 0),
                    processnum: Math.round(((girlnum - 0) / ((boynum - 0) + (girlnum - 0))) * 100) - 0
                }
            })
        } else {
            this.setState({
                hasdata: false,
                boy: '',
                girl: '',
                boypercent: "",
                girlpercent: "",
                totalNum: '',
                processnum: ''
            })
        }
    }

    componentDidMount(){
        this.getBoyAndGirlData()
    }

    render(){
        return(
            <React.Fragment>
                <Card className="proportion" style={{height: this.props.height}}>
                    <h4 className="common-title">男女比例
                        <span>(单位：人)</span>
                    </h4>
                    <div style={{marginTop: 70}}>
                        <Progress width={440}
                                processWidth={25}
                                silderWidth={100}
                                color={'#f0785f'}
                                bgColor= {'#1890ff'}
                                process={this.state.processnum}
                                title={<span style={{fontSize:35,color:'#9b9b9b'}}>{this.state.totalNum}</span>}
                                desc={<span style={{fontSize:12,color:'#9b9b9b'}}>人</span>}
                                left={<img src={girlPng} style={{marginRight:30}} alt="girl"/>}
                                right={<img src={boyPng} style={{marginLeft:30}} alt="boy"/>}
                        />
                    </div>
                    <Row className="stCountFooter">
                        <Col span={6} className="girl-precent">
                            <Badge dot style={{backgroundColor:'#f0785f'}} /> {this.state.girlpercent}
                        </Col>
                        <Col span={6} className="desc">
                            女生：{this.state.girl}人
                        </Col>
                        <Col span={6} className="boy-precent leftBorder">
                            <Badge dot style={{backgroundColor:'#1890ff'}} /> {this.state.boypercent}
                        </Col>
                        <Col span={6} className="desc">
                            男生：{this.state.boy}人
                        </Col>
                    </Row>
                </Card>
            </React.Fragment>
        )
    }
}

export default withRouter(BoyGirlProportion)

