var southWest = L.latLng(40.00, 0.00),
northEast = L.latLng(55.00, 50.00),
bounds = L.latLngBounds(southWest, northEast);

map.setView([49.69, 33.63],11);
map.setMaxBounds(bounds);
map.setMinZoom(5);
map.setMaxZoom(18);

var cover = document.getElementById('cover');

// var settlements = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
//   layers: 'otg:lines',
//   format: 'image/png',
//   transparent: true,
//   pane: 'indexPanesettlements'
// }).addTo(map);

// var admin_8 = L.tileLayer.wms('http://192.168.1.45:8081/geoserver/otg/wms', {
//   layers: 'otg:admin_8',
//   format: 'image/png',
//   transparent: true,
//   pane: 'indexPanesettlements'
// }).addTo(map);

panel_clicked = '';

// function checkLegend(panel_clicked) {
//   console.log($(this));

// //   $('#sort tbody tr td:nth-child(4)').each( function(){
// //      //add item to array
// //     var item = ( $(this).html() );
// //     var layerName = (item.split(" ")[1].slice(7, -1));
// //     items.push(layerName);
// //   });
// //   console.log(items);
// //   return items;
// }


$(document).on('click', '#info', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegInfo();
    // points.addTo(map);
    // updatePopUp();
    panel_clicked = this.id;
    console.log(panel_clicked);
    return panel_clicked
  }
}));

$(document).on('click', '#natural', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegNatural();
    // points.addTo(map);
    // updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#population', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegPopulation();
    // points.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#economy', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    addLegEconomy();
    lu_brownfield.addTo(map);
    lu_farmland.addTo(map);
    lu_meadow.addTo(map);
    lu_orchard.addTo(map);
    lu_quarry.addTo(map);
    lu_farmyard.addTo(map);
    lu_industrial.addTo(map);
    lu_forest.addTo(map);
    lu_highway.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#humanitarian', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegHumanitarian();
    // points.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#ecology', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegEcology();
    // points.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#security', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegSecurity();
    // points.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#admin', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    // addLegAdmin();
    // points.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

$(document).on('click', '#development', (function() {
  if (this.id == panel_clicked) {
    // console.log('second click')
  }
  else {
    closeAccordion();
    removeLayers();
    $("#table").empty();
    addLegDevelopment();
    lu_brownfield.addTo(map);
    lu_commercial.addTo(map);
    lu_culture.addTo(map);
    lu_education.addTo(map);
    lu_farmland.addTo(map);
    lu_farmyard.addTo(map);
    lu_forest.addTo(map);
    lu_government.addTo(map);
    lu_grassland.addTo(map);
    lu_health.addTo(map);
    lu_highway.addTo(map);
    lu_historic.addTo(map);
    lu_industrial.addTo(map);
    lu_landfill.addTo(map);
    lu_leisure.addTo(map);
    lu_meadow.addTo(map);
    lu_orchard.addTo(map);
    lu_quarry.addTo(map);
    lu_residential.addTo(map);
    lu_sacral.addTo(map);
    lu_scrub.addTo(map);
    lu_security.addTo(map);
    lu_serv_org.addTo(map);
    lu_tourism.addTo(map);
    lu_water.addTo(map);
    lu_wetland.addTo(map);
    lu_wood.addTo(map);
    lu_cemetery.addTo(map);
    lu_residential_high.addTo(map);
    updatePopUp();
    panel_clicked = this.id;
    return panel_clicked;
  }
}));

var sidebar = L.control.sidebar('sidebar').addTo(map);

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var img_2 = document.getElementById('myImg_2');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img_2.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}

// ACCORDION DATA STRUCTURE
var acc = document.getElementsByClassName("accordion");
var panel = document.getElementsByClassName('panel');

for (var i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {

      var setClasses = !this.classList.contains('active');
      // console.log(setClasses);
        setClass(acc, 'active', 'remove');
        setClass(panel, 'show', 'remove');
        
        if (setClasses) {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
        
        document.body.scrollTop = this.offsetTop;

        // console.log(acc[i]);
    }
}
function setClass(els, className, fnName) {
    for (var i = 0; i < els.length; i++) {
        els[i].classList[fnName](className);
    }
}

// We'll make our own renderer to skip this editor
var specialElementHandlers = {
  '#editor': function(element, renderer){
    return true;
  },
  '.controls': function(element, renderer){
    return true;
  }
};
// document.getElementById('download').addEventListener('click', function() {
//     cover.className = 'active';
//     leafletImage(map, downloadMap);
// });
// function downloadMap(err, canvas) {
//     var imgData = canvas.toDataURL("image/svg+xml", 1.0);
//     var dimensions = map.getSize();
  
//     var pdf = new jsPDF('l', 'pt', 'letter');
//     //pdf.addImage(imgData, 'PNG', 10, 10, dimensions.x * 0.5, dimensions.y * 0.5);
//     pdf.addFont("OpenSans-bold.ttf","OpenSans", "bold");
//     pdf.fromHTML($('div[id=natural]').get(0), 15, 15, {
//       'width': 170, 
//       'elementHandlers': specialElementHandlers
//     });
  
//     cover.className = '';
//     pdf.save("download.pdf");
// };


// READ MORE TEXT
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 200;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "більше";
    var lesstext = "менше";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});


// DRAG&DROP LEGEND
var fixHelperModified = function(e, tr) {
    var $originals = tr.children();
    var $helper = tr.clone();
    $helper.children().each(function(index) {
        $(this).width($originals.eq(index).width())
    });
    return $helper;
},
    updateIndex = function(e, ui) {
        $('td.index', ui.item.parent()).each(function (i) {
            $(this).html(Math.abs((i*10)-601) - 1);
        });
        updateIndexes();
        updatePopUp()
    };

$("#sort tbody").sortable({
    helper: fixHelperModified,
    stop: updateIndex
}).disableSelection();


// INSERT ROW IN TABLE
var temp_row = '<tr><td class="index">799</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">temp_01</td><td><input type="checkbox" value="newsletter"></td></tr>';

function myCreateFunction() {
    var table = document.getElementById("table");
    var row = table.insertRow(0);
    row.outerHTML = '<tr><td class="index">799</td><td class="leg_clip"><img src="imgs/temp.png"></td><td class="leg_layer_name">temp_01</td><td><input type="checkbox" value="newsletter"></td></tr>';
}

// BASEMAPS DRAG&DROP

bingLayer.addTo(map)
layerName = 'bingLayer'

window.onload=function() {
  document.getElementById("basemap").onchange=function() {
    try {
      var layer = window[layerName];
      map.removeLayer(layer);
    }
    catch (err) {
      console.log('catched the first layer');
    }
    var layer = window[this.value];
    layerName = this.value;
    map.addLayer(layer);

    return layerName
  }
}


// REMOVE LAYERS
function removeLayers () {
  var items=[];

  //Iterate all td's in second column
  $('#sort tbody tr td:nth-child(4)').each( function(){
     //add item to array
    var item = ( $(this).html() );
    var layerName = (item.split(" ")[1].slice(7, -1));
    items.push(layerName);
  });

  $.each( items, function(i, item){
      var layer = window[item];
      console.log(item);
      map.removeLayer(layer);
  })
}

$(document).on('click', 'input', function( event ){
  layerClicked = window[event.target.value];
          
  if (map.hasLayer(layerClicked)) {
    map.removeLayer(layerClicked);
  }
  else{
    map.addLayer(layerClicked);
  };
  updatePopUp();
});

// Update indexes while moving layers inside legend
function updateIndexes() {
  var layers=[], indexes=[];
  //Iterate all td's in second column
  $('#sort tbody tr td:nth-child(4)').each( function(){
     //add item to array
    var item = ( $(this).html() );
    var layerName = (item.split(" ")[1].slice(7, -1));
    layers.push(layerName);
  });
  $('#sort tbody tr td:nth-child(1)').each( function(){
     //add item to array
    var item = ( $(this).text() );
    indexes.push(item);
  });
  $.each( layers, function(i, item){
    // updates index to every layername
    var newIndex = indexes[i];
    panestr = 'indexPane';
    map.getPane(panestr.concat(item)).style.zIndex = parseInt(newIndex);
  });
};

var checkButton = 'none';

$('.accordion').click(function() {
  if (checkButton == this.id) {
    console.log('pressing the same button')
  }
  else {
    checkButton = (this.id);
    funcname = checkButton.concat('_func');
    // console.log(funcname);
    window[funcname]();
    return window.checkButton
  }
});

function closeAccordion(){
  var acc = document.getElementsByClassName("accordion");
  var panel = document.getElementsByClassName('panel');

  // console.log(acc);

  for (var i = 0; i < acc.length; i++) {
    setClass(acc, 'active', 'remove');
    setClass(panel, 'show', 'remove');
  }
}

function createPopUp() {
  var items=[];
  var wmsPopUp_full ='';

  //Iterate all td's in second column
  $('#sort tbody tr td:nth-child(4)').each( function(){
     //add item to array
    var item = ( $(this).html() );
    var layerName = (item.split(" ")[1].slice(7, -1));
    if (map.hasLayer(window[layerName])) {
      items.push(layerName);
    }
  });
  $.each( items.reverse(), function(i, item){
    // console.log(item);
    var wmsPopUp_part = 'otg:' + item + ',';
    wmsPopUp_full += wmsPopUp_part
  });
  wmsPopUp = wmsPopUp_full.slice(0,-1);
  // console.log(wmsPopUp);
  return wmsPopUp
}

var WFSLayer = null;

function updatePopUp() {
  console.log(WFSLayer);
  try {
    map.removeLayer(WFSLayer);
  }
  catch (err) {
    console.log('catched first wfs');
  }
  var PopUptypeName = createPopUp();
  console.log(PopUptypeName);

  var owsrootUrl = 'http://192.168.1.45:8081/geoserver/ows';

  var defaultParameters = {
      service : 'WFS',
      version : '2.0',
      request : 'GetFeature',
      typeName : PopUptypeName,
      outputFormat : 'text/javascript',
      format_options : 'callback:getJson',
      SrsName : 'EPSG:4326'
  };

  var parameters = L.Util.extend(defaultParameters);
  var URL = owsrootUrl + L.Util.getParamString(parameters);

  var ajax = $.ajax({
      url : URL,
      dataType : 'jsonp',
      jsonpCallback : 'getJson',
      success : function (response) {
          WFSLayer = L.geoJson(response, {
              style: function (feature) {
                  return {
                      stroke: false,
                      fillColor: 'FFFFFF',
                      fillOpacity: 0
                  };
              },
              onEachFeature: function (feature, layer) {
                  popupOptions = {maxWidth: 300};
                  layer.bindPopup(checkLayer(feature)
                      ,popupOptions);
              }
          });
      }
  })
  .done(() => {
    // this code runs after ajax is resolved
    console.log(WFSLayer);
    WFSLayer.addTo(map);
    return WFSLayer
  });
}