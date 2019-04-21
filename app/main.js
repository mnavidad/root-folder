var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer", "esri/symbols/PictureMarkerSymbol", "esri/symbols/SimpleFillSymbol", "esri/renderers", "esri/widgets/Home", "esri/widgets/BasemapGallery", "esri/symbols"], function (require, exports, Map_1, MapView_1, FeatureLayer_1, PictureMarkerSymbol_1, SimpleFillSymbol_1, renderers_1, Home_1, BasemapGallery_1, symbols_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Map_1 = __importDefault(Map_1);
    MapView_1 = __importDefault(MapView_1);
    FeatureLayer_1 = __importDefault(FeatureLayer_1);
    PictureMarkerSymbol_1 = __importDefault(PictureMarkerSymbol_1);
    SimpleFillSymbol_1 = __importDefault(SimpleFillSymbol_1);
    Home_1 = __importDefault(Home_1);
    BasemapGallery_1 = __importDefault(BasemapGallery_1);
    var map = new Map_1.default({
        basemap: "streets"
    });
    var view = new MapView_1.default({
        map: map,
        container: "viewDiv",
        // center: [-66.916664, 10.500000],
        center: [-118.80543, 34.02700],
        zoom: 13
    });
    // Create the layer and set the renderer
    var trailheads = new FeatureLayer_1.default({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
        renderer: new renderers_1.SimpleRenderer({
            symbol: new PictureMarkerSymbol_1.default({
                "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
                "width": 10.5,
                "height": 10.5
            })
        })
    });
    map.add(trailheads);
    // let  trailsRenderer = new UniqueValueRenderer({
    //   symbol: new SimpleLineSymbol({
    //     "color": [26, 26, 26,255],
    //         "width": 0.9,
    //         "style": "dot"
    //   })
    // })
    var trailsRenderer = new renderers_1.UniqueValueRenderer({
        //"type": "unique-value",
        "field": "USE_BIKE",
        "uniqueValueInfos": [
            {
                "value": "Yes",
                "symbol": new symbols_1.SimpleLineSymbol({
                    "color": [26, 26, 26, 255],
                    "width": 0.9,
                    "style": "dot"
                }),
                "label": "Bikes"
            },
            {
                "value": "No",
                "symbol": new symbols_1.SimpleLineSymbol({
                    "color": [230, 0, 0, 255],
                    "width": 0.9,
                    "style": "dot"
                }),
                "label": "No Bikes"
            }
        ]
    });
    // Create the layer and set the renderer
    var trails = new FeatureLayer_1.default({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
        renderer: trailsRenderer
    });
    map.add(trails, 0);
    // Define a class breaks renderer and symbols
    var openSpacesRenderer = new renderers_1.ClassBreaksRenderer({
        // "type": "class-breaks",
        "field": "GIS_ACRES",
        "classBreakInfos": [
            {
                "symbol": new SimpleFillSymbol_1.default({
                    "color": [
                        45, 128, 120, 255
                    ],
                    "outline": {
                        "width": 0
                    },
                    // "type": "simple-fill",
                    "style": "solid"
                }),
                "label": "0 to 1,629",
                "minValue": 0,
                "maxValue": 1629
            },
            {
                "symbol": new SimpleFillSymbol_1.default({
                    "color": [
                        173, 212, 106, 255
                    ],
                    "outline": {
                        "width": 0
                    },
                    // "type": "simple-fill",
                    "style": "solid"
                }),
                "label": "> 1,629 to 3,754",
                "minValue": 1629,
                "maxValue": 3754
            },
            {
                "symbol": new SimpleFillSymbol_1.default({
                    "color": [
                        226, 235, 211, 255
                    ],
                    "outline": {
                        "width": 0
                    },
                    //  "type": "simple-fill",
                    "style": "solid"
                }),
                "label": "> 3,754 to 11,438",
                "minValue": 3754,
                "maxValue": 11438
            }
        ]
    });
    // Create the layer and set the renderer
    var openspaces = new FeatureLayer_1.default({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
        renderer: openSpacesRenderer,
        opacity: 0.5
    });
    // Add the layer
    map.add(openspaces, 0);
    var homeWidget = new Home_1.default({
        view: view
    });
    var basemapGallery = new BasemapGallery_1.default({
        view: view,
        source: {
            portal: {
                url: "https://www.arcgis.com",
                useVectorBasemaps: true // Load vector tile basemaps
            }
        }
    });
    //view.ui.height.
    view.ui.add(homeWidget, "top-left");
    view.ui.add(basemapGallery, "top-right");
});
//# sourceMappingURL=main.js.map