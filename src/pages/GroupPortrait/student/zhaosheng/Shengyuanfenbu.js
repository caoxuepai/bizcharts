import React, {Component} from 'react';
import {DataSet, baiduMapLayer, utilCityCenter, utilCurve, geojson} from 'mapv';
import {Card} from 'antd';
import chinajson from './china';

const BMap = window.BMap;
const styleJson = [{
    "featureType": "water",
    "elementType": "all",
    "stylers": {
        "color": "#031628"
    }
}, {
    "featureType": "land",
    "elementType": "geometry",
    "stylers": {
        "color": "#000102"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#000000"
    }
}, {
    "featureType": "highway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#147a92"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#000000"
    }
}, {
    "featureType": "arterial",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#0b3d51"
    }
}, {
    "featureType": "local",
    "elementType": "geometry",
    "stylers": {
        "color": "#000000"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#000000"
    }
}, {
    "featureType": "railway",
    "elementType": "geometry.stroke",
    "stylers": {
        "color": "#08304b"
    }
}, {
    "featureType": "subway",
    "elementType": "geometry",
    "stylers": {
        "lightness": -70
    }
}, {
    "featureType": "building",
    "elementType": "geometry.fill",
    "stylers": {
        "color": "#000000"
    }
}, {
    "featureType": "all",
    "elementType": "labels.text.fill",
    "stylers": {
        "color": "#857f7f"
    }
}, {
    "featureType": "all",
    "elementType": "labels.text.stroke",
    "stylers": {
        "color": "#000000"
    }
}, {
    "featureType": "building",
    "elementType": "geometry",
    "stylers": {
        "color": "#022338"
    }
}, {
    "featureType": "green",
    "elementType": "geometry",
    "stylers": {
        "color": "#062032"
    }
}, {
    "featureType": "boundary",
    "elementType": "all",
    "stylers": {
        "color": "#465b6c"
    }
}, {
    "featureType": "manmade",
    "elementType": "all",
    "stylers": {
        "color": "#022338"
    }
}, {
    "featureType": "label",
    "elementType": "all",
    "stylers": {
        "color": "#022338",
        "visibility": "off"
    }
}];


// =====================================================================

class StudentMap extends Component {
    constructor(props) {
        super(props);
        const mapId = 'map' + new Date().getTime();
        this.state = {
            mapId,
        };
        this.makeMap = this.makeMap.bind(this);
    }

    makeMap() {
        // 创建Map实例 (必须在canvas渲染之后执行)
        let map = new BMap.Map(this.state.mapId, {
            enableMapClick: false
        });
        // 初始化地图,设置中心点坐标和地图级别
        map.centerAndZoom(new BMap.Point(105.403119, 38.028658), 5);
        // 地图样式
        map.setMapStyle({
            styleJson: styleJson
        });
        let geojsonOptions = {
            gradient: {
                0: 'rgba(55, 50, 250, 0.4)',
                1: 'rgba(55, 50, 250, 1)'
            },
            max: 354551,
            draw: 'intensity'
        };
        // 坐标信息
        let geojsonDataSet = geojson.getDataSet(chinajson);

        let qianxi = new DataSet(this.props.datas);
        let qianxiData = qianxi.get();
        let lineData = [];
        let pointData = [];
        let textData = [];
        let timeData = [];
        let citys = {};
        for (let i = 0; i < qianxiData.length; i++) {
            let fromCenter = utilCityCenter.getCenterByCityName(qianxiData[i].from);
            let toCenter = utilCityCenter.getCenterByCityName(qianxiData[i].to);
            if (!fromCenter || !toCenter) {
                continue;
            }
            citys[qianxiData[i].from] = qianxiData[i].count;
            citys[qianxiData[i].to] = qianxiData[i].count;
            pointData.push({
                geometry: {
                    type: 'Point',
                    coordinates: [fromCenter.lng, fromCenter.lat]
                }
            });
            pointData.push({
                geometry: {
                    type: 'Point',
                    coordinates: [toCenter.lng, toCenter.lat]
                }
            });
            textData.push({
                geometry: {
                    type: 'Point',
                    coordinates: [fromCenter.lng, fromCenter.lat]
                },
                text: qianxiData[i].from + " " + qianxiData[i].count
            });
            textData.push({
                geometry: {
                    type: 'Point',
                    coordinates: [toCenter.lng, toCenter.lat]
                },
                text: qianxiData[i].to
            });

            let curve = utilCurve.getPoints([fromCenter, toCenter]);

            for (let j = 0; j < curve.length; j++) {
                timeData.push({
                    geometry: {
                        type: 'Point',
                        coordinates: curve[j]
                    },
                    count: 1,
                    time: j
                });
            }

            lineData.push({
                geometry: {
                    type: 'LineString',
                    coordinates: curve
                    //coordinates: [[fromCenter.lng, fromCenter.lat], [toCenter.lng, toCenter.lat]]
                },
                count: 30 * Math.random()
            });

        }
        ;
        let data = geojsonDataSet.get({
            filter: function (item) {

                if (!citys[item.name]) {
                    return false;
                }

                item.count = citys[item.name];
                return true;
            }
        });
        geojsonDataSet = new DataSet(data);

        new baiduMapLayer(map, geojsonDataSet, geojsonOptions);
        let textDataSet = new DataSet(textData);

        let textOptions = {
            draw: 'text',
            font: '14px Arial',
            fillStyle: 'white',
            shadowColor: 'yellow',
            shadowBlue: 10,
            zIndex: 11,
            shadowBlur: 10
        };
        new baiduMapLayer(map, textDataSet, textOptions);

        let lineDataSet = new DataSet(lineData);

        let lineOptions = {
            strokeStyle: 'rgba(255, 250, 50, 0.8)',
            shadowColor: 'rgba(255, 250, 50, 1)',
            shadowBlur: 20,
            lineWidth: 2,
            zIndex: 100,
            draw: 'simple'
        };

        new baiduMapLayer(map, lineDataSet, lineOptions);

        let pointOptions = {
            fillStyle: 'rgba(254,175,3,0.7)',
            shadowColor: 'rgba(55, 50, 250, 0.5)',
            shadowBlur: 10,
            size: 5,
            zIndex: 10,
            draw: 'simple'
        };

        let pointDataSet = new DataSet(pointData);

        new baiduMapLayer(map, pointDataSet, pointOptions);

        let timeDataSet = new DataSet(timeData);

        let timeOptions = {
            fillStyle: 'rgba(255, 250, 250, 0.5)',
            zIndex: 200,
            size: 2.5,
            animation: {
                type: 'time',
                stepsRange: {
                    start: 0,
                    end: 50
                },
                trails: 10,
                duration: 2,
            },
            draw: 'simple'
        };

        new baiduMapLayer(map, timeDataSet, timeOptions);
    }

    componentDidMount() {
        this.makeMap();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props) {
            setTimeout(this.makeMap, 50);
        }
    }

    render() {
        return (
            <Card style={{width: "100%", height: this.props.height}}>
                <h4 className="common-title" style={{marginBottom: 10}}>
                    生源分布
                    <span style={{float: "right", fontSize: '14px'}}>
                        总人数：
                        <span style={{color: "#1890FF", fontSize: '16px'}}>{this.props.totalNum}</span>
                    </span>
                </h4>
                <div id={this.state.mapId} style={{height: this.props.height - 80}}></div>
            </Card>
        );
    }
}

// =================================================================


class Shengyuanfenbu extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            totalNum: 149,
            datas: [
                {from: '云南', count: 3, to: '南京'},
                {from: '四川', count: 1, to: '南京'},
                {from: '安徽', count: 5, to: '南京'},
                {from: '山东', count: 2, to: '南京'},
                {from: '江苏', count: 123, to: '南京'},
                {from: '江西', count: 2, to: '南京'},
                {from: '河北', count: 2, to: '南京'},
                {from: '河南', count: 3, to: '南京'},
                {from: '浙江', count: 3, to: '南京'},
                {from: '甘肃', count: 2, to: '南京'}
            ]
        });
    }

    render() {
        return (<StudentMap datas={this.state.datas} totalNum={this.state.totalNum} height={this.props.height}/>);
    }
}

export default Shengyuanfenbu;

