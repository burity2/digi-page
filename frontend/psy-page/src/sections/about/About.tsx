import './about.css'
import vanePageImg from '../../assets/pictures/hug.jpeg'
import { IconArrowNarrowRight } from '@tabler/icons-react';

export default function About() {
  return (
    <>
    <div id="about-box">
      <div id="about-txt">
        <h4>SOBRE MIM</h4>
        <h2>I’m Vanessa Di Giornu, a psychiatrist dedicated to <span id='colored-italic'>meaningful change.</span></h2>
        <p>I create a safe, collaborative space where you can feel truly heard. My approach integrates clinical expertise with empathy to help you understand yourself and move forward with confidence.</p>
        <button>Mais informações<span><IconArrowNarrowRight stroke={1.5} /></span></button>
      </div>
      <img id='hug-img' src={vanePageImg} alt="Vanessa hugging her friend" />
    </div>
    </>
  )
}