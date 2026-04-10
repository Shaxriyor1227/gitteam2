import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Reasons from './components/Reasons/Reasons'
import Gym from './components/Gym-membership/Gym'
import About from './components/About/About'
import Trainer from './components/Trainer/Trainer'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Main />
      <Reasons />
      <Gym />
      <About />
      <Trainer />
      <Footer />
    </div>
  )
}

export default App