import React from 'react'
import './Reasons.css'

import icon1 from "../../assets/icon1.png"
import icon2 from "../../assets/icon2.png"
import icon3 from "../../assets/icon3.png"
import icon4 from "../../assets/icon4.png"

const data = [
  {
    icon: icon1,
    title: "15000 sq.m.",
    text: "A spacious area for your business needs"
  },
  {
    icon: icon2,
    title: "4 fitness zones",
    text: "From cardio to functional and cycle. Separate area for boxing and MMA"
  },
  {
    icon: icon3,
    title: "200+ equipment",
    text: "No queues. Premium equipment from LifeStyle, Hammer Strength, TechnoGym"
  },
  {
    icon: icon4,
    title: "24/7 access",
    text: "Open all day, including holidays and weekends"
  }
]

const Reasons = () => {
  return (
    <div className="reasons">
      <h1>Reasons to join</h1>

      <div className="reasons-list">
        {data.map((item, index) => (
          <div className="reason-card" key={index}>
            <img src={item.icon} alt="icon" />
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Reasons