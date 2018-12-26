import React, {Component} from 'react';
import {Card} from 'antd';
import boy from '../../../../assets/img/boy.png';
import girl from '../../../../assets/img/girl.png';
import male from '../../../../assets/img/male.png';
import female from '../../../../assets/img/female.png';


const d3 = window.d3;

class RelationshipGraph extends Component {
    constructor(props) {
        super(props);
        this.state = {
            relationsId: 'relationsId',
            classmateCount: 0,
            teacherCount: 0,
            totalCount: 0,
            nodes: [],
            edges: []
        }
        this.getData = this.getData.bind(this);
        this.setRelationshipUI = this.setRelationshipUI.bind(this);
    }

    getData() {
        const res = {
            "success": true,
            "msg": "成功",
            "obj": {
                "relationInfo": {
                    "nodes": [
                        {
                            "image": "",
                            "role": "female",
                            "name": "吴智蕾"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "季刚波"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "傅欣"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "王潘潘"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "张旭"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "赵海晶"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "沈会琪"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "王月明"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "黄玉安"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "陈丹红"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "韩冰"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "李铭"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "孟文"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "黄剑"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "胡影浩"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "孙永嘉"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "蒋耀妹"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "吴琼"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "寇波"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "陈钧"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "张庆梅"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "涂吉蓉"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "何军侠"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "曹磊"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "刘传杰"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "双冠成"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "晏光辉"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "王宏伟"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "吕学鹏"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "倪铭"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "杨艳飞"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "何红玉"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "皮锦红"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "王红星"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "王倡春"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "王善华"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "曾宪阳"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "马银忠"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "卜小海"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "王经逸"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "杭祖圣"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "张泽武"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "张声春"
                        },
                        {
                            "image": "",
                            "role": "male",
                            "name": "赵利群"
                        },
                        {
                            "image": "",
                            "role": "female",
                            "name": "袁楠"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "李启迪"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "程建雯"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "杜雨泓"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "顾林丹"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "孔玥"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "李相儒"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "孙海迪"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "王惜"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "鲍玉峰"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "陈朗"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "戴杰"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "董庭凯"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "范维康"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "高星辰"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "葛立立"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "顾伟"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "季悦"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "梁鼎翔"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "刘奔"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "刘越"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "吕浩然"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "潘锦涛"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "饶清许"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "沈凯杰"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "盛家亮"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "宋英杰"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "田杰成"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "王启康"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "吴臻煜"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "谢世伟"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "杨顺"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "张葛亮"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "张金财"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "周浩南"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "朱聪"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "朱竹旺"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "邹一"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "倪慧琳"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "石佳"
                        },
                        {
                            "image": "",
                            "role": "girl",
                            "name": "夏天伊"
                        },
                        {
                            "image": "",
                            "role": "boy",
                            "name": "刘毅"
                        }
                    ],
                    "edges": [
                        {
                            "source": 0,
                            "target": 1,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 2,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 3,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 4,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 5,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 6,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 7,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 8,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 9,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 10,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 11,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 12,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 13,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 14,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 15,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 16,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 17,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 18,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 19,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 20,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 21,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 22,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 23,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 24,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 25,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 26,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 27,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 28,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 29,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 30,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 31,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 32,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 33,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 34,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 35,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 36,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 37,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 38,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 39,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 40,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 41,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 42,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 43,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 44,
                            "relation": "老师"
                        },
                        {
                            "source": 0,
                            "target": 45,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 46,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 47,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 48,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 49,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 50,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 51,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 52,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 53,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 54,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 55,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 56,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 57,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 58,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 59,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 60,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 61,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 62,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 63,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 64,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 65,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 66,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 67,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 68,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 69,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 70,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 71,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 72,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 73,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 74,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 75,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 76,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 77,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 78,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 79,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 80,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 81,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 82,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 83,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 84,
                            "relation": "同学"
                        },
                        {
                            "source": 0,
                            "target": 85,
                            "relation": "同学"
                        }
                    ],
                    "classmateCount": 41,
                    "teacherCount": 44
                }
            }
        };
            if (res.success) {
                let newNodes = [];
                res.obj.relationInfo.nodes.forEach((unit) => {
                    if (unit.role === "boy") {
                        unit.image = boy;
                        newNodes.push(unit);
                    } else if (unit.role === "girl") {
                        unit.image = girl;
                        newNodes.push(unit);
                    } else if (unit.role === "male") {
                        unit.image = male;
                        newNodes.push(unit);
                    } else if (unit.role === "female") {
                        unit.image = female;
                        newNodes.push(unit);
                    }
                })
                this.setState({
                    nodes: newNodes,
                    edges: res.obj.relationInfo.edges,
                    classmateCount: res.obj.relationInfo.classmateCount,
                    teacherCount: res.obj.relationInfo.teacherCount,
                    totalCount: res.obj.relationInfo.classmateCount + res.obj.relationInfo.teacherCount
                },()=>{
                    this.setRelationshipUI(this.state);
                });

            }
    }

    setRelationshipUI(data) {
        const showWith = document.getElementById("root").clientWidth - 315;
        const {nodes, edges, relationsId} = data;
        let width = showWith;
        let height = 800;
        let img_w = 20;
        let img_h = 20;
        let radius = 20;    //圆形半径

        let svg = d3.select("#" + relationsId).append("svg")
            .attr("width", width)
            .attr("height", height);

        //D3力导向布局
        let force = d3.layout.force()
            .nodes(nodes)  //指定节点数组
            .links(edges)  //指定连线数据
            .size([width, height])  //指定作用域范围
            .linkDistance(200)  //指定连线长度
            .charge(-1500)  //相互之间的作用力
            .start();  //开始作用


        //边（添加连线）
        let edges_line = svg.selectAll("line")
            .data(edges)
            .enter()
            .append("line")
            .style("stroke", "#ccc")
            .style("stroke-width", 1);

        //边上的文字（人物之间的关系）
        let edges_text = svg.selectAll(".linetext")
            .data(edges)
            .enter()
            .append("text")
            .attr("class", "linetext")
            .attr("style", "font-size: 12px")
            .text(function (d) {
                return d.relation;
            });


        // 圆形图片节点（人物头像）
        let nodes_img = svg.selectAll("image")
            .data(nodes)
            .enter()
            .append("circle")
            .attr("class", "circleImg")
            .attr("r", radius)
            .attr("fill", function (d, i) {
                //创建圆形图片
                let defs = svg.append("defs").attr("id", "imgdefs")
                let catpattern = defs.append("pattern")
                    .attr("id", "catpattern" + i)
                    .attr("height", 1)
                    .attr("width", 1)
                catpattern.append("image")
                    .attr("x", -(img_w / 2 - radius))
                    .attr("y", -(img_h / 2 - radius))
                    .attr("width", img_w)
                    .attr("height", img_h)
                    .attr("xlink:href", d.image)
                return "url(#catpattern" + i + ")";
            }).call(force.drag);


        let text_dx = -20;
        let text_dy = 20;

        let nodes_text = svg.selectAll(".nodetext")
            .data(nodes)
            .enter()
            .append("text")
            .attr("class", "nodetext")
            .attr("dx", text_dx)
            .attr("dy", text_dy)
            .text(function (d) {
                return d.name;
            });


        force.on("tick", function () {
            //限制结点的边界
            nodes.forEach(function (d, i) {
                // console.log('nodes');
                d.x = d.x - img_w / 2 < 0 ? img_w / 2 : d.x;
                d.x = d.x + img_w / 2 > width ? width - img_w / 2 : d.x;
                d.y = d.y - img_h / 2 < 0 ? img_h / 2 : d.y;
                d.y = d.y + img_h / 2 + text_dy > height ? height - img_h / 2 - text_dy : d.y;
            });

            //更新连接线的位置
            edges_line.attr("x1", function (d) {
                return d.source.x;
            });
            edges_line.attr("y1", function (d) {
                return d.source.y;
            });
            edges_line.attr("x2", function (d) {
                return d.target.x;
            });
            edges_line.attr("y2", function (d) {
                return d.target.y;
            });

            //更新连接线上文字的位置
            edges_text.attr("x", function (d) {
                return (d.source.x + d.target.x) / 2;
            });
            edges_text.attr("y", function (d) {
                return (d.source.y + d.target.y) / 2;
            });


            //更新结点图片和文字
            nodes_img.attr("cx", function (d) {
                return d.x
            });
            nodes_img.attr("cy", function (d) {
                return d.y
            });

            nodes_text.attr("x", function (d) {
                return d.x
            });
            nodes_text.attr("y", function (d) {
                return d.y + img_w / 2;
            });
        });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <Card style={{height: 900}}>
                <h4 className="common-title">个人关系图谱</h4>
                <div id={this.state.relationsId} className="relations-map"></div>
                <div className="people-count">
                    迄今为止，该生于本校{this.state.totalCount}人有或远或近的联系：同学关系<span>{this.state.classmateCount}</span>人、师生关系<span>{this.state.teacherCount}</span>人。
                </div>
            </Card>
        )
    }
}

export default RelationshipGraph