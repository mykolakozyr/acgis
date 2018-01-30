// CLICK ON BUTTONS
function info_1_func(){
  removeLayers()
  $("#lines_box").prop("checked", true);
  lines.addTo(map);
  $("#points_box").prop("checked", false);
  $("#residential_box").prop("checked", false);
}

// CLICK ON BUTTONS
function economy_1_func(){
  removeLayers()
  $("#lu_brownfield_box").prop("checked", false);
  $("#lu_farmland_box").prop("checked", false);
  $("#lu_meadow_box").prop("checked", false);
  $("#lu_orchard_box").prop("checked", false);
  $("#lu_quarry_box").prop("checked", true);
  lu_quarry.addTo(map);
  $("#lu_farmyard_box").prop("checked", false);
  $("#lu_industrial_box").prop("checked", true);
  lu_industrial.addTo(map);
}

function economy_2_func(){
  removeLayers()
  $("#lu_brownfield_box").prop("checked", true);
  lu_brownfield.addTo(map);
  $("#lu_farmland_box").prop("checked", true);
  lu_farmland.addTo(map);
  $("#lu_meadow_box").prop("checked", true);
  lu_meadow.addTo(map);
  $("#lu_orchard_box").prop("checked", true);
  lu_orchard.addTo(map);
  $("#lu_quarry_box").prop("checked", false);
  $("#lu_farmyard_box").prop("checked", true);
  lu_farmyard.addTo(map);
  $("#lu_industrial_box").prop("checked", false);
}



    // lu_brownfield.addTo(map);
    // lu_farmland.addTo(map);
    // lu_meadow.addTo(map);
    // lu_orchard.addTo(map);
    // lu_quarry.addTo(map);
    // lu_farmyard.addTo(map);
    // lu_industrial.addTo(map);