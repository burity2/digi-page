import './App.css'
import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Icon from './sections/icons/Icons'
import Resources from './sections/resources/Resources'
import Footer from './sections/footer/Footer'

import { useState } from 'react'

function App() {

  const [isDark, setIsDark] = useState(false)
  const [isMoreInfoDisplayed, setIsMoreInfoDisplayed] = useState(false)

  return (
    < div className='container' data-theme={isDark ? "dark" : "light"}>
      <Header isDark={isDark} toggleTheme={() => setIsDark(v => !v)}/>
      <Hero/>
      <section id="about" ><About isMoreInfoDisplayed={isMoreInfoDisplayed} displayMoreInfo={() => setIsMoreInfoDisplayed(v => !v)} /></section>
      <section id="icons"><Icon/></section>
      <section id="resources"><Resources/></section>
      <section id="footer"><Footer/></section>
    </div>
  )
}

export default App
