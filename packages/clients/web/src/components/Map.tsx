import React from 'react';
import { Map as LeafletMap, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const Map: React.FC = () => {
  return (
    <LeafletMap
      center={[-15.2293346, -59.3231872]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`}
      />
    </LeafletMap>
  );
};

export default Map;
