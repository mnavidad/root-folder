import EsriMap from "esri/Map";
import MapView from "esri/views/MapView";
import FeatureLayer from "esri/layers/FeatureLayer";
import  {PictureMarkerSymbol, SimpleLineSymbol, SimpleFillSymbol } from "esri/symbols";
import { SimpleRenderer, UniqueValueRenderer, ClassBreaksRenderer }  from "esri/renderers";
import Home from "esri/widgets/Home";
import BasemapGallery from "esri/widgets/BasemapGallery";

const map = new EsriMap({
  basemap: "streets"
});

const view = new MapView({
  map: map,
  container: "viewDiv",
 // center: [-66.916664, 10.500000],
 center:[-118.80543,34.02700],
  zoom: 13
});


// Create the layer and set the renderer
let trailheads = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads/FeatureServer/0",
  renderer: new SimpleRenderer({
       symbol: new PictureMarkerSymbol({
      "url": "http://static.arcgis.com/images/Symbols/NPS/npsPictograph_0231b.png",
      "width": 10.5,
      "height": 10.5
    })
  })
  
});

map.add(trailheads);

let trailsRenderer = new UniqueValueRenderer({
  "field": "USE_BIKE",
  "uniqueValueInfos": [
    {
      "value": "Yes",
      "symbol": new SimpleLineSymbol({
        "color": [26, 26, 26,255],
        "width": 0.9,     
        "style": "dot"
      }),
      "label": "Bikes"
    },
    {
      "value": "No",
      "symbol": new SimpleLineSymbol({
        "color": [230, 0, 0, 255],
        "width": 0.9,
         "style": "dot"
      }),
      "label": "No Bikes"
    }
  ]
})

// Create the layer and set the renderer
let trails = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trails/FeatureServer/0",
  renderer: trailsRenderer
});

map.add(trails,0);

// Define a class breaks renderer and symbols
var openSpacesRenderer = new ClassBreaksRenderer({
   "field": "GIS_ACRES",
  "classBreakInfos": [
    {
      "symbol": new SimpleFillSymbol({
        "color": [
          45,128,120,255
        ],
        "outline": {
          "width": 0
        },
        "style": "solid"
      }),
      "label": "0 to 1,629",
      "minValue": 0,
      "maxValue": 1629
    },
    {
      "symbol": new SimpleFillSymbol({
        "color": [
          173,212,106,255
        ],
        "outline": {
          "width": 0
        },
      
        "style": "solid"
      }),
      "label": "> 1,629 to 3,754",
      "minValue": 1629,
      "maxValue": 3754
    },
    {
      "symbol": new  SimpleFillSymbol({
        "color": [
          226,235,211,255
        ],
        "outline": {
          "width": 0
        },
      
        "style": "solid"
      }),
      "label": "> 3,754 to 11,438",
      "minValue": 3754,
      "maxValue": 11438
    }
  ]
})

// Create the layer and set the renderer
var openspaces = new FeatureLayer({
  url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Parks_and_Open_Space/FeatureServer/0",
  renderer: openSpacesRenderer,
  opacity: 0.5
});

// Add the layer
map.add(openspaces,0);

let homeWidget = new Home({
    view: view
});

let basemapGallery = new BasemapGallery({
    view: view,
    source: {
        portal: {
            url: "https://www.arcgis.com",
            useVectorBasemaps: true  // Load vector tile basemaps
        }
    }
});
//view.ui.height.
view.ui.add(homeWidget,  "top-left");
view.ui.add(basemapGallery,  "top-right");
