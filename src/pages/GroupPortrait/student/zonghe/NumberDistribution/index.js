import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, } from 'antd';
import { Chart, Axis, Geom, Tooltip, Coord, Legend  } from 'bizcharts';
import { DataSet } from '@antv/data-set';
import './NumberDistribution.less';

class NumberDistribution extends React.Component{

    constructor(props){
        super(props);
        this.state={
            data:[
                { 'State': '建筑电气与智能化', '男生': 135, '女生': 33 },
                { 'State': '智能电网信息工程', '男生': 124, '女生': 54 },
                { 'State': '电气工程', '男生': 135, '女生': 30 },
                { 'State': '电气工程与智能控制', '男生': 92, '女生': 32 },
                { 'State': '电气工程及其自动化(专转本)', '男生': 75, '女生': 15 },
                { 'State': '电气工程及其自动化(中外合作办学)', '男生': 226, '女生': 96 },
                { 'State': '电气工程及其自动化(电力系统及其自动化)', '男生': 619, '女生': 140 },
                { 'State': '电气工程及其自动化(电力系统及其自动化)(卓越工程师计划)', '男生': 143, '女生': 27 },
                { 'State': '电气工程及其自动化(电力系统继电保护)', '男生': 277, '女生': 95 },
                { 'State': '电气工程及其自动化(输配电工程)', '男生': 353, '女生': 0 }
            ]
        };
    };

    render(){
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '男生', '女生' ], // 展开字段集
            key: '学院', // key字段
            value: '学员数量', // value字段
            retains: [ 'State' ] // 保留字段集，默认为除fields以外的所有字段
        });
        const titleSet = {
            offset: {Number}, // 设置标题 title 距离坐标轴线的距离
            textStyle: {
                fontSize: '10',
                textAlign: 'center',
                fill: '#999',
            }
        };
        const label = {
            offset: 10,
            textStyle: {
                textAlign: 'end', // 文本对齐方向，可取值为： start center end
                fill: '#404040', // 文本的颜色
                fontSize: '12', // 文本大小
                fontWeight: 'nomal', // 文本粗细
                rotate: 0,
                textBaseline: 'middle' // 文本基准线，可取 top middle bottom，默认为middle
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
            <Card className="number-distribution" style={{height:this.props.height || 376}}>
                <h4 className="common-title">人数分布(院/系)
                    <span>(单位：人)</span>
                </h4>
                <Chart
                    height={this.props.height - 66 || 350}
                    data={dv}
                    padding={[20, 30, 70, 100]}
                    forceFit
                >
                    <Legend />
                    <Coord transpose />
                    <Axis name="State" title={titleSet} label={label}/>
                    <Axis name="学员数量"/>
                    <Tooltip />
                    <Geom type="intervalStack" position="State*学员数量" color={['学院',['#1890ff','#f0785f']]} />
                </Chart>
            </Card>
        )
    }
}

export default withRouter(NumberDistribution)