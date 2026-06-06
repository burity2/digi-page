import './about.css'
import vanePageImg from '../../assets/pictures/party.jpeg'
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
  {icon: IconLeaf, title: '5+', description:'years of experience'},
  {icon: IconMessages, title: '500+', description:'sessions conducted'},
  {icon: IconUsers, title: 'Adults & Children', description:'in-person and online'}
]


export default function About({ isMoreInfoDisplayed, displayMoreInfo }: AboutProps) {
  return (
    <>
    <div id='full-about-box'>
      <div id="about-box">
        <div id="about-txt">
          <h4>SOBRE MIM</h4>
          <h2>I’m Vanessa Di Giornu, a psychiatrist dedicated to <span className='colored-italic'>meaningful change.</span></h2>
          <p>I create a safe, collaborative space where you can feel truly heard. My approach integrates clinical expertise with empathy to help you understand yourself and move forward with confidence.</p>
          <a href="#more-info" className='underlined-a' id='more-info-a'
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
                <h2>This is a important phrase about<span className='colored-italic'> myself.</span></h2>
                <p className='more-info-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi obcaecati ullam consequuntur! A corporis quaerat debitis vitae. Doloribus ipsam deleniti saepe neque error labore quisquam? Nostrum laborum et illum doloremque?</p>
                <p className='more-info-p'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque praesentium vero doloribus eveniet ex rerum, magni ab amet optio pariatur velit veritatis, ut ipsam, qui autem maiores cum nesciunt. Facilis.</p>
                <p className='more-info-p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sint architecto voluptas hic illum veniam sequi explicabo officiis ex autem eius odio in, perspiciatis quas impedit rem non natus illo.</p>
                <div className="quote-txt">
                  <IconQuoteOpen id='quote-icon' stroke={1.5} />
                  <p className='more-info-quote'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, labore quia minima nostrum consequatur minus aspernatur quo nulla cum.</p>
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

              <button className="page-btn">
                <IconCalendarEvent stroke={1.5} />
                <span className="btn-txt">Agendar Consulta</span>
              </button>
            </div>
          </div>
          )}
    </div>
    </>
  )
}