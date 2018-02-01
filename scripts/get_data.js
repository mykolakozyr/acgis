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
function checkLayer(feature) {
	var longName = feature.id;
	var layerName = longName.split(".")[0];
	var functionName = layerName.concat("_popup");
	var popup = window[functionName](feature);
	return popup;
}