import React from 'react';
import NoData from '../NoData/NoDataComponent'; //暂无数据组件
import {isObjectValueEqual} from '../../../utils';

// import { postAction } from './../../../axios';

class HotMap extends React.Component {

    makeMap = (points) => {
        let BMap = window.BMap; //  全局获取BMap
        let BMapLib = window.BMapLib; // 全局获取BMapLib
        let map = new BMap.Map("HotMap");
        let point = new BMap.Point(points[0].lng, points[0].lat);
        map.centerAndZoom(point, 17);
        map.enableScrollWheelZoom();
        let heatmapOverlay = new BMapLib.HeatmapOverlay({"radius": 20});
        map.addOverlay(heatmapOverlay);
        heatmapOverlay.setDataSet({data: points, max: 100});
        heatmapOverlay.show();
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.points && !isObjectValueEqual(nextProps.points, this.props.points)) {
            setTimeout(() => {
                // 根据停留点，计算移动点，最终生成所有点的百度坐标， 开始路书配置...
                this.makeMap(nextProps.points);
            }, 50);
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (isObjectValueEqual(nextProps.makeMap, this.props.makeMap)) {
            return false;
        } else {
            return true;
        }
    }

    componentDidMount() {
        if (this.props.points && this.props.points.length > 0) {
            setTimeout(() => {
                // 根据停留点，计算移动点，最终生成所有点的百度坐标， 开始路书配置...
                this.makeMap(this.props.points);
            }, 50);
        }
    }

    render() {
        let h = document.body.clientHeight - 232;
        if (!this.props.points || this.props.points.length <= 0) {
            return (
                <div style={{backgroundColor: '#fff'}}><NoData data={'nodata'} height={h}/></div>
            );
        } else {
            return (
                <div id='HotMap' style={{width: "100%", height: h}}>123</div>
            );
        }
    }
}

export default HotMap;

// const data = [
//     {"longitude":118.721777,"latitude":32.209229,"amount":236},
//     {"longitude":118.72369,"latitude":32.210791,"amount":16},
//     {"longitude":118.722662,"latitude":32.210581,"amount":16},
//     {"longitude":118.721642,"latitude":32.209538,"amount":660}
// ]
// let newPoints = [];
// data.forEach(
//     (item) => {
//         newPoints.push({
//             "lng":item.longitude,
//             "lat":item.latitude,
//             "count": item.amount
//         })
//     }
// );