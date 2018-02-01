map.createPane('indexPanein_bank');
map.getPane('indexPanein_bank').style.zIndex = 600;
map.createPane('indexPanein_cafe');
map.getPane('indexPanein_cafe').style.zIndex = 600;
map.createPane('indexPanein_clothes');
map.getPane('indexPanein_clothes').style.zIndex = 600;
map.createPane('indexPanein_community_centre');
map.getPane('indexPanein_community_centre').style.zIndex = 600;
map.createPane('indexPanein_doctors');
map.getPane('indexPanein_doctors').style.zIndex = 600;
map.createPane('indexPanein_dormitory');
map.getPane('indexPanein_dormitory').style.zIndex = 600;
map.createPane('indexPanein_electronics');
map.getPane('indexPanein_electronics').style.zIndex = 600;
map.createPane('indexPanein_events_venue');
map.getPane('indexPanein_events_venue').style.zIndex = 600;
map.createPane('indexPanein_funeral_directors');
map.getPane('indexPanein_funeral_directors').style.zIndex = 600;
map.createPane('indexPanein_furniture');
map.getPane('indexPanein_furniture').style.zIndex = 600;
map.createPane('indexPanein_grocery');
map.getPane('indexPanein_grocery').style.zIndex = 600;
map.createPane('indexPanein_health');
map.getPane('indexPanein_health').style.zIndex = 600;
map.createPane('indexPanein_homeshop');
map.getPane('indexPanein_homeshop').style.zIndex = 600;
map.createPane('indexPanein_hospital');
map.getPane('indexPanein_hospital').style.zIndex = 600;
map.createPane('indexPanein_hotel');
map.getPane('indexPanein_hotel').style.zIndex = 600;
map.createPane('indexPanein_hypermarket');
map.getPane('indexPanein_hypermarket').style.zIndex = 600;
map.createPane('indexPanein_kids');
map.getPane('indexPanein_kids').style.zIndex = 600;
map.createPane('indexPanein_kindergarten');
map.getPane('indexPanein_kindergarten').style.zIndex = 600;
map.createPane('indexPanein_library');
map.getPane('indexPanein_library').style.zIndex = 600;
map.createPane('indexPanein_market');
map.getPane('indexPanein_market').style.zIndex = 600;
map.createPane('indexPanein_minimarket');
map.getPane('indexPanein_minimarket').style.zIndex = 600;
map.createPane('indexPanein_museum');
map.getPane('indexPanein_museum').style.zIndex = 600;
map.createPane('indexPanein_orthodox');
map.getPane('indexPanein_orthodox').style.zIndex = 600;
map.createPane('indexPanein_park');
map.getPane('indexPanein_park').style.zIndex = 600;
map.createPane('indexPanein_pharmacy');
map.getPane('indexPanein_pharmacy').style.zIndex = 600;
map.createPane('indexPanein_preschool');
map.getPane('indexPanein_preschool').style.zIndex = 600;
map.createPane('indexPanein_resort');
map.getPane('indexPanein_resort').style.zIndex = 600;
map.createPane('indexPanein_sacral');
map.getPane('indexPanein_sacral').style.zIndex = 600;
map.createPane('indexPanein_school');
map.getPane('indexPanein_school').style.zIndex = 600;
map.createPane('indexPanein_school_notfull');
map.getPane('indexPanein_school_notfull').style.zIndex = 600;
map.createPane('indexPanein_schoolsport');
map.getPane('indexPanein_schoolsport').style.zIndex = 600;
map.createPane('indexPanein_serv_org');
map.getPane('indexPanein_serv_org').style.zIndex = 600;
map.createPane('indexPanein_shop');
map.getPane('indexPanein_shop').style.zIndex = 600;
map.createPane('indexPanein_shop_build');
map.getPane('indexPanein_shop_build').style.zIndex = 600;
map.createPane('indexPanein_special');
map.getPane('indexPanein_special').style.zIndex = 600;
map.createPane('indexPanein_sport');
map.getPane('indexPanein_sport').style.zIndex = 600;
map.createPane('indexPanein_sport_general');
map.getPane('indexPanein_sport_general').style.zIndex = 600;
map.createPane('indexPanein_stadium');
map.getPane('indexPanein_stadium').style.zIndex = 600;
var in_bank = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:in_bank',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_bank'
});
var in_cafe = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_cafe'
});
var in_clothes = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_clothes'
});
var in_community_centre = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_community_centre'
});
var in_doctors = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_doctors'
});
var in_dormitory = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_dormitory'
});
var in_electronics = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_electronics'
});
var in_events_venue = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_events_venue'
});
var in_funeral_directors = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_funeral_directors'
});
var in_furniture = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_furniture'
});
var in_grocery = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_grocery'
});
var in_health = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_health'
});
var in_homeshop = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_homeshop'
});
var in_hospital = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_hospital'
});
var in_hotel = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_hotel'
});
var in_hypermarket = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_hypermarket'
});
var in_kids = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_kids'
});
var in_kindergarten = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_kindergarten'
});
var in_library = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_library'
});
var in_market = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_market'
});
var in_minimarket = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_minimarket'
});
var in_museum = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_museum'
});
var in_orthodox = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_orthodox'
});
var in_park = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_park'
});
var in_pharmacy = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_pharmacy'
});
var in_preschool = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_preschool'
});
var in_resort = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_resort'
});
var in_sacral = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_sacral'
});
var in_school = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_school'
});
var in_school_notfull = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_school_notfull'
});
var in_schoolsport = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_schoolsport'
});
var in_serv_org = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_serv_org'
});
var in_shop = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_shop'
});
var in_shop_build = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_shop_build'
});
var in_special = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_special'
});
var in_sport = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_sport'
});
var in_sport_general = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_sport_general'
});
var in_stadium = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanein_stadium'
});