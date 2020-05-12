import React,{Fragment} from 'react'
import BMap  from 'BMap';
import { Input } from "antd";
import { connect } from "react-redux";

// const { Search } = Input;
function mapStateToProps(state) {
    return { ...state }
}
//将修改state数据的方法，映射到props,默认会传入store里的dispach方法
function mapDispatchToProps(dispatch) {
    return {
        modifyLoginState: () => { dispatch({ type: "modifyLoginState", loginState: 1 }); }
    }
}
class BaiduMapsCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: undefined,
        };
    }
    //第一次页面挂载后
    componentDidMount= () => {
        this.layPoint() 
    };
    setPlace = (value) => {
        const This = this;
        const map = new BMap.Map("address"); // 创建Map实例
        var local, point = null;
        local = new BMap.LocalSearch(map, { //智能搜索
            onSearchComplete: fn
        });
        local.search(value);
        function fn() {
            //如果搜索的有结果
            if(local.getResults() !== undefined && local.getResults().getPoi(0)) {
                point = local.getResults().getPoi(0).point; //获取第一个智能搜索的结果
                This.layPoint(point)
            } else {
            }
        }
    };
    layPoint = (e) => {
      const map = new BMap.Map("address"); // 创建Map实例
      // 清楚点
      map.clearOverlays();
      if(e !== undefined && e.lng){
        // 添加点
        const point = new BMap.Point(e.lng, e.lat);
        map.centerAndZoom(point, 15);
        const marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.enableDragging(); // 可拖拽
      }else{
        map.centerAndZoom("长沙"); // 初始化地图,设置中心点坐标和地图级别
        this.mapOnconfirm(map)
      }
      map.addEventListener('click', this.mapOnclick);
      map.enableScrollWheelZoom();//启用地图放大缩小
    //   map.enableKeyboard(); //键盘放大
    };
    mapOnconfirm = (map) => {
        const This = this;
        const ac = new BMap.Autocomplete(    //建立一个自动完成的对象
            {"input" : "suggestId"
            ,"location" : map
        });
        ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
            var myValue;
            const _value = e.item.value;
            myValue = _value.province +  _value.street +  _value.business;
            This.setState(()=>{
                return {
                    value: myValue
                }
            });
            This.setPlace(myValue);
        });
    };
    mapOnclick = (e) => {
        const This = this;
        This.layPoint(e.point)
        const geoc = new BMap.Geocoder()
        geoc.getLocation(e.point, function (rs) {
            //点击地图获取地标
            var myValue;
            if(rs.surroundingPois.length>0){
                myValue=rs.surroundingPois[0].title
            }else{
                const _value = rs.addressComponents;
                myValue =  _value.district +  _value.city + _value.street + _value.streetNumber
            }
            This.setState(()=>{
                return {
                    value: myValue
                }
            });
        }); 
    };
    //搜索框内容改变
    onChange = (e) => {
        this.setState({
            value: e.target.value,
        });
    };
    render() {
      const { value } = this.state;
      return (
        <Fragment>
          <Input className="cssInput" id="suggestId" placeholder="请输入地址" value={value} onChange={this.onChange}></Input>
          <div className="address" id="address" >
          </div>
        </Fragment>
      );
    }
}



//将上面的这2个方法，将数据仓库的state和修改state的方法映射到组件上，形成新的组件。
const BaiduMaps = connect(mapStateToProps, mapDispatchToProps)(BaiduMapsCom);

export default BaiduMaps;