import React from 'react'
import Header from './Header'
import Map from './Map'
import Label from './Label'

export default function Dashboard () {
  return (
    <div className='dashboard'>
      <Header />
      <Map />
      <Label />
    </div>
  )
}
