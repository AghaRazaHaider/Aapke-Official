import React from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import Videos from './Components/Videos/Videos'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <div className="app-body">
      <Hero />
      <Videos />
      <Footer />
    </div>
    </div>
  )
}

export default App
