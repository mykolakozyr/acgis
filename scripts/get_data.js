function lu_industrial_popup(feature) {
	var popup = '';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat('Назва: ' + feature.properties.name + '<br>');
    }
    if (feature.properties.type_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Закодований код: ' + feature.properties.type_id + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_farmland_popup(feature) {
	var popup = '';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat('Назва: ' + feature.properties.name + '<br>');
    }
    if (feature.properties.type_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Сільське господарство: ' + feature.properties.type_id + '<br>');
    }
    // console.log(popup)
    return popup;
};

function checkLayer(feature) {
	var longName = feature.id;
	var layerName = longName.split(".")[0];
	var functionName = layerName.concat("_popup");
	var popup = window[functionName](feature);
	return popup;
}