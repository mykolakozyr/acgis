function addLegInfo() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegNatural() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegPopulation() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegEconomy() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Виробничі території</td><td><input value="lu_industrial" type="checkbox" id="lu_industrial_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під С/Г підприємствами</td><td><input value="lu_farmyard" type="checkbox" id="lu_farmyard_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Кар'єри</td><td><input value="lu_quarry" type="checkbox" id="lu_quarry_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сади</td><td><input value="lu_orchard" type="checkbox" id="lu_orchard_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сінокоси</td><td><input value="lu_meadow" type="checkbox" id="lu_meadow_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сільськогосподарські угіддя</td><td><input value="lu_farmland" type="checkbox" id="lu_farmland_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під С/Г підприємствами (не використовуються)</td><td><input value="lu_brownfield" type="checkbox" id="lu_brownfield_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під транспортною інфраструктурою</td><td><input value="lu_highway" type="checkbox" id="lu_highway_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Багаторічні насадження</td><td><input value="lu_forest" type="checkbox" id="lu_forest_box" checked></td></tr>
  `;
};

function addLegHumanitarian() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegEcology() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegSecurity() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegAdmin() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box"></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box"></td></tr>`;
};

function addLegDevelopment() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під сг підприємствами (не використовуються)</td><td><input value="lu_brownfield" type="checkbox" id="lu_brownfield_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі комеційного призначення</td><td><input value="lu_commercial" type="checkbox" id="lu_commercial_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами культури</td><td><input value="lu_culture" type="checkbox" id="lu_culture_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами освіти</td><td><input value="lu_education" type="checkbox" id="lu_education_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сільськогосподарські землі</td><td><input value="lu_farmland" type="checkbox" id="lu_farmland_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під сг підприємствами</td><td><input value="lu_farmyard" type="checkbox" id="lu_farmyard_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Багаторічні насадження</td><td><input value="lu_forest" type="checkbox" id="lu_forest_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під адміністративними будівлями</td><td><input value="lu_government" type="checkbox" id="lu_government_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лучна рослинність</td><td><input value="lu_grassland" type="checkbox" id="lu_grassland_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами охорони здоров'я</td><td><input value="lu_health" type="checkbox" id="lu_health_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під транспортною інфраструктурою</td><td><input value="lu_highway" type="checkbox" id="lu_highway_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі історико-культурного значення</td><td><input value="lu_historic" type="checkbox" id="lu_historic_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Виробничі території</td><td><input value="lu_industrial" type="checkbox" id="lu_industrial_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сміттєзвалища</td><td><input value="lu_landfill" type="checkbox" id="lu_landfill_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі рекреаційного призначення</td><td><input value="lu_leisure" type="checkbox" id="lu_leisure_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сінокоси</td><td><input value="lu_meadow" type="checkbox" id="lu_meadow_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сади</td><td><input value="lu_orchard" type="checkbox" id="lu_orchard_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Кар'єри</td><td><input value="lu_quarry" type="checkbox" id="lu_quarry_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Територія під житловою забудовою</td><td><input value="lu_residential" type="checkbox" id="lu_residential_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами сакрального значення</td><td><input value="lu_sacral" type="checkbox" id="lu_sacral_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Чагарники</td><td><input value="lu_scrub" type="checkbox" id="lu_scrub_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами безпеки</td><td><input value="lu_security" type="checkbox" id="lu_security_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами обслуговування населення</td><td><input value="lu_serv_org" type="checkbox" id="lu_serv_org_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі туристичного призначення</td><td><input value="lu_tourism" type="checkbox" id="lu_tourism_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Водні об'єкти</td><td><input value="lu_water" type="checkbox" id="lu_water_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Болота</td><td><input value="lu_wetland" type="checkbox" id="lu_wetland_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лісовий фонд</td><td><input value="lu_wood" type="checkbox" id="lu_wood_box" checked></td></tr>
  `;
};

    // lu_brownfield.addTo(map);
    // lu_commercial.addTo(map);
    // lu_culture.addTo(map);
    // lu_education.addTo(map);
    // lu_farmland.addTo(map);
    // lu_farmyard.addTo(map);
    // lu_forest.addTo(map);
    // lu_government.addTo(map);
    // lu_grassland.addTo(map);
    // lu_health.addTo(map);
    // lu_highway.addTo(map);
    // lu_historic.addTo(map);
    // lu_industrial.addTo(map);
    // lu_landfill.addTo(map);
    // lu_leisure.addTo(map);
    // lu_meadow.addTo(map);
    // lu_orchard.addTo(map);
    // lu_other.addTo(map);
    // lu_quarry.addTo(map);
    // lu_residential.addTo(map);
    // lu_sacral.addTo(map);
    // lu_scrub.addTo(map);
    // lu_security.addTo(map);
    // lu_serv_org.addTo(map);
    // lu_tourism.addTo(map);
    // lu_water.addTo(map);
    // lu_wetland.addTo(map);
    // lu_wood.addTo(map);
    // lu_cemetery.addTo(map);
    // lu_residential_high.addTo(map);
