var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'Open Street Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RambuSungai_1 = new ol.format.GeoJSON();
var features_RambuSungai_1 = format_RambuSungai_1.readFeatures(json_RambuSungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RambuSungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RambuSungai_1.addFeatures(features_RambuSungai_1);
var lyr_RambuSungai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RambuSungai_1, 
                style: style_RambuSungai_1,
                popuplayertitle: "Rambu Sungai",
                interactive: true,
                title: '<img src="styles/legend/RambuSungai_1.png" /> Rambu Sungai'
            });
var format_SBNPPenyeberangan_2 = new ol.format.GeoJSON();
var features_SBNPPenyeberangan_2 = format_SBNPPenyeberangan_2.readFeatures(json_SBNPPenyeberangan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBNPPenyeberangan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBNPPenyeberangan_2.addFeatures(features_SBNPPenyeberangan_2);
var lyr_SBNPPenyeberangan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBNPPenyeberangan_2, 
                style: style_SBNPPenyeberangan_2,
                popuplayertitle: "SBNP Penyeberangan",
                interactive: true,
                title: '<img src="styles/legend/SBNPPenyeberangan_2.png" /> SBNP Penyeberangan'
            });
var format_HalteSungai_3 = new ol.format.GeoJSON();
var features_HalteSungai_3 = format_HalteSungai_3.readFeatures(json_HalteSungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HalteSungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HalteSungai_3.addFeatures(features_HalteSungai_3);
var lyr_HalteSungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HalteSungai_3, 
                style: style_HalteSungai_3,
                popuplayertitle: "Halte Sungai",
                interactive: true,
                title: '<img src="styles/legend/HalteSungai_3.png" /> Halte Sungai'
            });
var format_AlurSiak_4 = new ol.format.GeoJSON();
var features_AlurSiak_4 = format_AlurSiak_4.readFeatures(json_AlurSiak_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurSiak_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurSiak_4.addFeatures(features_AlurSiak_4);
var lyr_AlurSiak_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurSiak_4, 
                style: style_AlurSiak_4,
                popuplayertitle: "Alur Siak",
                interactive: true,
                title: '<img src="styles/legend/AlurSiak_4.png" /> Alur Siak'
            });
var format_AlurBerau_5 = new ol.format.GeoJSON();
var features_AlurBerau_5 = format_AlurBerau_5.readFeatures(json_AlurBerau_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurBerau_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurBerau_5.addFeatures(features_AlurBerau_5);
var lyr_AlurBerau_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurBerau_5, 
                style: style_AlurBerau_5,
                popuplayertitle: "Alur Berau",
                interactive: true,
                title: '<img src="styles/legend/AlurBerau_5.png" /> Alur Berau'
            });
var format_AlurMempawah_6 = new ol.format.GeoJSON();
var features_AlurMempawah_6 = format_AlurMempawah_6.readFeatures(json_AlurMempawah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurMempawah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurMempawah_6.addFeatures(features_AlurMempawah_6);
var lyr_AlurMempawah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurMempawah_6, 
                style: style_AlurMempawah_6,
                popuplayertitle: "Alur Mempawah",
                interactive: true,
                title: '<img src="styles/legend/AlurMempawah_6.png" /> Alur Mempawah'
            });
var format_AlurSambas_7 = new ol.format.GeoJSON();
var features_AlurSambas_7 = format_AlurSambas_7.readFeatures(json_AlurSambas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurSambas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurSambas_7.addFeatures(features_AlurSambas_7);
var lyr_AlurSambas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurSambas_7, 
                style: style_AlurSambas_7,
                popuplayertitle: "Alur Sambas",
                interactive: true,
                title: '<img src="styles/legend/AlurSambas_7.png" /> Alur Sambas'
            });
var format_AlurRokan_8 = new ol.format.GeoJSON();
var features_AlurRokan_8 = format_AlurRokan_8.readFeatures(json_AlurRokan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurRokan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurRokan_8.addFeatures(features_AlurRokan_8);
var lyr_AlurRokan_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurRokan_8, 
                style: style_AlurRokan_8,
                popuplayertitle: "Alur Rokan",
                interactive: true,
                title: '<img src="styles/legend/AlurRokan_8.png" /> Alur Rokan'
            });
var format_AlurPawan_9 = new ol.format.GeoJSON();
var features_AlurPawan_9 = format_AlurPawan_9.readFeatures(json_AlurPawan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurPawan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurPawan_9.addFeatures(features_AlurPawan_9);
var lyr_AlurPawan_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurPawan_9, 
                style: style_AlurPawan_9,
                popuplayertitle: "Alur Pawan",
                interactive: true,
                title: '<img src="styles/legend/AlurPawan_9.png" /> Alur Pawan'
            });
var format_AlurKendilo_10 = new ol.format.GeoJSON();
var features_AlurKendilo_10 = format_AlurKendilo_10.readFeatures(json_AlurKendilo_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurKendilo_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurKendilo_10.addFeatures(features_AlurKendilo_10);
var lyr_AlurKendilo_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurKendilo_10, 
                style: style_AlurKendilo_10,
                popuplayertitle: "Alur Kendilo",
                interactive: true,
                title: '<img src="styles/legend/AlurKendilo_10.png" /> Alur Kendilo'
            });
var format_AlurArut_11 = new ol.format.GeoJSON();
var features_AlurArut_11 = format_AlurArut_11.readFeatures(json_AlurArut_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AlurArut_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AlurArut_11.addFeatures(features_AlurArut_11);
var lyr_AlurArut_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AlurArut_11, 
                style: style_AlurArut_11,
                popuplayertitle: "Alur Arut",
                interactive: true,
                title: '<img src="styles/legend/AlurArut_11.png" /> Alur Arut'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_RambuSungai_1.setVisible(true);lyr_SBNPPenyeberangan_2.setVisible(true);lyr_HalteSungai_3.setVisible(true);lyr_AlurSiak_4.setVisible(true);lyr_AlurBerau_5.setVisible(true);lyr_AlurMempawah_6.setVisible(true);lyr_AlurSambas_7.setVisible(true);lyr_AlurRokan_8.setVisible(true);lyr_AlurPawan_9.setVisible(true);lyr_AlurKendilo_10.setVisible(true);lyr_AlurArut_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_RambuSungai_1,lyr_SBNPPenyeberangan_2,lyr_HalteSungai_3,lyr_AlurSiak_4,lyr_AlurBerau_5,lyr_AlurMempawah_6,lyr_AlurSambas_7,lyr_AlurRokan_8,lyr_AlurPawan_9,lyr_AlurKendilo_10,lyr_AlurArut_11];
lyr_RambuSungai_1.set('fieldAliases', {'No': 'No', 'Nama Rambu': 'Nama Rambu', 'Kode Rambu': 'Kode Rambu', 'X': 'X', 'Y': 'Y', 'Jenis Rambu': 'Jenis Rambu', 'Spatial Reference System Identifier': 'Spatial Reference System Identifier', 'Nama Penyelenggara': 'Nama Penyelenggara', 'Tahun Pengadaan': 'Tahun Pengadaan', 'Kondisi Rambu': 'Kondisi Rambu', 'Prov': 'Prov', 'Kab/Kota': 'Kab/Kota', 'Nama Sungai': 'Nama Sungai', 'field_14': 'field_14', 'field_15': 'field_15', });
lyr_SBNPPenyeberangan_2.set('fieldAliases', {'Namobj': 'Namobj', 'X': 'X', 'Y': 'Y', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'JENIS_SBNP': 'JENIS_SBNP', 'KONDISI': 'KONDISI', 'STATUS__OP': 'STATUS__OP', 'PENGELOLA': 'PENGELOLA', 'TAHUN_ANGG': 'TAHUN_ANGG', 'ALOKASI_AN': 'ALOKASI_AN', 'WILAYAH': 'WILAYAH', 'KD_PROV': 'KD_PROV', 'KD_KABKOT': 'KD_KABKOT', 'PROV': 'PROV', 'KABKOT': 'KABKOT', 'KM_SBNP': 'KM_SBNP', });
lyr_HalteSungai_3.set('fieldAliases', {'Namobj': 'Namobj', 'X': 'X', 'Y': 'Y', 'fcode': 'fcode', 'srs_id': 'srs_id', 'lcode': 'lcode', 'JENIS_HALTE': 'JENIS_HALTE', 'KONDISI': 'KONDISI', 'STATUS_OP': 'STATUS_OP', 'PENGELOLA': 'PENGELOLA', 'TAHUN_ANGG': 'TAHUN_ANGG', 'ALOKASI_AN': 'ALOKASI_AN', 'WILAYAH': 'WILAYAH', 'KD_PROV': 'KD_PROV', 'KD_KABKOT': 'KD_KABKOT', 'PROV': 'PROV', 'KABKOT': 'KABKOT', 'KM_HALTE': 'KM_HALTE', });
lyr_AlurSiak_4.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_AlurBerau_5.set('fieldAliases', {'Id': 'Id', 'Klas': 'Klas', });
lyr_AlurMempawah_6.set('fieldAliases', {'Id': 'Id', 'Keterangan': 'Keterangan', 'Panjang__K': 'Panjang__K', });
lyr_AlurSambas_7.set('fieldAliases', {'Min_Elevat': 'Min_Elevat', 'Lebar_m': 'Lebar_m', 'Kelas': 'Kelas', });
lyr_AlurRokan_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TARGET_FID': 'TARGET_FID', 'STA': 'STA', 'Elevasi_M': 'Elevasi_M', 'Lebar_M': 'Lebar_M', 'DESA': 'DESA', 'KEC': 'KEC', 'KABKOT': 'KABKOT', 'Kelas_Eks': 'Kelas_Eks', 'Kelas_Us': 'Kelas_Us', 'Panjang_M': 'Panjang_M', 'Shape_Leng': 'Shape_Leng', });
lyr_AlurPawan_9.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'km': 'km', });
lyr_AlurKendilo_10.set('fieldAliases', {'NAME': 'NAME', 'GM_LAYER': 'GM_LAYER', 'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', 'LENGTH': 'LENGTH', 'BEARING': 'BEARING', });
lyr_AlurArut_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Join_Count': 'Join_Count', 'TARGET_FID': 'TARGET_FID', 'Id': 'Id', 'PANJANG': 'PANJANG', 'Join_Cou_1': 'Join_Cou_1', 'TARGET_F_1': 'TARGET_F_1', 'Id_1': 'Id_1', 'Nama': 'Nama', 'lat': 'lat', 'long': 'long', 'NamaKec': 'NamaKec', 'NamaDesa': 'NamaDesa', 'Shape_Leng': 'Shape_Leng', 'Kelas': 'Kelas', });
lyr_RambuSungai_1.set('fieldImages', {'No': 'Range', 'Nama Rambu': 'TextEdit', 'Kode Rambu': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'Jenis Rambu': 'TextEdit', 'Spatial Reference System Identifier': 'TextEdit', 'Nama Penyelenggara': 'TextEdit', 'Tahun Pengadaan': 'Range', 'Kondisi Rambu': 'TextEdit', 'Prov': 'TextEdit', 'Kab/Kota': 'TextEdit', 'Nama Sungai': 'TextEdit', 'field_14': 'Range', 'field_15': 'Range', });
lyr_SBNPPenyeberangan_2.set('fieldImages', {'Namobj': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'fcode': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'JENIS_SBNP': 'TextEdit', 'KONDISI': 'TextEdit', 'STATUS__OP': 'TextEdit', 'PENGELOLA': 'TextEdit', 'TAHUN_ANGG': 'Range', 'ALOKASI_AN': 'TextEdit', 'WILAYAH': 'TextEdit', 'KD_PROV': 'TextEdit', 'KD_KABKOT': 'TextEdit', 'PROV': 'TextEdit', 'KABKOT': 'TextEdit', 'KM_SBNP': 'TextEdit', });
lyr_HalteSungai_3.set('fieldImages', {'Namobj': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'fcode': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'JENIS_HALTE': 'TextEdit', 'KONDISI': 'TextEdit', 'STATUS_OP': 'TextEdit', 'PENGELOLA': 'TextEdit', 'TAHUN_ANGG': 'Range', 'ALOKASI_AN': 'TextEdit', 'WILAYAH': 'TextEdit', 'KD_PROV': 'TextEdit', 'KD_KABKOT': 'TextEdit', 'PROV': 'TextEdit', 'KABKOT': 'TextEdit', 'KM_HALTE': 'TextEdit', });
lyr_AlurSiak_4.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'JNSSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_AlurBerau_5.set('fieldImages', {'Id': 'Range', 'Klas': 'TextEdit', });
lyr_AlurMempawah_6.set('fieldImages', {'Id': 'Range', 'Keterangan': 'TextEdit', 'Panjang__K': 'TextEdit', });
lyr_AlurSambas_7.set('fieldImages', {'Min_Elevat': 'TextEdit', 'Lebar_m': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_AlurRokan_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'TARGET_FID': 'TextEdit', 'STA': 'TextEdit', 'Elevasi_M': 'TextEdit', 'Lebar_M': 'TextEdit', 'DESA': 'TextEdit', 'KEC': 'TextEdit', 'KABKOT': 'TextEdit', 'Kelas_Eks': 'TextEdit', 'Kelas_Us': 'TextEdit', 'Panjang_M': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_AlurPawan_9.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'km': 'TextEdit', });
lyr_AlurKendilo_10.set('fieldImages', {'NAME': 'TextEdit', 'GM_LAYER': 'TextEdit', 'LAYER': 'TextEdit', 'GM_TYPE': 'TextEdit', 'ELEVATION': 'TextEdit', 'LENGTH': 'TextEdit', 'BEARING': 'TextEdit', });
lyr_AlurArut_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'Join_Count': 'TextEdit', 'TARGET_FID': 'TextEdit', 'Id': 'TextEdit', 'PANJANG': 'TextEdit', 'Join_Cou_1': 'TextEdit', 'TARGET_F_1': 'TextEdit', 'Id_1': 'TextEdit', 'Nama': 'TextEdit', 'lat': 'TextEdit', 'long': 'TextEdit', 'NamaKec': 'TextEdit', 'NamaDesa': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Kelas': 'TextEdit', });
lyr_RambuSungai_1.set('fieldLabels', {'No': 'no label', 'Nama Rambu': 'no label', 'Kode Rambu': 'no label', 'X': 'no label', 'Y': 'no label', 'Jenis Rambu': 'no label', 'Spatial Reference System Identifier': 'no label', 'Nama Penyelenggara': 'no label', 'Tahun Pengadaan': 'no label', 'Kondisi Rambu': 'no label', 'Prov': 'no label', 'Kab/Kota': 'no label', 'Nama Sungai': 'no label', 'field_14': 'no label', 'field_15': 'no label', });
lyr_SBNPPenyeberangan_2.set('fieldLabels', {'Namobj': 'no label', 'X': 'no label', 'Y': 'no label', 'fcode': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'JENIS_SBNP': 'no label', 'KONDISI': 'no label', 'STATUS__OP': 'no label', 'PENGELOLA': 'no label', 'TAHUN_ANGG': 'no label', 'ALOKASI_AN': 'no label', 'WILAYAH': 'no label', 'KD_PROV': 'no label', 'KD_KABKOT': 'no label', 'PROV': 'no label', 'KABKOT': 'no label', 'KM_SBNP': 'no label', });
lyr_HalteSungai_3.set('fieldLabels', {'Namobj': 'no label', 'X': 'no label', 'Y': 'no label', 'fcode': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'JENIS_HALTE': 'no label', 'KONDISI': 'no label', 'STATUS_OP': 'no label', 'PENGELOLA': 'no label', 'TAHUN_ANGG': 'no label', 'ALOKASI_AN': 'no label', 'WILAYAH': 'no label', 'KD_PROV': 'no label', 'KD_KABKOT': 'no label', 'PROV': 'no label', 'KABKOT': 'no label', 'KM_HALTE': 'no label', });
lyr_AlurSiak_4.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_AlurBerau_5.set('fieldLabels', {'Id': 'no label', 'Klas': 'no label', });
lyr_AlurMempawah_6.set('fieldLabels', {'Id': 'no label', 'Keterangan': 'no label', 'Panjang__K': 'no label', });
lyr_AlurSambas_7.set('fieldLabels', {'Min_Elevat': 'no label', 'Lebar_m': 'no label', 'Kelas': 'no label', });
lyr_AlurRokan_8.set('fieldLabels', {'OBJECTID': 'no label', 'TARGET_FID': 'no label', 'STA': 'no label', 'Elevasi_M': 'no label', 'Lebar_M': 'no label', 'DESA': 'no label', 'KEC': 'no label', 'KABKOT': 'no label', 'Kelas_Eks': 'no label', 'Kelas_Us': 'no label', 'Panjang_M': 'no label', 'Shape_Leng': 'no label', });
lyr_AlurPawan_9.set('fieldLabels', {'FID_': 'no label', 'Entity': 'no label', 'Layer': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'km': 'no label', });
lyr_AlurKendilo_10.set('fieldLabels', {'NAME': 'no label', 'GM_LAYER': 'no label', 'LAYER': 'no label', 'GM_TYPE': 'no label', 'ELEVATION': 'no label', 'LENGTH': 'no label', 'BEARING': 'no label', });
lyr_AlurArut_11.set('fieldLabels', {'OBJECTID': 'no label', 'Join_Count': 'no label', 'TARGET_FID': 'no label', 'Id': 'no label', 'PANJANG': 'no label', 'Join_Cou_1': 'no label', 'TARGET_F_1': 'no label', 'Id_1': 'no label', 'Nama': 'no label', 'lat': 'no label', 'long': 'no label', 'NamaKec': 'no label', 'NamaDesa': 'no label', 'Shape_Leng': 'no label', 'Kelas': 'no label', });
lyr_AlurArut_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});