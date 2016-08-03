//  实例化地图
  var map = new AMap.Map('container',{
          zoom: 10,
          center: [116.39,39.9]
      });
//    实例化标记
    var marker = new AMap.Marker({
      position: [116.480983, 39.989628],
      map:map
    });
//    实例化信息窗口
var infowindow = new AMap.InfoWindow({
        content: '<h3>高德地图</h1><div>高德是中国领先的数字地图内容、导航和位置服务解决方案提供商。</div>',
        offset: new AMap.Pixel(0, -30),
        size:new AMap.Size(230,0)
   })
   infowindow.setSize(new AMap.Size(150,50));
   var contentDiv = document.createElement('div');
   contentDiv.innerText='我是信息窗体';
   infowindow.setContent(contentDiv);
   var clickHandle = AMap.event.addListener(marker, 'click', function() {
    infowindow.open(map, marker.getPosition())
})

//  添加比例尺和工具栏
AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    map.addControl(toolBar);
    map.addControl(scale);
})
