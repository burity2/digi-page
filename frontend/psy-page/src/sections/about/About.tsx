import './about.css'
import vanePageImg from '../../assets/pictures/party.jpeg'
import { IconArrowNarrowDown, IconArrowNarrowRight } from '@tabler/icons-react';

type AboutProps = {
  isMoreInfoDisplayed: boolean
  displayMoreInfo: () => void
}



export default function About({ isMoreInfoDisplayed, displayMoreInfo }: AboutProps) {
  return (
    <>
    <div id='full-about-box'>
      <div id="about-box">
        <div id="about-txt">
          <h4>SOBRE MIM</h4>
          <h2>I’m Vanessa Di Giornu, a psychiatrist dedicated to <span id='colored-italic'>meaningful change.</span></h2>
          <p>I create a safe, collaborative space where you can feel truly heard. My approach integrates clinical expertise with empathy to help you understand yourself and move forward with confidence.</p>
          <button className='underlined-a'
                  onClick={displayMoreInfo}
                  aria-expanded={isMoreInfoDisplayed}
                  aria-controls="more-info"
                  >Mais informações
                  <span>{ isMoreInfoDisplayed ? <IconArrowNarrowDown stroke={1.5} />  : <IconArrowNarrowRight stroke={1.5} /> }
                  </span>
          </button>
        </div>
        <div id='hug-img-box'>
          <img id='hug-img' src={vanePageImg} alt="Vanessa hugging her friend" />
        </div>
      </div>
        { isMoreInfoDisplayed && (
          <div id='more-info'>
            <div id='more-info-txt'>
              <div id='bio-txt'>
                <h2><span></span></h2>
                <p></p>
                <p></p>
              </div>
              <div id='bio-icons'></div>
            </div>
            <div id="more-info-footer"></div>
          </div>
          )}
    </div>
    </>
  )
}