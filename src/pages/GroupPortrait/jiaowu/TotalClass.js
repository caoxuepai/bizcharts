import React from 'react';
import { Card } from 'antd';

class TotalClass extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            year: "2015",
            colledge: "全校",
            major: "",
            totalClassNum: "159",
            majorClassNum: "6"
        };
    }

    render () {
        if (!this.state.colledge) {
            return (
                <Card>
                    <span style={{ marginRight:10, lineHeight:"24px",fontSize:"18px",fontWeight:600}}>{this.state.year}</span>
                    <span style={{ marginRight:10, lineHeight:"24px",fontSize:"18px",fontWeight:600}}>年</span>
                    <span style={{ marginRight:10, lineHeight:"24px",fontSize:"18px",fontWeight:600}}>全校</span>
                    <div style={{float:"right"}}>
                        <span style={{ marginRight:10, lineHeight:"24px",fontSize:"16px"}}>开课总数</span>
                        <span style={{ marginRight:40, color:"#1690ff", lineHeight:"24px",fontSize:"30px"}}>{this.state.totalClassNum}</span>
                        <span style={{ marginRight:10, lineHeight:"24px",fontSize:"16px"}}>专业总数</span>
                        <span style={{ marginRight:10, color:"#1690ff", lineHeight:"24px",fontSize:"30px"}}>{this.state.majorClassNum}</span>
                    </div>
                </Card>
            )
        } else {
            if (!this.state.major) {
                return (
                    <Card>
                        <span style={{ marginRight:10, lineHeight:"24px",fontSize:"18px",fontWeight:600}}>{this.state.year}</span>
                        <span style={{ marginRight:10, lineHeight:"24px",fontSize:"18px",fontWeight:600}}>年</span>
                        <span style={{ marginRight:10, lineHeight:"24px",fontSize:"18px",fontWeight:600}}>{this.state.colledge}</span>
                        <div style={{float:"right"}}>
                            <span style={{ marginRight:10, lineHeight:"24px",fontSize:"16px"}}>开课总数</span>
                            <span style={{ marginRight:40, color:"#1690ff", lineHeight:"24px",fontSize:"30px"}}>{this.state.totalClassNum}</span>
                            <span style={{ marginRight:10, lineHeight:"24px",fontSize:"16px"}}>专业总数</span>
                            <span style={{ marginRight:10, color:"#1690ff", lineHeight:"24px",fontSize:"30px"}}>{this.state.majorClassNum}</span>
                        </div>
                    </Card>
                )
            } else {
                return (
                    <Card>
                        <span style={{ marginRight:10, lineHeight:"24px"}}>{this.state.year}</span>
                        <span style={{ marginRight:10, lineHeight:"24px"}}>年</span>
                        <span style={{ marginRight:10, lineHeight:"24px"}}>{this.state.colledge}</span>
                        <span style={{ marginRight:10, lineHeight:"24px"}}>{this.state.major}</span>
                        <div style={{float:"right"}}>
                            <span style={{ marginRight:10, lineHeight:"24px"}}>开课总数</span>
                            <span style={{fontSize: 20, marginRight:40, color:"#1690ff", lineHeight:"24px"}}>{this.state.totalClassNum}</span>
                        </div>
                    </Card>
                )
            }
        }
    }
}

export default TotalClass