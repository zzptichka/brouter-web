BR.Search = L.Control.Geocoder.extend({
    options: {
        geocoder: new L.Control.Geocoder.LatLng({
            next: new L.Control.Geocoder.mapbox(
              'pk.eyJ1IjoiYmlrZW90dGF3YSIsImEiOiJjamdqaWxrN3gwZXQ4MnFxbjAwZXRpbG8zIn0.XhAdk2ASwdipubccCWTfoQ',
              {
                //serviceUrl: 'https://nominatim.openstreetmap.org/',
                geocodingQueryParams: {
                    limit: 10,
                    //bbox: [-76.385193,44.963826,-75.011902,45.614998],
                    country: 'ca',
                    proximity: '-75.7061857,45.396683'
                }
            }),
            sizeInMeters: 800
        }),
        position: 'topleft'
    },

    markGeocode: function(result) {
        this._map.fitBounds(result.geocode.bbox, {
            maxZoom: 17
        });

        this.clear();
        this._geocodeMarker = new L.CircleMarker(result.geocode.center, {
            interactive: false,
            color: 'red',
            opacity: 1,
            weight: 3
        }).addTo(this._map);

        return this;
    },

    clear: function() {
        if (this._geocodeMarker) {
            this._map.removeLayer(this._geocodeMarker);
        }
    }
});
