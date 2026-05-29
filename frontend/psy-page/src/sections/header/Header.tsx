import './header.css'

import { IconMoon, IconSun, IconCalendarEvent, IconMenu2 } from '@tabler/icons-react';

type HeaderProps = {
  isDark: boolean
  toggleTheme: () => void
}

export default function Header({ isDark, toggleTheme }: HeaderProps) {
  return (
    <>
    <div id="header-box">
      <div className="title">
        <div className="logo-mark" aria-hidden="true" />
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
        <IconMenu2 className='hamburger-menu' stroke={1.5} />
        <button className="page-btn">
          <span className="btn-txt">Agendar Consulta</span>
          <IconCalendarEvent stroke={1.5} />
          </button>
        <button id='theme-toggler' onClick={toggleTheme} aria-label="Toggle theme">
        { isDark ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
        </button>
      </div>
    </div>
    </>
  )
}