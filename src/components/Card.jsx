import React from 'react'
import ReactCountryFlag from 'react-country-flag';

export default function Card(props) {
  return (
    <div className='card'>
        <ReactCountryFlag
            countryCode={props.item.code}
            svg
            style={{
                width: '4em',
                height: '3em',
                marginBottom:'0.3rem'
            }}
            title={props.item.code}
        />
        <h4>{props.item.country}</h4>
        <h4>Data: {props.item.data}k</h4>
    </div>
  )
}
