import React from 'react'

export default function GearCard(props) {

  const {gear} = props

  const handleClick = () => {
    console.log(`clicked: ${gear._id}`)
  }

  return (

    <div className="card" key={gear._id} onClick={handleClick}>
      <img className="image" alt="waterfall" src={gear.image} />
      <div className="content">
        <h3 className="name">
          {gear.brand} {gear.model}
        </h3>
        <p className="type">{gear.type}</p>
        <ul>
          <li className="quantity">
            <b>Quantity:</b> {gear.quantity}
          </li>
        </ul>
      </div>
    </div>

  )
}
