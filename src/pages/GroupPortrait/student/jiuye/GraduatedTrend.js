import React, {Component} from 'react';
import {Card} from 'antd';
import {Chart, Axis, Geom, Tooltip, Legend } from 'bizcharts';
import {DataSet} from '@antv/data-set';
import './JobAnalysis.less';



class GraduatedTrend extends Component{

    constructor(props){
        super(props);
        this.state = {
            data : [
                { year: '2013', 已毕业: 7.0, 未毕业: 3.9 },
                { year: '2014', 已毕业: 6.9, 未毕业: 4.2 },
                { year: '2015', 已毕业: 9.5, 未毕业: 5.7 },
                { year: '2016', 已毕业: 14.5, 未毕业: 8.5 },
                { year: '2017', 已毕业: 18.4, 未毕业: 11.9 },
                { year: '2018', 已毕业: 21.5, 未毕业: 15.2 }
            ]
        };
    }

    render(){
        const ds = new DataSet();
        const dv = ds.createView().source(this.state.data);
        dv.transform({
            type: 'fold',
            fields: [ '已毕业', '未毕业' ], // 展开字段集
            key: 'yearNum', // key字段
            value: 'number', // value字段
        });
        const cols = {
            month: {
                range: [ 0, 1 ]
            }
        }

        return(
            <Card style={{width:'100%',height:this.props.height}}>
                <h4 className="common-title">毕业趋势
                    <span className="unit-number">人数（单位：人）</span>
                </h4>
                <Chart
                    height={this.props.height - 60}
                    data={dv}
                    scale={cols}
                    forceFit
                >
                    <Legend />
                    <Axis name="year" />
                    <Axis name="number" label={{formatter: val => `${val}`}}/>
                    <Tooltip crosshairs={{type : "y"}}/>
                    <Geom type="line" position="year*number" size={2} color={['yearNum', ['#1890ff','#f04864']]} />
                    <Geom type='point' position="year*number" size={4} shape={'circle'} color={['yearNum', ['#1890ff','#f04864']]} style={{ stroke: '#fff', lineWidth: 1}} />
                </Chart>
            </Card>
        )
    }
}

export default GraduatedTrend;