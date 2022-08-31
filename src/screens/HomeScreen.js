import React from 'react'
import Map from '../components/Map'
import 'react-bootstrap'
import Chartx from '../components/Chartx'
// import styled from 'styled-components'

const Homescreen = () => {
  return (
    <div>
      <Map class="border border-primary shadow p-3 mb-5 bg-white rounded w-50" />
      <Chartx />
    </div>
  )
}

export default Homescreen
