import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Coord, Legend} from 'bizcharts';
import { DataSet } from '@antv/data-set';


class EmploymentAnalysis extends Component{

    constructor(props){
        super(props);
        this.state={
            data : [
                { 'showName': '研究生处', '已就业': 66, '未就业': 0, "total": 66, percent: "100%"},
                { 'showName': '机械工程学院', '已就业': 555, '未就业': 4, "total": 559, percent: "99%"},
                { 'showName': '材料工程学院', '已就业': 462, '未就业': 1, "total": 463, percent: "99%"},
                { 'showName': '能源与动力工程学院', '已就业': 314, '未就业': 1, "total": 315, percent: "99%"},
                { 'showName': '电力工程学院', '已就业': 536, '未就业': 18, "total": 554, percent: "96%"},
                { 'showName': '自动化学院', '已就业': 435, '未就业': 12, "total": 447, percent: "97%"},
                { 'showName': '通信工程学院', '已就业': 504, '未就业': 2, "total": 506, percent: "99%"},
                { 'showName': '计算机工程学院', '已就业': 329, '未就业': 15, "total": 344, percent: "95%"},
                { 'showName': '经济与管理学院', '已就业': 737, '未就业': 23, "total": 760, percent: "96%"}
            ]
        };
    };

    render(){
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '已就业', '未就业' ], // 展开字段集
            key: 'name', // key字段
            value: 'number', // value字段
            retains: [ 'showName','total','percent'] // 保留字段集，默认为除fields以外的所有字段
        });
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
                    str = str.substr(0, 7) + "...";
                }
                return str
            }
        };

        return(
            <Card style={{width:'100%', height:this.props.height}}>
                <h4 className="common-title">就业率分析</h4>
                <Chart
                    height={this.props.height - 61}
                    data={dv}
                    padding={[20, 30, 70, 100]}
                    forceFit
                >
                    <Legend />
                    <Coord transpose />
                    <Axis name="showName" label={label} />
                    <Axis name="number" />
                    <Tooltip />
                    <Geom
                        type="intervalStack"
                        position="showName*number"
                        color={['name', ['#309cff', '#8d99b0']]}
                        tooltip={['name*number*total', (name, number, total)=>{
                            return {
                                name:name,
                                value: number + "(" + Math.round((number/total)*100) + "%)"
                            }}]}
                    />
                </Chart>
            </Card>
        )
    }
}

export default EmploymentAnalysis