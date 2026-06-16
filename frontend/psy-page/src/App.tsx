import './App.css'
import Header from './sections/header/Header'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Icon from './sections/icons/Icons'
import Resources from './sections/resources/Resources'
import Footer from './sections/footer/Footer'

import { useState, useEffect } from 'react'

function App() {

  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme === 'dark'
  })

  const [isMoreInfoDisplayed, setIsMoreInfoDisplayed] = useState(false)
  const [isApproachDisplayed, setIsApproachDisplayed] = useState(false)

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  return (
    < div className='container' data-theme={isDark ? "dark" : "light"}>
      <Header isDark={isDark} toggleTheme={() => setIsDark(v => !v)}/>
      <Hero/>
      <section id="about" ><About isMoreInfoDisplayed={isMoreInfoDisplayed} displayMoreInfo={() => setIsMoreInfoDisplayed(v => !v)} /></section>
      <section id="icons"><Icon isApproachDisplayed={isApproachDisplayed} displayApproach={() => setIsApproachDisplayed(v => !v)}/></section>
      <section id="resources"><Resources/></section>
      <section id="footer"><Footer/></section>
    </div>
  )
}

export default App
