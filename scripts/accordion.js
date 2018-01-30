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
  $("#lu_industrial_box").prop("checked", true);
  lu_industrial.addTo(map);
  $("#points_box").prop("checked", false);
  $("#residential_box").prop("checked", false);
}