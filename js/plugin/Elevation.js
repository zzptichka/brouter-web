var colorMappings = {
    highway: {
        '0': {
            text: 'Other',
            tag: '',
            color: '#e379ec'
        },
        '1': {
            text: 'Residential',
            tag: 'residential',
            color: '#028794'
        },
        '2': {
            text: 'Service',
            tag: 'service',
            color: '#47b558'
        },
        '3': {
            text: 'Minor',
            tag: 'unclassified',
            color: '#73dc36'
        },
        '4': {
            text: 'Collector',
            tag: 'tertiary',
            color: '#ffc107'
        },
        '5': {
            text: 'Path',
            tag: 'path',
            color: '#67b5bd'
        },
        '6': {
            text: 'Track',
            tag: 'track',
            color: '#795548'
        },
        '7': {
            text: 'Cycleway',
            tag: 'cycleway',
            color: '#3744cc'
        },
        '8': {
            text: 'Footway',
            tag: 'footway',
            color: '#8acfd5'
        },
        '9': {
            text: 'Steps',
            tag: 'steps',
            color: '#07da2e'
        },
        '10': {
            text: 'Ferry',
            tag: 'ferry',
            color: '#a2dfe5'
        },
        '11': {
            text: 'Arterial',
            tag: 'secondary',
            color: '#ff5722'
        },
        '12': {
            text: 'Primary',
            tag: 'primary',
            color: '#ec4325'
        },
        '13': {
            text: 'Trunk',
            tag: 'trunk',
            color: '#f90000'
        },
        '14': {
            text: 'motorway',
            tag: 'Highway',
            color: '#da4c05'
        },
        '15': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        }
    },
    surface: {
        '0': {
            tag: '',
            text: 'Unknown',
            color: '#f9f8fb'
        },
        '1': {
            tag: 'paved',
            text: 'Paved',
            color: '#373738'
        },
        '2': {
            tag: 'unpaved',
            text: 'Unpaved',
            color: '#795548'
        },
        '3': {
            tag: 'asphalt',
            text: 'Asphalt',
            color: '#272727'
        },
        '4': {
            tag: 'concrete',
            text: 'Concrete',
            color: '#76618c'
        },
        '5': {
            tag: 'cobblestone',
            text: 'Cobblestone',
            color: '#c7b2db'
        },
        '6': {
            tag: 'metal',
            text: 'Metal',
            color: '#5854c7'
        },
        '7': {
            tag: 'wood',
            text: 'Wood',
            color: '#d8e247'
        },
        '8': {
            tag: 'compacted',
            text: 'Compacted Gravel',
            color: '#5885c3'
        },
        '9': {
            tag: 'fine_gravel',
            text: 'Fine Gravel',
            color: '#535f9c'
        },
        '10': {
            tag: 'gravel',
            text: 'Gravel',
            color: '#3e5865'
        },
        '11': {
            tag: 'dirt',
            text: 'Dirt',
            color: '#462b21'
        },
        '12': {
            tag: 'ground',
            text: 'Ground',
            color: '#613c2f'
        },
        '13': {
            tag: 'ice',
            text: 'Ice',
            color: '#acb6ee'
        },
        '14': {
            tag: 'salt',
            text: 'Salt',
            color: '#b6c0f2'
        },
        '15': {
            tag: 'sand',
            text: 'Sand',
            color: '#e6d700'
        },
        '16': {
            tag: 'woodchips',
            text: 'Woodchips',
            color: '#795548'
        },
        '17': {
            tag: 'grass',
            text: 'Grass',
            color: '#325d01'
        },
        '18': {
            tag: 'grass_paver',
            text: 'Grass Paver',
            color: '#0d6f11'
        },
        '19': {
            tag: 'paving_stones',
            text: 'Paving Stones',
            color: '#8e2590'
        }
    },
    width: {
        '0': {
            text: 'Unknown',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: '0.5m',
            tag: '0.5',
            color: '#6574c3'
        },
        '2': {
            text: '1m', //20 and under
            tag: '1',
            color: '#5063c3'
        },
        '3': {
            text: '1.5m',
            tag: '1.5',
            color: '#3a51c1'
        },
        '4': {
            text: '2m',
            tag: '2',
            color: '#1e3ac1'
        },
        '5': {
            text: '2.5m',
            tag: '2.5',
            color: '#1330bd'
        },
        '6': {
            text: '3m',
            tag: '3',
            color: '#0725b9'
        },
        '7': {
            text: '4m',
            tag: '4',
            color: '#061d96'
        },
        '8': {
            text: '5m+',
            tag: '5',
            color: '#011377'
        },
        '9': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        },
        '10': {
            text: '1 Car Lane',
            tag: 'cars-1lane',
            color: '#f77307'
        },
        '11': {
            text: '2 Car Lanes',
            tag: 'cars-2lanes',
            color: '#f74e11'
        },
        '12': {
            text: '3 Car Lanes',
            tag: 'cars-3lanes',
            color: '#f72011'
        }
    },
    maxspeed: {
        '0': {
            text: 'Unknown',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: 'No cars',
            tag: 'no_cars',
            color: '#4caf50'
        },
        '2': {
            text: '<20 km/h', //20 and under
            tag: '20',
            color: '#00bcd4'
        },
        '3': {
            text: '30 km/h',
            tag: '30',
            color: '#03a9f4'
        },
        '4': {
            text: '40 km/h',
            tag: '40 km/h',
            color: '#2196f3'
        },
        '5': {
            text: '50 km/h',
            tag: '50',
            color: '#3f51b5'
        },
        '6': {
            text: '60 km/h',
            tag: '60',
            color: '#673ab7'
        },
        '7': {
            text: '70 km/h',
            tag: '70',
            color: '#9c27b0'
        },
        '8': {
            text: '80 km/h',
            tag: '80',
            color: '#f44336'
        },
        '9': {
            text: '90 km/h',
            tag: '90',
            color: '#f72011'
        },
        '10': {
            text: '100+ km/h',
            tag: '100',
            color: '#ef0707'
        },
        '11': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        }
    },
    lit: {
        '0': {
            text: 'Unknown',
            tag: '',
            color: '#ffffff'
        },
        '1': {
            text: 'Lit',
            tag: 'yes',
            color: '#fbd709'
        },
        '2': {
            text: 'Not lit',
            tag: 'no',
            color: '#484848'
        },
        '3': {
            text: 'Crossing',
            tag: 'crossing',
            color: '#000000'
        }
    }
};

function getKeyByValue(object, value) {
    if (!Array.isArray(Object.keys(object))) return null;

    for (let key of Object.keys(object)) {
        if (object[key]['tag'] === value) {
            return key;
        }
    }
    return Object.keys(object)[0]; //return first one - should be "unset" (other)
    //return .find(key => object[key]['tag'] === value);
}

//-- Define radius function
if (typeof Number.prototype.toRad === 'undefined') {
    Number.prototype.toRad = function() {
        return (this * Math.PI) / 180;
    };
}

//-- Define degrees function
if (typeof Number.prototype.toDeg === 'undefined') {
    Number.prototype.toDeg = function() {
        return this * (180 / Math.PI);
    };
}

//-- Define middle point function
function middlePoint(lat1, lng1, lat2, lng2) {
    //-- Longitude difference
    var dLng = (lng2 - lng1).toRad();

    //-- Convert to radians
    lat1 = lat1.toRad();
    lat2 = lat2.toRad();
    lng1 = lng1.toRad();

    var bX = Math.cos(lat2) * Math.cos(dLng);
    var bY = Math.cos(lat2) * Math.sin(dLng);
    var lat3 = Math.atan2(
        Math.sin(lat1) + Math.sin(lat2),
        Math.sqrt((Math.cos(lat1) + bX) * (Math.cos(lat1) + bX) + bY * bY)
    );
    var lng3 = lng1 + Math.atan2(bY, Math.cos(lat1) + bX);

    //-- Return result
    return [lng3.toDeg(), lat3.toDeg()];
}

function getValue(str, tag) {
    if (!str) return '';

    const arr = str.split(' ').reduce((accum, x) => {
        const kv = x.split('=');
        return { ...accum, ...{ [kv[0]]: kv[1] } };
    }, {});
    return arr[tag] ? arr[tag] : '';
}

function getLanes(str) {
    const lanes = getValue(str, 'lanes');
    if (lanes == '') {
        return 1;
    }
    const oneway = getValue(str, 'oneway');
    if (oneway == 'yes') {
        return parseInt(lanes);
    }
    const reverse = getValue(str, 'reversedirection');
    let lanesdir = '';
    if (reverse == 'yes') {
        lanesdir = getValue(str, 'lanes:backward');
    } else {
        lanesdir = getValue(str, 'lanes:forward');
    }
    if (lanesdir == '') {
        const val = parseInt(lanes);
        return val % 2 ? (val + 1) / 2 : val / 2;
    }
    return parseInt(lanesdir);
}

BR.Elevation = L.Control.Heightgraph.extend({
    options: {
        width: $('#map').outerWidth(),
        height: 200,
        margins: {
            top: 20,
            right: 30,
            bottom: 30,
            left: 60
        },
        theme: 'steelblue-theme',
        mappings: colorMappings,
        expand: true,
        xTicks: 10,
        yTicks: 5
    },

    onAdd: function(map) {
        var container = L.Control.Heightgraph.prototype.onAdd.call(this, map);
        /*
        // revert registering touch events when touch screen detection is available and negative
        // see https://github.com/MrMufflon/Leaflet.Elevation/issues/67
        if (L.Browser.touch && BR.Browser.touchScreenDetectable && !BR.Browser.touchScreen) {
            this._background
              //  .on('touchmove.drag', null)
                .on('touchstart.drag', null)
                .on('touchstart.focus', null);
            L.DomEvent.off(this._container, 'touchend', this._dragEndHandler, this);

            this._background
                .on('mousemove.focus', this._mousemoveHandler.bind(this))
                .on('mouseout.focus', this._mouseoutHandler.bind(this))
                .on('mousedown.drag', this._dragStartHandler.bind(this))
                .on('mousemove.drag', this._dragHandler.bind(this));
            L.DomEvent.on(this._container, 'mouseup', this._dragEndHandler, this);
        }
*/
        return container;
    },

    addBelow: function(map) {
        // waiting for https://github.com/MrMufflon/Leaflet.Elevation/pull/66
        // this.width($('#map').outerWidth());
        this.options.width = $('#content').outerWidth();

        if (this.getContainer() != null) {
            this.remove(map);
        }

        function setParent(el, newParent) {
            newParent.appendChild(el);
        }
        this.addTo(map);
        // move elevation graph outside of the map
        setParent(this.getContainer(), document.getElementById('elevation-chart'));
    },

    buildProfile: function(steps, coords, tag) {
        const ret = {
            type: 'FeatureCollection',
            features: [],
            properties: {
                summary: tag
            }
        };

        let lastVal = 'dummy',
            curVal = '';
        feature = '';
        let key,
            i = 0,
            totalPoints = 0;

        for (let step of steps) {
            const long = parseInt(step[0]) / 1000000;
            const lat = parseInt(step[1]) / 1000000;
            const alt = parseFloat(step[2]);

            const str = step[9];
            curVal = getValue(str, tag);

            if (tag == 'maxspeed') {
                //tweaks to take into account road type, etc
                if (curVal == '') {
                    let val = getValue(str, 'highway');
                    if (['footway', 'path', 'cycleway', 'steps'].includes(val)) {
                        curVal = 'no_cars';
                    }
                    if (val == 'footway') {
                        if (getValue(str, 'footway') == 'crossing') {
                            curVal = 'crossing';
                        }
                    }
                }
            }
            if (tag == 'highway') {
                if (curVal == 'footway') {
                    const val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'crossing';
                    }
                }
                if (curVal == 'secondary_link') {
                    curVal = 'secondary';
                }
                if (curVal == 'tertiary_link') {
                    curVal = 'tertiary';
                }
                if (curVal == 'primary_link') {
                    curVal = 'primary';
                }
            }
            if (tag == 'surface') {
                //if surface unknown and it's a crossing => asphalt
                if (curVal == '') {
                    const val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'asphalt';
                    }
                }
            }
            if (tag == 'width') {
                //tweaks to take into account road type, etc
                let val = getValue(str, 'highway');
                if (!['footway', 'path', 'cycleway', 'steps'].includes(val)) {
                    val = getLanes(str);
                    switch (val) {
                        case 1:
                            curVal = 'cars-1lane';
                            break;
                        case 2:
                            curVal = 'cars-2lanes';
                            break;
                        case 3:
                        default:
                            curVal = 'cars-3lanes';
                            break;
                    }
                } else {
                    if (curVal > 5) {
                        curVal = 5;
                    }
                }
                if (val == 'footway') {
                    val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'crossing';
                    }
                }
            }
            if (tag == 'lit') {
                let val = getValue(str, 'highway');
                if (val == 'footway') {
                    val = getValue(str, 'footway');
                    if (val == 'crossing') {
                        curVal = 'crossing';
                    }
                }
            }
            key = parseInt(getKeyByValue(colorMappings[tag], curVal));

            if (curVal != lastVal) {
                if (feature != '') {
                    //if not the first time
                    ret.features.push(feature);
                }

                const lastPoint =
                    feature == '' ? '' : feature.geometry.coordinates[feature.geometry.coordinates.length - 1];
                feature = {
                    type: 'Feature',
                    geometry: {
                        type: 'LineString',
                        coordinates: []
                    },
                    properties: {
                        attributeType: key,
                        text: colorMappings[tag][key].text,
                        tag: colorMappings[tag][key].tag
                    }
                };
                if (lastPoint != '') {
                    feature.geometry.coordinates.push(lastPoint);
                    //  i--;
                }
            }
            while (i < coords.length) {
                //insert additional nodes (for smoother profile)
                if (i > 0) {
                    const mid = middlePoint(coords[i - 1][0], coords[i - 1][1], coords[i][0], coords[i][1]);
                    feature.geometry.coordinates.push([mid[1], mid[0], (coords[i][2] + coords[i - 1][2]) / 2]);
                    totalPoints++;
                }
                feature.geometry.coordinates.push([coords[i][0], coords[i][1], coords[i][2]]);
                totalPoints++;
                i++;
                if (coords[i - 1][0] == long && coords[i - 1][1] == lat) break;
            }
            lastVal = curVal;
        }

        ret.features.push(feature);
        ret.properties.records = ret.features.length;

        return ret;
    },
    buildGeojson: function(segments) {
        const ret = [];
        let steps = [];
        let coords = [segments[0].feature.geometry.coordinates[0]];
        for (let segment of segments) {
            steps = steps.concat(segment.feature.properties.messages.slice(1));
            coords = coords.concat(segment.feature.geometry.coordinates.slice(1)); //cut off first coords (it's a duplicate)
        }

        ret.push(this.buildProfile(steps, coords, 'width'));
        ret.push(this.buildProfile(steps, coords, 'highway'));
        ret.push(this.buildProfile(steps, coords, 'surface'));
        ret.push(this.buildProfile(steps, coords, 'maxspeed'));
        ret.push(this.buildProfile(steps, coords, 'lit'));
        return ret;
    },
    update: function(track, segments) {
        //this.clear();

        // bring height indicator to front, because of track casing in BR.Routing
        if (this._mouseHeightFocus) {
            var g = this._mouseHeightFocus[0][0].parentNode;
            g.parentNode.appendChild(g);
        }

        if (track && track.getLatLngs().length > 0) {
            //this.addData(track.toGeoJSON(), layer);
            const data = this.buildGeojson(segments);
            this.addData(data);
            //  layer.on('mouseout', this._hidePositionMarker.bind(this));
        }
    }
});
