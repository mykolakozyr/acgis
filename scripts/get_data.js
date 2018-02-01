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
	// console.log(feature);
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
	var popup = 'Сінокоси<br>';
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

function lu_forest_popup(feature) {
	var popup = "Багаторічні насадження<br>";
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

function lu_highway_popup(feature) {
	var popup = "Землі під транспортною інфраструктурою<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_commercial_popup(feature) {
    var popup = "Землі комеційного призначення<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_culture_popup(feature) {
    var popup = "Землі під об'єктами культури<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_education_popup(feature) {
    var popup = "Землі під об'єктами освіти<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_government_popup(feature) {
    var popup = "Землі під адміністративними будівлями<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_grassland_popup(feature) {
    var popup = "Лучна рослинність<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_health_popup(feature) {
    var popup = "Землі під об'єктами охорони здоров'я<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_historic_popup(feature) {
    var popup = "Землі історико-культурного значення<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_landfill_popup(feature) {
    var popup = "Сміттєзвалище<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_leisure_popup(feature) {
    var popup = "Землі рекреаційного призначення<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_residential_popup(feature) {
    var popup = "Територія під житловою забудовою<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_sacral_popup(feature) {
    var popup = "Землі під об'єктами сакрального значення<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_residential_high_popup(feature) {
    var popup = "Територія багатоповерхової забудови<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_scrub_popup(feature) {
    var popup = "Чагарники<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_security_popup(feature) {
    var popup = "Землі під об'єктами безпеки<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_serv_org_popup(feature) {
    var popup = "Землі під об'єктами обслуговування населення<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_tourism_popup(feature) {
    var popup = "Землі туристичного призначення<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_water_popup(feature) {
    var popup = "Водні об'єкти<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_wetland_popup(feature) {
    var popup = "Болота<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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
function lu_wood_popup(feature) {
    var popup = "Лісовий фонд<br>";
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
        var popup = popup.concat('Площа ділянки за документацією: ' + feature.properties.area_doc + '<br>');
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

function lu_industrial_popup(feature) {
    var popup = 'Виробнича територія<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    // console.log(popup)
    return popup;
};
function pn_atm_popup(feature) {
    var popup = 'банкомати<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_bank_popup(feature) {
    var popup = 'банки (відділення)<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_beauty_popup(feature) {
    var popup = 'салони краси<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_cafe_popup(feature) {
    var popup = 'кафе<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_clock_popup(feature) {
    var popup = 'годинників<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_clothes_popup(feature) {
    var popup = 'одяг, взуття<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_doctors_popup(feature) {
    var popup = 'амбулаторії<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_electronics_popup(feature) {
    var popup = 'побутової електроніки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_emergency_popup(feature) {
    var popup = 'заклади надання невідкладної медичної допомоги<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_fap_popup(feature) {
    var popup = 'фельдшерско-акушерскі пункти<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_fitness_popup(feature) {
    var popup = 'тренажерні зали<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_grocery_popup(feature) {
    var popup = 'продовольчі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_haircut_popup(feature) {
    var popup = 'перукарні <br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_homeshop_popup(feature) {
    var popup = 'господарчі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_kids_popup(feature) {
    var popup = 'дитячі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_kpndergarten_popup(feature) {
    var popup = 'дитячі садки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_library_popup(feature) {
    var popup = 'бібліотеки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_lotery_popup(feature) {
    var popup = 'лотереї<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_monument_popup(feature) {
    var popup = 'монументи<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_pharmacy_popup(feature) {
    var popup = 'аптеки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_picnic_popup(feature) {
    var popup = 'місця відпочинку<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_pnsurance_popup(feature) {
    var popup = 'страхові компанії<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_repair_popup(feature) {
    var popup = 'побутовий ремонт<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_schoolsport_popup(feature) {
    var popup = 'дитячо-юнацькі спортивні школи<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_serv_org_popup(feature) {
    var popup = 'комунальні господарства<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_serv_org_sector_popup(feature) {
    var popup = 'філія<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_shop_popup(feature) {
    var popup = 'магазини<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_shop_build_popup(feature) {
    var popup = 'будівельні матеріали<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_special_popup(feature) {
    var popup = 'спеціалізовані<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function pn_sport_general_popup(feature) {
    var popup = 'загальні<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};

function in_bank_popup(feature) {
    var popup = 'банки (відділення)<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_cafe_popup(feature) {
    var popup = 'кафе<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_clothes_popup(feature) {
    var popup = 'одяг, взуття<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_community_centre_popup(feature) {
    var popup = 'будинки культури (клуби, народні будинки)<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_doctors_popup(feature) {
    var popup = 'амбулаторії<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_dormitory_popup(feature) {
    var popup = 'гуртожитки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_electronics_popup(feature) {
    var popup = 'побутової електроніки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_events_venue_popup(feature) {
    var popup = 'поминальні будинки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_funeral_directors_popup(feature) {
    var popup = 'ритуальні послуги<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_furniture_popup(feature) {
    var popup = 'меблеві<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_grocery_popup(feature) {
    var popup = 'продовольчі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_health_popup(feature) {
    var popup = "охорона здоров'я<br>";
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_homeshop_popup(feature) {
    var popup = 'господарчі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_hospital_popup(feature) {
    var popup = 'полілініки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_hotel_popup(feature) {
    var popup = 'готелі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_hypermarket_popup(feature) {
    var popup = 'гіпермаркети<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_kids_popup(feature) {
    var popup = 'дитячі<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_kindergarten_popup(feature) {
    var popup = 'дитячі садки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_library_popup(feature) {
    var popup = 'бібліотеки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_market_popup(feature) {
    var popup = 'ринки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_minimarket_popup(feature) {
    var popup = 'мінімаркети<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_museum_popup(feature) {
    var popup = 'музеї<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_orthodox_popup(feature) {
    var popup = 'православні<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_park_popup(feature) {
    var popup = 'парки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_pharmacy_popup(feature) {
    var popup = 'аптеки<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_preschool_popup(feature) {
    var popup = 'початкова<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_resort_popup(feature) {
    var popup = 'санаторії<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_sacral_popup(feature) {
    var popup = "релігійні та сакральні об'єкти<br>";
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_school_popup(feature) {
    var popup = 'повна середня<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_school_notfull_popup(feature) {
    var popup = 'середня<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_schoolsport_popup(feature) {
    var popup = 'дитячо-юнацькі спортивні школи<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_serv_org_popup(feature) {
    var popup = 'комунальні господарства<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_shop_popup(feature) {
    var popup = 'магазини<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_shop_build_popup(feature) {
    var popup = 'будівельні матеріали<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_special_popup(feature) {
    var popup = 'спеціалізовані<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_sport_popup(feature) {
    var popup = 'спортивні споруди<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_sport_general_popup(feature) {
    var popup = 'загальні<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};
function in_stadium_popup(feature) {
    var popup = 'стадіони<br>';
    if (feature.properties.name !== null) {
        // console.log('name: ' + feature.properties.name);
        var popup = popup.concat(feature.properties.name + '<br>');
    }
    return popup;
};

function checkLayer(feature) {
	var longName = feature.id;
	var layerName = longName.split(".")[0];
	var functionName = layerName.concat("_popup");
	var popup = window[functionName](feature);
	return popup;
}