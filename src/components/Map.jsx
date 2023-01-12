import React from 'react'
import data from '../data/data'
import Card from './Card'
import { MapContainer,CircleMarker,Popup,TileLayer } from 'react-leaflet'

const center = [30, 15]

export default function Map() {

  function colorhandle(radius)
  {
    if ( radius <= 8 )
      return {color:'rgb(93, 151, 226)'};
    else if ( radius <= 16 )
      return {color:'rgb(37, 104, 191)'};
    else if ( radius <= 24 )
      return {color:'rgb(35, 35, 217)'}
    else
      return {color:'rgb(4, 4, 100)'}
  }

  return (
    <div className='map'>
        <MapContainer center={center} zoom={2} scrollWheelZoom={true}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            {data.map((item)=>
                <CircleMarker className='Circleitem' center={item.cords} pathOptions={colorhandle(item.data)} radius={item.data} weight={1.7}>
                    <Popup className='popup'>
                    <Card item={item}/>
                    </Popup>
                </CircleMarker>
            )}
        </MapContainer>
    </div>
  )
}
