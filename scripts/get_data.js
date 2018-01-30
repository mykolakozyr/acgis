// LANDUSE & NATURAL
function lu_prop_type(feature, popup) {
	if (feature.properties.prop_type == 'priv') {
		var popup = popup.concat('Приватна власність<br>');
		return popup;
	}
	if (feature.properties.prop_type == 'gov') {
		var popup = popup.concat('Державна власність<br>');
		return popup;
	}
	if (feature.properties.prop_type == 'comm') {
		var popup = popup.concat('Комунальна власність<br>');
		return popup;
	}
	if (feature.properties.prop_type == 'coll') {
		var popup = popup.concat('Колективна власність<br>');
		return popup;
	}
	return popup
}
function lu_ind_subtype(feature, popup) {
	if (feature.properties.subtype_id == '16') {
		var popup = popup.concat('Пилорама<br>');
		return popup;
	}
	return popup
}
function lu_agro_subtype(feature, popup) {
	if (feature.properties.subtype_id == '3') {
		var popup = popup.concat('Особисті селянські угіддя<br>');
		return popup;
	}
	return popup
}

function lu_industrial_popup(feature) {
	var popup = 'Виробнича територія<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.subtype_id !== null) {
    	console.log(feature.properties.subtype_id);
        // console.log('name: ' + feature.properties.name);
        var popup = lu_ind_subtype(feature, popup);
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_farmland_popup(feature) {
	var popup = 'Сільськогосподарські угіддя<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.subtype_id !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = lu_agro_subtype(feature, popup)
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_farmyard_popup(feature) {
	var popup = 'Земля під сільськогосподарським підприємством<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_meadow_popup(feature) {
	var popup = 'Сінокос<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_orchard_popup(feature) {
	var popup = 'Сад<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_brownfield_popup(feature) {
	var popup = 'Земля під сільськогосподарським підприємством (не використовується)<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
    }
    // console.log(popup)
    return popup;
};
function lu_quarry_popup(feature) {
	var popup = "Кар'єр<br>";
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    if (feature.properties.cad_id !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Кадастровий номер: ' + feature.properties.cad_id + '<br>');
    }
    if (feature.properties.prop_type !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = lu_prop_type(feature, popup);
    }
    if (feature.properties.area_doc !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Площа кадастрової одиниці: ' + feature.properties.area_doc + '<br>');
    }
    if (feature.properties.basis !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Резервна територія<br>');
    }
    if (feature.properties.owner !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Власник: ' + feature.properties.owner + '<br>');
    }
    if (feature.properties.user !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Користувач: ' + feature.properties.user + '<br>');
    }
    if (feature.properties.lease_end !== null) {
        // console.log('type_id: ' + feature.properties.type_id);
        var popup = popup.concat('Дата завершення дії договору: ' + feature.properties.lease_end + '<br>');
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