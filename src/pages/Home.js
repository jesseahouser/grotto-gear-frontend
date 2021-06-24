import React, { useEffect, useState } from 'react'
import GearCollection from '../containers/GearCollection'

const grottoGearAPI = 'http://localhost:9000'

export default function Home() {

  const [gears, setGears] = useState([])

  useEffect(() => {
    fetch(`${grottoGearAPI}/gear`)
      .then((response) => response.json())
      .then((json) => setGears(json))
  }, [])

  return (
    <div>
      <h1 className="title">GrottoGear</h1>
      <GearCollection gears={gears} />
    </div>
  )
}
