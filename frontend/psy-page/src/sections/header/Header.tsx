import titleArt from '../../assets/mandala-2.png'
import './header.css'

export default function Header() {
  return (
    <>
    <div id="header-box">
      <div className="title">
        <img src={titleArt} alt="a mandala resembling the sun" />
        <div className="title-txt">
          <h1>VANESSA DI GIORNU</h1>
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
      </div>
    </div>
    </>
  )
}