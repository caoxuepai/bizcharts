import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card } from 'antd';
import { Chart, Axis, Geom, Tooltip } from 'bizcharts';
import './NumberProfessional.less'

class NumberProfessional extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            data: [
                { majorName: '机械设计制造及其自动化', amount: 932 },
                { majorName: '机械电子工程', amount: 891 },
                { majorName: '自动化', amount: 856 },
                { majorName: '通信工程', amount: 773 },
                { majorName: '土木工程(建筑工程)', amount: 760 },
                { majorName: '电气工程及其自动化(电力系统及其自动化)', amount: 759 },
                { majorName: '机械工程', amount: 581 },
                { majorName: '材料成型及控制工程(模具设计)', amount: 529 },
                { majorName: '自动化(数控技术)', amount: 517 },
                { majorName: '软件工程', amount: 466 }
            ]
        };
    }

    render(){

        const label = {
            offset: 20,
            textStyle: {
                textAlign: 'center', // 文本对齐方向，可取值为： start center end
                fill: '#404040', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'nomal', // 文本粗细
                rotate: 0,
                textBaseline: 'bottom' // 文本基准线，可取 top middle bottom，默认为middle
            },
            autoRotate: false,
            formatter: (str) => {
                if (str.length > 7) {
                    str = str.substr(0,7) + "...";
                }
                return str
            }
        };

        return(
            <Card className="professional" style={{height:this.props.height || 370}}>
                <h4 className="common-title">专业人数TOP10
                    <span>(单位：人)</span>
                </h4>
                <Chart
                    height={this.props.height - 30 || 350}
                    data={this.state.data}
                    forceFit
                >
                    <Axis name="majorName" label={label} />
                    <Axis name="amount" />
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom
                        type="interval"
                        position="majorName*amount"
                        tooltip={['majorName*amount', (majorName, amount) => {
                            return {
                                name: '人数',
                                value: amount
                            };}]}
                    />
                </Chart>
            </Card>
        )
    }
}

export default withRouter(NumberProfessional)