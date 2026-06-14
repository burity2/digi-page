import vaneImg from '../../assets/hair-fix-her-crop-hue-fix-2.png'
import './hero.css'
import { IconArrowNarrowRight, IconCalendarEvent } from '@tabler/icons-react';

export default function Hero() {

  return (
    <>
    <div id="hero-container">
      <div id="hero-txt">
        <h1>Atendimento para quem deseja ser escutado com atenção, respeito e <span id='txt-accent'>afeto</span></h1>
        <p>Um espaço seguro para atravessar momentos difíceis, compreender seus sentimentos e construir novos sentidos para sua experiência.</p>
        <div id='hero-cta-wrapper'>
          <a className="page-btn" id='green-btn' href='https://calendly.com/psivanessadigiorno/30min' target='_blank' rel="noopener noreferrer">
            <IconCalendarEvent stroke={1.5} />
            <span className="btn-txt">Agendar Consulta</span>
          </a>
          <a className='underlined-a' href="#about">Saiba mais <span><IconArrowNarrowRight stroke={1.5} /></span></a>
        </div>
      </div>
      <div id="hero-art">
        <img id="hero-vane" src={vaneImg} alt="" />
      </div>
    </div>
    </>
  )
}