function addLegInfo() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box" checked></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>`;
};

function addLegNatural() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box" checked></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>`;
};

function addLegPopulation() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box" checked></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>`;
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
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">банки (відділення)</td><td><input value="in_bank" type="checkbox" id="in_bank_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">кафе</td><td><input value="in_cafe" type="checkbox" id="in_cafe_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">одяг, взуття</td><td><input value="in_clothes" type="checkbox" id="in_clothes_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">будинки культури (клуби, народні будинки)</td><td><input value="in_community_centre" type="checkbox" id="in_community_centre_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">амбулаторії</td><td><input value="in_doctors" type="checkbox" id="in_doctors_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">гуртожитки</td><td><input value="in_dormitory" type="checkbox" id="in_dormitory_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">побутової електроніки</td><td><input value="in_electronics" type="checkbox" id="in_electronics_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">поминальні будинки</td><td><input value="in_events_venue" type="checkbox" id="in_events_venue_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">ритуальні послуги</td><td><input value="in_funeral_directors" type="checkbox" id="in_funeral_directors_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">меблеві</td><td><input value="in_furniture" type="checkbox" id="in_furniture_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">продовольчі</td><td><input value="in_grocery" type="checkbox" id="in_grocery_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">охорона здоров'я</td><td><input value="in_health" type="checkbox" id="in_health_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">господарчі</td><td><input value="in_homeshop" type="checkbox" id="in_homeshop_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">полілініки</td><td><input value="in_hospital" type="checkbox" id="in_hospital_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">готелі</td><td><input value="in_hotel" type="checkbox" id="in_hotel_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">гіпермаркети</td><td><input value="in_hypermarket" type="checkbox" id="in_hypermarket_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">дитячі</td><td><input value="in_kids" type="checkbox" id="in_kids_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">дитячі садки</td><td><input value="in_kindergarten" type="checkbox" id="in_kindergarten_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">бібліотеки</td><td><input value="in_library" type="checkbox" id="in_library_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">ринки</td><td><input value="in_market" type="checkbox" id="in_market_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">мінімаркети</td><td><input value="in_minimarket" type="checkbox" id="in_minimarket_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">музеї</td><td><input value="in_museum" type="checkbox" id="in_museum_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">православні</td><td><input value="in_orthodox" type="checkbox" id="in_orthodox_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">парки</td><td><input value="in_park" type="checkbox" id="in_park_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">аптеки</td><td><input value="in_pharmacy" type="checkbox" id="in_pharmacy_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">початкова</td><td><input value="in_preschool" type="checkbox" id="in_preschool_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">санаторії</td><td><input value="in_resort" type="checkbox" id="in_resort_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">релігійні та сакральні об'єкти</td><td><input value="in_sacral" type="checkbox" id="in_sacral_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">повна середня</td><td><input value="in_school" type="checkbox" id="in_school_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">середня</td><td><input value="in_school_notfull" type="checkbox" id="in_school_notfull_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">дитячо-юнацькі спортивні школи</td><td><input value="in_schoolsport" type="checkbox" id="in_schoolsport_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">комунальні господарства</td><td><input value="in_serv_org" type="checkbox" id="in_serv_org_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">магазини</td><td><input value="in_shop" type="checkbox" id="in_shop_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">будівельні матеріали</td><td><input value="in_shop_build" type="checkbox" id="in_shop_build_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">спеціалізовані</td><td><input value="in_special" type="checkbox" id="in_special_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">спортивні споруди</td><td><input value="in_sport" type="checkbox" id="in_sport_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">загальні</td><td><input value="in_sport_general" type="checkbox" id="in_sport_general_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">стадіони</td><td><input value="in_stadium" type="checkbox" id="in_stadium_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">банкомати</td><td><input value="pn_atm" type="checkbox" id="pn_atm_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">банки (відділення)</td><td><input value="pn_bank" type="checkbox" id="pn_bank_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">салони краси</td><td><input value="pn_beauty" type="checkbox" id="pn_beauty_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">кафе</td><td><input value="pn_cafe" type="checkbox" id="pn_cafe_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">годинників</td><td><input value="pn_clock" type="checkbox" id="pn_clock_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">одяг, взуття</td><td><input value="pn_clothes" type="checkbox" id="pn_clothes_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">амбулаторії</td><td><input value="pn_doctors" type="checkbox" id="pn_doctors_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">побутової електроніки</td><td><input value="pn_electronics" type="checkbox" id="pn_electronics_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">заклади надання невідкладної медичної допомоги</td><td><input value="pn_emergency" type="checkbox" id="pn_emergency_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">фельдшерско-акушерскі пункти</td><td><input value="pn_fap" type="checkbox" id="pn_fap_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">тренажерні зали</td><td><input value="pn_fitness" type="checkbox" id="pn_fitness_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">продовольчі</td><td><input value="pn_grocery" type="checkbox" id="pn_grocery_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">перукарні </td><td><input value="pn_haircut" type="checkbox" id="pn_haircut_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">господарчі</td><td><input value="pn_homeshop" type="checkbox" id="pn_homeshop_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">дитячі</td><td><input value="pn_kids" type="checkbox" id="pn_kids_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">дитячі садки</td><td><input value="pn_kpndergarten" type="checkbox" id="pn_kpndergarten_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">бібліотеки</td><td><input value="pn_library" type="checkbox" id="pn_library_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">лотереї</td><td><input value="pn_lotery" type="checkbox" id="pn_lotery_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">монументи</td><td><input value="pn_monument" type="checkbox" id="pn_monument_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">аптеки</td><td><input value="pn_pharmacy" type="checkbox" id="pn_pharmacy_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">місця відпочинку</td><td><input value="pn_picnic" type="checkbox" id="pn_picnic_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">страхові компанії</td><td><input value="pn_pnsurance" type="checkbox" id="pn_pnsurance_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">побутовий ремонт</td><td><input value="pn_repair" type="checkbox" id="pn_repair_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">дитячо-юнацькі спортивні школи</td><td><input value="pn_schoolsport" type="checkbox" id="pn_schoolsport_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">комунальні господарства</td><td><input value="pn_serv_org" type="checkbox" id="pn_serv_org_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">філія</td><td><input value="pn_serv_org_sector" type="checkbox" id="pn_serv_org_sector_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">магазини</td><td><input value="pn_shop" type="checkbox" id="pn_shop_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">будівельні матеріали</td><td><input value="pn_shop_build" type="checkbox" id="pn_shop_build_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">спеціалізовані</td><td><input value="pn_special" type="checkbox" id="pn_special_box" checked></td></tr>
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">загальні</td><td><input value="pn_sport_general" type="checkbox" id="pn_sport_general_box" checked></td></tr>`
};

function addLegEcology() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box" checked></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>`;
};

function addLegSecurity() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box" checked></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>`;
};

function addLegAdmin() {
  var table = document.getElementById("table");
  var row = table.insertRow(0);
  row.outerHTML = `
  <tr><td class="index">498</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Лінійні стріми</td><td><input value="lines" type="checkbox" id="lines_box" checked></td></tr>
  <tr><td class="index">499</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Точкові голови</td><td><input value="points" type="checkbox" id="points_box" checked></td></tr>
  <tr><td class="index">500</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">Residential</td><td><input value="residential" type="checkbox" id="residential_box" checked></td></tr>`;
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