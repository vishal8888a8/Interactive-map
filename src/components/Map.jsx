import React from 'react'
import { MapContainer,CircleMarker,Popup,TileLayer } from 'react-leaflet'

const center = [61.505, 60.09]
const colorOptions = { color: 'blue' }
//r - 5 to 30


export default function Map() {
  return (
    <div className='map'>
        <MapContainer center={center} zoom={2} scrollWheelZoom={false}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <CircleMarker center={center} pathOptions={colorOptions} radius={30}>
                <Popup>Hi this is popup</Popup>
            </CircleMarker>
            <CircleMarker center={[20.593684,78.96288]} pathOptions={colorOptions} radius={20}>
                <Popup><img src="https://i0.wp.com/blog.rebrandly.com/wp-content/uploads/2016/10/BITLY-API.jpg?resize=119%2C64&ssl=1" alt="US" /></Popup>
            </CircleMarker>
            <CircleMarker center={[40,-10]} pathOptions={colorOptions} radius={5}>
                <Popup>Hi this is popup</Popup>
            </CircleMarker>
        </MapContainer>,
    </div>
  )
}
