import React from 'react'
import GearCard from '../components/GearCard'

export default function GearCollection(props) {

  const {gears} = props

  const displayCollection = () => {
    return gears.map((gear) => {
      return(
        <GearCard gear={gear} />
      )
    })
  }

  return (
      <div className="container">
        { displayCollection() }
      </div>
  )
}
