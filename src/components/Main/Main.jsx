import React from 'react'
import './Main.css'
import img1 from '../../assets/img1.png'
const Main = () => {
  return (
    <div className='main'>
      <div className="main1">
        <h1>Free trial session  <br /> with a trainer</h1>
        <div className="btn">
          <button>detailednpm</button>
        </div>
      </div>

        <div className="main-img">
          <img src={img1} alt="" />
        </div>
    </div>
  )
}

export default Main