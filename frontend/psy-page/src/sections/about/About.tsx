import './about.css'
import vanePageImg from '../../assets/pictures/hug.jpeg'
import moreInfoImg from '../../assets/pictures/vane-more-info.jpeg'
import { IconArrowNarrowDown, IconCalendarEvent, IconUsers, IconMessages, IconLeaf, IconArrowNarrowRight,IconQuoteOpen, type TablerIcon } from '@tabler/icons-react';

type AboutProps = {
  isMoreInfoDisplayed: boolean
  displayMoreInfo: () => void
}

type MoreInfoFooterCard = {
  icon: TablerIcon,
  title: string,
  description: string
}

const footerArray: MoreInfoFooterCard[] = [
  {icon: IconLeaf, title: 'Prática diversa', description:'sessões, palestras & arteterapia'},
  {icon: IconMessages, title: '500+', description:'sessões conduzidas'},
  {icon: IconUsers, title: 'Atendimento online', description:'Adultos & Crianças'},
  // {icon: IconBrush, title: 'Palestras & Arteterapia', description:'em escolas e clínicas'},
  // {icon: IconUsersGroup, title: 'Pessoas Indígenas', description:'atendimento psicológico'},
]


export default function About({ isMoreInfoDisplayed, displayMoreInfo }: AboutProps) {
  return (
    <>
    <div id='full-about-box'>
      <div id="about-box">
        <div id="about-txt">
          <h4>SOBRE MIM</h4>
          <h2>Oi, eu sou a Vanessa, uma psicóloga dedicada à <span className='colored-italic'>escuta e ao afeto.</span></h2>
          <p>Artista, psicóloga e pesquisadora das áreas de filosofia e gênero. Minha clínica se pauta na escuta da palavra e do corpo, no acolhimento e da busca por sentido. Se você procura uma terapia acolhedora e mais profunda, seu lugar é aqui!</p>
          <a href="#more-info-box" className='underlined-a' id='more-info-a'
                  onClick={displayMoreInfo}
                  aria-expanded={isMoreInfoDisplayed}
                  aria-controls="more-info"
                  >Mais informações
                  <span>{ isMoreInfoDisplayed ? <IconArrowNarrowDown stroke={1.5} />  : <IconArrowNarrowRight stroke={1.5} /> }
                  </span>
          </a>
        </div>
        <div id='hug-img-box'>
          <img id='hug-img' src={vanePageImg} alt="Vanessa hugging her friend" />
        </div>
      </div>
        { isMoreInfoDisplayed && (
          <div id='more-info-box'>
            <div id='more-info-txt'>
              <div id='bio-img'>
                <img id='more-info-pic' src={moreInfoImg} alt="" />
              </div>
              <div id='bio-txt'>
                <h2>Minha clínica nasce do encontro entre a escuta, a sensibilidade e a<span className='colored-italic'> busca por sentido.</span></h2>
                <p className='more-info-p'>Graduada em Psicologia Filosofia Licenciatura pela Universidade de Brasília, especialista em Psicologia Analítica pelo Instituto Junguiano de Ensino e Pesquisa ( IJEP), é mestranda na área de Filosofia e Gênero pela Universidade de Brasília (UnB) e pela Universidade Federal do Rio de Janeiro (UFRJ), onde desenvolve pesquisas sobre subjetividade, filosofia e feminismo.</p>
                <p className='more-info-p'>Pintora com obras em diversos países, Vanessa compreende a arte como uma forma de expressão potente e criativa. Sua clínica tem como foco a escuta de mulheres e a população LGBTQIA+, tendo também desenvolvido importante trabalho como psicóloga e militante na área de saúde mental indígena. </p>
                <p className='more-info-p'>Sua prática integra sensibilidade, acolhimento e simbolização para uma compreensão mais profunda do ser e do sentir.</p>
                <div className="quote-txt">
                  <IconQuoteOpen id='quote-icon' stroke={1.5} />
                  <p className='more-info-quote'>Só aquilo que somos realmente tem o poder de curar-nos <p>C. G. Jung</p></p>
                </div>
              </div>
            </div>
            <div id="more-info-footer">
              {footerArray.map((card) => {
                const FooterIcon = card.icon

                return (
                  <div className='more-info-footer-card' key={card.title}>
                    <FooterIcon className='footer-icon' stroke={1.5} />
                    <div className='footer-card-wrapper'>
                      <h3>{card.title}</h3>
                      <p>{card.description}</p>
                    </div>
                  </div>
                )
              })}

              <a className="page-btn" href='https://calendly.com/psivanessadigiorno/30min' target='_blank' rel="noopener noreferrer">
                <IconCalendarEvent stroke={1.5} />
                <span className="btn-txt">Agendar Consulta</span>
              </a>
            </div>
          </div>
          )}
    </div>
    </>
  )
}