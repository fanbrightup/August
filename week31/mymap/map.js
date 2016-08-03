// var map = new AMap.Map('container');
// map.setZoom(10);
// map.setCenter([116.39,39.9]);
var smap = new AMap.Map('container',{
        zoom: 10,
        center: [116.39,39.9]
    });
var marker = new AMap.Marker({
        position: [116.480983, 39.989628],
        map:smap
    });
    marker.setMap();
