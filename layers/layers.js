ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([282184.862326, 492722.680998, 326358.742496, 522221.848434]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatelliteHybrid_2 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_LimitaUAT_eTerra_3 = new ol.format.GeoJSON();
var features_LimitaUAT_eTerra_3 = format_LimitaUAT_eTerra_3.readFeatures(json_LimitaUAT_eTerra_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_LimitaUAT_eTerra_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaUAT_eTerra_3.addFeatures(features_LimitaUAT_eTerra_3);
var lyr_LimitaUAT_eTerra_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaUAT_eTerra_3, 
                style: style_LimitaUAT_eTerra_3,
                popuplayertitle: 'Limita UAT_eTerra',
                interactive: true,
                title: '<img src="styles/legend/LimitaUAT_eTerra_3.png" /> Limita UAT_eTerra'
            });
var format_LimitaIntravilan_4 = new ol.format.GeoJSON();
var features_LimitaIntravilan_4 = format_LimitaIntravilan_4.readFeatures(json_LimitaIntravilan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_LimitaIntravilan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitaIntravilan_4.addFeatures(features_LimitaIntravilan_4);
var lyr_LimitaIntravilan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitaIntravilan_4, 
                style: style_LimitaIntravilan_4,
                popuplayertitle: 'Limita Intravilan',
                interactive: true,
                title: '<img src="styles/legend/LimitaIntravilan_4.png" /> Limita Intravilan'
            });
var format_SVAliniamenteinfrastructura_5 = new ol.format.GeoJSON();
var features_SVAliniamenteinfrastructura_5 = format_SVAliniamenteinfrastructura_5.readFeatures(json_SVAliniamenteinfrastructura_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVAliniamenteinfrastructura_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVAliniamenteinfrastructura_5.addFeatures(features_SVAliniamenteinfrastructura_5);
var lyr_SVAliniamenteinfrastructura_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVAliniamenteinfrastructura_5, 
                style: style_SVAliniamenteinfrastructura_5,
                popuplayertitle: 'SV-Aliniamente infrastructura',
                interactive: true,
                title: '<img src="styles/legend/SVAliniamenteinfrastructura_5.png" /> SV-Aliniamente infrastructura'
            });
var format_SVParcurisigradini_6 = new ol.format.GeoJSON();
var features_SVParcurisigradini_6 = format_SVParcurisigradini_6.readFeatures(json_SVParcurisigradini_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_SVParcurisigradini_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SVParcurisigradini_6.addFeatures(features_SVParcurisigradini_6);
var lyr_SVParcurisigradini_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SVParcurisigradini_6, 
                style: style_SVParcurisigradini_6,
                popuplayertitle: 'SV-Parcuri si gradini',
                interactive: true,
                title: '<img src="styles/legend/SVParcurisigradini_6.png" /> SV-Parcuri si gradini'
            });
var format_CopaciZam_7 = new ol.format.GeoJSON();
var features_CopaciZam_7 = format_CopaciZam_7.readFeatures(json_CopaciZam_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciZam_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciZam_7.addFeatures(features_CopaciZam_7);
var lyr_CopaciZam_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciZam_7, 
                style: style_CopaciZam_7,
                popuplayertitle: 'Copaci Zam',
                interactive: true,
                title: '<img src="styles/legend/CopaciZam_7.png" /> Copaci Zam'
            });
var format_CopaciSalciva_8 = new ol.format.GeoJSON();
var features_CopaciSalciva_8 = format_CopaciSalciva_8.readFeatures(json_CopaciSalciva_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciSalciva_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciSalciva_8.addFeatures(features_CopaciSalciva_8);
var lyr_CopaciSalciva_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciSalciva_8, 
                style: style_CopaciSalciva_8,
                popuplayertitle: 'Copaci Salciva',
                interactive: true,
                title: '<img src="styles/legend/CopaciSalciva_8.png" /> Copaci Salciva'
            });
var format_CopaciPojoga_9 = new ol.format.GeoJSON();
var features_CopaciPojoga_9 = format_CopaciPojoga_9.readFeatures(json_CopaciPojoga_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_CopaciPojoga_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CopaciPojoga_9.addFeatures(features_CopaciPojoga_9);
var lyr_CopaciPojoga_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CopaciPojoga_9, 
                style: style_CopaciPojoga_9,
                popuplayertitle: 'Copaci Pojoga',
                interactive: true,
                title: '<img src="styles/legend/CopaciPojoga_9.png" /> Copaci Pojoga'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_GoogleSatelliteHybrid_2.setVisible(true);lyr_LimitaUAT_eTerra_3.setVisible(true);lyr_LimitaIntravilan_4.setVisible(true);lyr_SVAliniamenteinfrastructura_5.setVisible(true);lyr_SVParcurisigradini_6.setVisible(true);lyr_CopaciZam_7.setVisible(true);lyr_CopaciSalciva_8.setVisible(true);lyr_CopaciPojoga_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleMaps_1,lyr_GoogleSatelliteHybrid_2,lyr_LimitaUAT_eTerra_3,lyr_LimitaIntravilan_4,lyr_SVAliniamenteinfrastructura_5,lyr_SVParcurisigradini_6,lyr_CopaciZam_7,lyr_CopaciSalciva_8,lyr_CopaciPojoga_9];
lyr_LimitaUAT_eTerra_3.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[ha]': 'Supr.[ha]', 'UAT': 'UAT', });
lyr_LimitaIntravilan_4.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[ha]': 'Supr.[ha]', 'Localitate': 'Localitate', });
lyr_SVAliniamenteinfrastructura_5.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_SVParcurisigradini_6.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'Supr.[mp]': 'Supr.[mp]', 'Localitate': 'Localitate', });
lyr_CopaciZam_7.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciSalciva_8.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_CopaciPojoga_9.set('fieldAliases', {'Nr. ID': 'Nr. ID', 'Specie': 'Specie', 'Diam. [cm]': 'Diam. [cm]', 'Inaltim[m]': 'Inaltim[m]', 'Stare': 'Stare', 'X [m]': 'X [m]', 'Y [m]': 'Y [m]', 'Z [m]': 'Z [m]', });
lyr_LimitaUAT_eTerra_3.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[ha]': 'TextEdit', 'UAT': 'TextEdit', });
lyr_LimitaIntravilan_4.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[ha]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVAliniamenteinfrastructura_5.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_SVParcurisigradini_6.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'Supr.[mp]': 'TextEdit', 'Localitate': 'TextEdit', });
lyr_CopaciZam_7.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciSalciva_8.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_CopaciPojoga_9.set('fieldImages', {'Nr. ID': 'TextEdit', 'Specie': 'TextEdit', 'Diam. [cm]': 'TextEdit', 'Inaltim[m]': 'TextEdit', 'Stare': 'TextEdit', 'X [m]': 'TextEdit', 'Y [m]': 'TextEdit', 'Z [m]': 'TextEdit', });
lyr_LimitaUAT_eTerra_3.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[ha]': 'inline label - visible with data', 'UAT': 'inline label - visible with data', });
lyr_LimitaIntravilan_4.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[ha]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVAliniamenteinfrastructura_5.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_SVParcurisigradini_6.set('fieldLabels', {'fid': 'inline label - visible with data', 'layer': 'inline label - visible with data', 'Supr.[mp]': 'inline label - visible with data', 'Localitate': 'inline label - visible with data', });
lyr_CopaciZam_7.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciSalciva_8.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciPojoga_9.set('fieldLabels', {'Nr. ID': 'inline label - visible with data', 'Specie': 'inline label - visible with data', 'Diam. [cm]': 'inline label - visible with data', 'Inaltim[m]': 'inline label - visible with data', 'Stare': 'inline label - visible with data', 'X [m]': 'inline label - visible with data', 'Y [m]': 'inline label - visible with data', 'Z [m]': 'inline label - visible with data', });
lyr_CopaciPojoga_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});