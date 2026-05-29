import vaneImg from '../../assets/hair-fix-her-crop-hue-fix-2.png'
import './hero.css'
import { IconArrowNarrowRight, IconCalendarEvent } from '@tabler/icons-react';

export default function Hero() {
  return (
    <>
    <div id="hero-container">
      <div id="hero-txt">
        <h1>Care that helps you feel seen, understood, and <span id='txt-accent'>supported.</span></h1>
        <p>Compassionate psychiatric care for adults facing anxiety, burnout, mood challenges and life transitions.</p>
        <div id='hero-cta-wrapper'>
          <button className="page-btn" id='green-btn'>
            <IconCalendarEvent stroke={1.5} />
            <span className="btn-txt">Agendar Consulta</span>
            </button>
          <a id='underlined-a' href="#about">Saiba mais <span><IconArrowNarrowRight stroke={1.5} /></span></a>
        </div>
      </div>
      <div id="hero-art">
        <img id="hero-vane" src={vaneImg} alt="" />
      </div>
    </div>
    </>
  )
}