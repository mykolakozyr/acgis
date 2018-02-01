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
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під сг підприємствами (не використовуються)</td><td><input value="brownfield" type="checkbox" id="brownfield_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі комеційного призначення</td><td><input value="commercial" type="checkbox" id="commercial_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами культури</td><td><input value="culture" type="checkbox" id="culture_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами освіти</td><td><input value="education" type="checkbox" id="education_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сільськогосподарські землі</td><td><input value="farmland" type="checkbox" id="farmland_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під сг підприємствами</td><td><input value="farmyard" type="checkbox" id="farmyard_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Багаторічні насадження</td><td><input value="forest" type="checkbox" id="forest_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">адміністративними будівлями</td><td><input value="government" type="checkbox" id="government_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лучна рослинність</td><td><input value="grassland" type="checkbox" id="grassland_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами охорони здоров'я</td><td><input value="health" type="checkbox" id="health_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під транспортною інфраструктурою</td><td><input value="highway" type="checkbox" id="highway_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі історико-культурного значення</td><td><input value="historic" type="checkbox" id="historic_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Виробничі території</td><td><input value="industrial" type="checkbox" id="industrial_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сміттєзвалища</td><td><input value="landfill" type="checkbox" id="landfill_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">рекреаційного призначення</td><td><input value="leisure" type="checkbox" id="leisure_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сінокоси</td><td><input value="meadow" type="checkbox" id="meadow_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name"></td><td><input value="military" type="checkbox" id="military_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Сади</td><td><input value="orchard" type="checkbox" id="orchard_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name"></td><td><input value="other" type="checkbox" id="other_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Кар'єри</td><td><input value="quarry" type="checkbox" id="quarry_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Територія під житловою забудовою</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами сакрального значення</td><td><input value="sacral" type="checkbox" id="sacral_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Чагарники</td><td><input value="scrub" type="checkbox" id="scrub_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами безпеки</td><td><input value="security" type="checkbox" id="security_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі під об'єктами обслуговування населення</td><td><input value="serv_org" type="checkbox" id="serv_org_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Землі туристичного призначення</td><td><input value="tourism" type="checkbox" id="tourism_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Водні об'єкти</td><td><input value="water" type="checkbox" id="water_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Болота</td><td><input value="wetland" type="checkbox" id="wetland_box" checked></td></tr>
<tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лісовий фонд</td><td><input value="wood" type="checkbox" id="wood_box" checked></td></tr>
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
