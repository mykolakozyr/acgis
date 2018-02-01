map.createPane('indexPanelu_brownfield');
map.getPane('indexPanelu_brownfield').style.zIndex = 600;
map.createPane('indexPanelu_commercial');
map.getPane('indexPanelu_commercial').style.zIndex = 600;
map.createPane('indexPanelu_culture');
map.getPane('indexPanelu_culture').style.zIndex = 600;
map.createPane('indexPanelu_education');
map.getPane('indexPanelu_education').style.zIndex = 600;
map.createPane('indexPanelu_farmland');
map.getPane('indexPanelu_farmland').style.zIndex = 600;
map.createPane('indexPanelu_farmyard');
map.getPane('indexPanelu_farmyard').style.zIndex = 600;
map.createPane('indexPanelu_forest');
map.getPane('indexPanelu_forest').style.zIndex = 600;
map.createPane('indexPanelu_government');
map.getPane('indexPanelu_government').style.zIndex = 600;
map.createPane('indexPanelu_grassland');
map.getPane('indexPanelu_grassland').style.zIndex = 600;
map.createPane('indexPanelu_health');
map.getPane('indexPanelu_health').style.zIndex = 600;
map.createPane('indexPanelu_highway');
map.getPane('indexPanelu_highway').style.zIndex = 600;
map.createPane('indexPanelu_historic');
map.getPane('indexPanelu_historic').style.zIndex = 600;
map.createPane('indexPanelu_industrial');
map.getPane('indexPanelu_industrial').style.zIndex = 600;
map.createPane('indexPanelu_landfill');
map.getPane('indexPanelu_landfill').style.zIndex = 600;
map.createPane('indexPanelu_leisure');
map.getPane('indexPanelu_leisure').style.zIndex = 600;
map.createPane('indexPanelu_meadow');
map.getPane('indexPanelu_meadow').style.zIndex = 600;
map.createPane('indexPanelu_military');
map.getPane('indexPanelu_military').style.zIndex = 600;
map.createPane('indexPanelu_orchard');
map.getPane('indexPanelu_orchard').style.zIndex = 600;
map.createPane('indexPanelu_other');
map.getPane('indexPanelu_other').style.zIndex = 600;
map.createPane('indexPanelu_quarry');
map.getPane('indexPanelu_quarry').style.zIndex = 600;
map.createPane('indexPanelu_residential');
map.getPane('indexPanelu_residential').style.zIndex = 600;
map.createPane('indexPanelu_sacral');
map.getPane('indexPanelu_sacral').style.zIndex = 600;
map.createPane('indexPanelu_scrub');
map.getPane('indexPanelu_scrub').style.zIndex = 600;
map.createPane('indexPanelu_security');
map.getPane('indexPanelu_security').style.zIndex = 600;
map.createPane('indexPanelu_serv_org');
map.getPane('indexPanelu_serv_org').style.zIndex = 600;
map.createPane('indexPanelu_tourism');
map.getPane('indexPanelu_tourism').style.zIndex = 600;
map.createPane('indexPanelu_water');
map.getPane('indexPanelu_water').style.zIndex = 600;
map.createPane('indexPanelu_wetland');
map.getPane('indexPanelu_wetland').style.zIndex = 600;
map.createPane('indexPanelu_wood');
map.getPane('indexPanelu_wood').style.zIndex = 600;
map.createPane('indexPanelu_cemetery');
map.getPane('indexPanelu_cemetery').style.zIndex = 600;
map.createPane('indexPanelu_residential_high');
map.getPane('indexPanelu_residential_high').style.zIndex = 630;
map.createPane('indexPanesettlements');
map.getPane('indexPanesettlements').style.zIndex = 500;
map.createPane('indexPaneadmin_8');
map.getPane('indexPaneadmin_8').style.zIndex = 450;
//Industrial
var lu_industrial = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_industrial',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_industrial'
});
var lu_quarry = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_quarry',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_quarry'
});

// Agriculture
var lu_farmland = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_farmland',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_farmland'
});
var lu_farmyard = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_farmyard',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_farmyard'
});
var lu_meadow = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_meadow',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_meadow'
});
var lu_orchard = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_orchard',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_orchard'
});
var lu_brownfield = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_brownfield',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_brownfield'
});
//Promysly
var lu_forest = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_forest',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_forest'
});
//Highway
var lu_highway = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_highway',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_highway'
});
//Education
var lu_education = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_education',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_education'
});
//Health
var lu_health = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_health',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_health'
});
//Sport
var lu_sport = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_sport',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_sport'
});
//Culture
var lu_culture = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_culture',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_culture'
});
//Sacral
var lu_sacral = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_sacral',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_sacral'
});
var lu_cemetery = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_cemetery',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_cemetery'
});
//residential
var lu_residential_high = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_residential_high',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_residential_high'
});
var lu_residential = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_residential',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_residential'
});
//serv_org
var lu_serv_org = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_serv_org',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_serv_org'
});
//historic
var lu_historic = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_historic',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_historic'
});
//leisure
var lu_leisure = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_leisure',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_leisure'
});
//tourism
var lu_tourism = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_tourism',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_tourism'
});
//commercial
var lu_commercial = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_commercial',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_commercial'
});
//landfill
var lu_landfill = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_landfill',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_landfill'
});
//security
var lu_security = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_security',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_security'
});
//government
var lu_government = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_government',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_government'
});
var lu_grassland = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_grassland',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_grassland'
});
var lu_scrub = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_scrub',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_scrub'
});
var lu_water = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_water',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_water'
});
var lu_wetland = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_wetland',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_wetland'
});
var lu_wood = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
  layers: 'otg:lu_wood',
  format: 'image/png',
  transparent: true,
  pane: 'indexPanelu_wood'
});