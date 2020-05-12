## react引入百度地图（配置智能检索&&反向地址解析获取实际地标）

这是一个用react封装的百度地图组件

### Step 1
```html
$ yarn install 
```
### Step 2
```html
$ yarn start
```
### Step 3
智能检索功能LocalSearch()
```javascript
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
```
### Step 4
给搜索的点创建地标marker
```javascript
	layPoint = (e) => {
      const map = new BMap.Map("address"); // 创建Map实例
      // 清楚点
      map.clearOverlays();
      if(e !== undefined){
        // 添加点
        const point = new BMap.Point(e.lng, e.lat);//根据经纬度添加点坐标
        map.centerAndZoom(point, 15);
        const marker = new BMap.Marker(point); // 创建标注
        map.addOverlay(marker); // 将标注添加到地图中
        marker.enableDragging(); // 可拖拽
      }else{
        map.centerAndZoom("长沙"); // 初始化地图,设置中心点坐标和地图级别
        this.mapOnconfirm(map)//点击智能检索下拉框出发
      }
      map.addEventListener('click', this.mapOnclick);//点击地图
      map.enableScrollWheelZoom();//启用地图放大缩小
    };
```
### Step 5
百度地图的反向地址解析功能

```javascript
mapOnclick = (e) => {
        const This = this;
        This.layPoint(e.point)
        const geoc = new BMap.Geocoder()// 创建地址解析器实例
        // 将地址解析结果显示在地图上，并调整地图视野
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
```
展示效果
![](https://img-blog.csdnimg.cn/20200512144932854.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2NoZW55dWVsaXU=,size_16,color_FFFFFF,t_70)

附上原理解析步骤https://blog.csdn.net/chenyueliu/article/details/106055965

## At last, 祝玩得愉快！我会继续完善功能。
