map.createPane('indexPanepn_atm');
map.getPane('indexPanepn_atm').style.zIndex = 600;
map.createPane('indexPanepn_bank');
map.getPane('indexPanepn_bank').style.zIndex = 600;
map.createPane('indexPanepn_beauty');
map.getPane('indexPanepn_beauty').style.zIndex = 600;
map.createPane('indexPanepn_cafe');
map.getPane('indexPanepn_cafe').style.zIndex = 600;
map.createPane('indexPanepn_clock');
map.getPane('indexPanepn_clock').style.zIndex = 600;
map.createPane('indexPanepn_clothes');
map.getPane('indexPanepn_clothes').style.zIndex = 600;
map.createPane('indexPanepn_doctors');
map.getPane('indexPanepn_doctors').style.zIndex = 600;
map.createPane('indexPanepn_electronics');
map.getPane('indexPanepn_electronics').style.zIndex = 600;
map.createPane('indexPanepn_emergency');
map.getPane('indexPanepn_emergency').style.zIndex = 600;
map.createPane('indexPanepn_fap');
map.getPane('indexPanepn_fap').style.zIndex = 600;
map.createPane('indexPanepn_fitness');
map.getPane('indexPanepn_fitness').style.zIndex = 600;
map.createPane('indexPanepn_grocery');
map.getPane('indexPanepn_grocery').style.zIndex = 600;
map.createPane('indexPanepn_haircut');
map.getPane('indexPanepn_haircut').style.zIndex = 600;
map.createPane('indexPanepn_homeshop');
map.getPane('indexPanepn_homeshop').style.zIndex = 600;
map.createPane('indexPanepn_kids');
map.getPane('indexPanepn_kids').style.zIndex = 600;
map.createPane('indexPanepn_kpndergarten');
map.getPane('indexPanepn_kpndergarten').style.zIndex = 600;
map.createPane('indexPanepn_library');
map.getPane('indexPanepn_library').style.zIndex = 600;
map.createPane('indexPanepn_lotery');
map.getPane('indexPanepn_lotery').style.zIndex = 600;
map.createPane('indexPanepn_monument');
map.getPane('indexPanepn_monument').style.zIndex = 600;
map.createPane('indexPanepn_pharmacy');
map.getPane('indexPanepn_pharmacy').style.zIndex = 600;
map.createPane('indexPanepn_picnic');
map.getPane('indexPanepn_picnic').style.zIndex = 600;
map.createPane('indexPanepn_pnsurance');
map.getPane('indexPanepn_pnsurance').style.zIndex = 600;
map.createPane('indexPanepn_repair');
map.getPane('indexPanepn_repair').style.zIndex = 600;
map.createPane('indexPanepn_schoolsport');
map.getPane('indexPanepn_schoolsport').style.zIndex = 600;
map.createPane('indexPanepn_serv_org_sector');
map.getPane('indexPanepn_serv_org_sector').style.zIndex = 600;
map.createPane('indexPanepn_serv_org');
map.getPane('indexPanepn_serv_org').style.zIndex = 600;
map.createPane('indexPanepn_shop_build');
map.getPane('indexPanepn_shop_build').style.zIndex = 600;
map.createPane('indexPanepn_shop');
map.getPane('indexPanepn_shop').style.zIndex = 600;
map.createPane('indexPanepn_special');
map.getPane('indexPanepn_special').style.zIndex = 600;
map.createPane('indexPanepn_sport_general');
map.getPane('indexPanepn_sport_general').style.zIndex = 600;


var pn_atm = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_atm',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_atm'
});
var pn_bank = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_bank',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_bank'
});
var pn_beauty = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_beauty',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_beauty'
});
var pn_cafe = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_cafe',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_cafe'
});
var pn_clock = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_clock',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_clock'
});
var pn_clothes = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_clothes',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_clothes'
});
var pn_doctors = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_doctors',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_doctors'
});
var pn_electronics = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_electronics',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_electronics'
});
var pn_emergency = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_emergency',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_emergency'
});
var pn_fap = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_fap',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_fap'
});
var pn_fitness = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_fitness',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_fitness'
});
var pn_grocery = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_grocery',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_grocery'
});
var pn_haircut = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_haircut',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_haircut'
});
var pn_homeshop = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_homeshop',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_homeshop'
});
var pn_kids = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_kids',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_kids'
});
var pn_kpndergarten = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_kpndergarten',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_kpndergarten'
});
var pn_library = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_library',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_library'
});
var pn_lotery = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_lotery',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_lotery'
});
var pn_monument = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_monument',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_monument'
});
var pn_pharmacy = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_pharmacy',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_pharmacy'
});
var pn_picnic = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_picnic',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_picnic'
});
var pn_pnsurance = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_pnsurance',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_pnsurance'
});
var pn_repair = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_repair',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_repair'
});
var pn_schoolsport = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_schoolsport',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_schoolsport'
});
var pn_serv_org_sector = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_serv_org_sector',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_serv_org_sector'
});
var pn_serv_org = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_serv_org',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_serv_org'
});
var pn_shop_build = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_shop_build',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_shop_build'
});
var pn_shop = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_shop',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_shop'
});
var pn_special = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_special',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_special'
});
var pn_sport_general = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:pn_sport_general',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanepn_sport_general'
});