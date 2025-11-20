import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl:'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png'
});

export default function MapPanel({center=[12.9716,77.5946], markers=[]}) {
  return (
    <div className='card' style={{height:320}}>
      <MapContainer center={center} zoom={13} style={{height:'100%',width:'100%'}}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' attribution='&copy; OpenStreetMap contributors'/>
        {markers.map((m,i)=>(
          <Marker key={i} position={[m.lat,m.lng]}><Popup>{m.label}</Popup></Marker>
        ))}
      </MapContainer>
    </div>
  );
}
