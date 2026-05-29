import titleArt from '../../assets/mandala-2.png'
import './header.css'

import { IconMoon, IconSun } from '@tabler/icons-react';

type HeaderProps = {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <>
    <div id="header-box">
      <div className="title">
        <img src={titleArt} alt="a mandala resembling the sun" />
        <div className="title-txt">
          <h1>VANESSA DI GIORNO</h1>
          <p>PSICÓLOGA</p>
        </div>
      </div>
      <div className="cta">
        <div className="page-nav">
          <a href="#about" className="cta-anchors">Sobre mim</a>
          <a href="#icons" className="cta-anchors">Abordagem</a>
          <a href="#resources" className="cta-anchors">Recursos</a>
          <a href="#footer" className="cta-anchors">Contato</a>
        </div>
        <button className="page-btn">Agendar Consulta</button>
        <button id='theme-toggler' onClick={toggleTheme} aria-label="Toggle theme">
        { isDark ? <IconSun stroke={2} /> : <IconMoon stroke={2} />}
        </button>
      </div>
    </div>
    </>
  )
}