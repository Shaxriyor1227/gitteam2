import React from 'react'
import './Gym.css'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/img8.png'
import img9 from '../../assets/img9.png'
import icons from '../../assets/icons.png'
import icons1 from '../../assets/icons1.png'
import icons3 from '../../assets/icons3.png'

const Gym = () => {
  return (
    <div className='trainers'>
      <div className="trainers1">
        <h1>Trainers staff</h1>
      </div>

      <div className="container">
        <div className="trainers2">
          <img src={img2} alt="" />
          <h3>Victoria Shurpik</h3>
            <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>

        <div className="trainers2">
          <img src={img3} alt="" />
          <h3>Victoria Shurpik</h3>
          <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>

        <div className="trainers2">
          <img src={img4} alt="" />
          <h3>Victoria Shurpik</h3>
             <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>

        <div className="trainers2">
          <img src={img5} alt="" />
          <h3>Victoria Shurpik</h3>
         <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>
      </div>
           <div className="container">
        <div className="trainers2">
          <img src={img6} alt="" />
          <h3>Victoria Shurpik</h3>
            <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>

        <div className="trainers2">
          <img src={img7} alt="" />
          <h3>Victoria Shurpik</h3>
          <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>

        <div className="trainers2">
          <img src={img8} alt="" />
          <h3>Victoria Shurpik</h3>
             <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>

        <div className="trainers2">
          <img src={img9} alt="" />
          <h3>Victoria Shurpik</h3>
         <div className="icons">
          <img src={icons} alt="" />
          <img src={icons1} alt="" />
          <img src={icons3} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gym