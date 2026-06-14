import './header.css'
import { useState, useEffect, useRef } from 'react';

import { IconMoon, IconSun, IconX, IconCalendarEvent, IconMenu2 } from '@tabler/icons-react';

type HeaderProps = {
  isDark: boolean
  toggleTheme: () => void
}


export default function Header({ isDark, toggleTheme }: HeaderProps) {

  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  }

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isActive) return;

    function handleClickOutside(event: MouseEvent) {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

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
        <div className='hamburguer-wrap' ref={menuRef}>
          <button
            className='hamburger-menu'
            onClick={toggleClass}
            aria-expanded={isActive}
            aria-controls="off-screen-menu"
          >
            { isActive ? <IconX className='hamburger-menu-icon' stroke={1.5} /> : <IconMenu2 className='hamburger-menu-icon' stroke={1.5}/>}
          </button>
          <div id='off-screen-menu'
              className={isActive ? 'active' : ''}
              onClick={toggleClass}
            >
              <a href="#about" className="cta-ham-anchors">Sobre mim</a>
              <a href="#icons" className="cta-ham-anchors">Abordagem</a>
              <a href="#resources" className="cta-ham-anchors">Recursos</a>
              <a href="#footer" className="cta-ham-anchors">Contato</a>
              <button id='ham-theme-toggler' className="cta-ham-anchors" aria-label="Toggle theme"
                onClick={(e) => { e.stopPropagation(); toggleTheme(); }}
              >
              { isDark ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
              { isDark ? "Modo claro" : "Modo escuro"}
            </button>
          </div>
        </div>

        <a className="page-btn" id='red-btn' href='https://calendly.com/psivanessadigiorno/30min' target='_blank' rel="noopener noreferrer">
          <IconCalendarEvent className='btn-icon' stroke={1.5} />
          <span className="btn-txt">Agendar Consulta</span>
          </a>
        <button id='theme-toggler' onClick={toggleTheme} aria-label="Toggle theme">
        { isDark ? <IconSun stroke={1.5} /> : <IconMoon stroke={1.5} />}
        </button>
      </div>
    </div>
    </>
  )
}