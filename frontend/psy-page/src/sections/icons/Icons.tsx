import './icons.css'
import type { TablerIcon } from '@tabler/icons-react'

import { IconArrowNarrowRight, IconArrowNarrowDown, IconAtom, IconAtom2, IconHeartHandshake, IconMessageCircleHeart } from '@tabler/icons-react';

type IconProps = {
  isApproachDisplayed: boolean
  displayApproach: () => void
}

type ApproachCard = {
  icon: TablerIcon,
  title: string,
  description: string
}

const approachArray: ApproachCard[] = [
  {icon: IconAtom, title: 'Baseada em evidências', description: 'Base acadêmica adaptada a você.' },
  {icon: IconHeartHandshake, title: 'Acolhedora', description: 'Um espaço seguro e livre de julgamentos para te ouvir.'},
  {icon: IconAtom2, title: 'Holística', description: 'Atenção à mente, corpo e bem-estar emocional.'},
  {icon: IconMessageCircleHeart, title: 'Colaborativa', description: 'Trabalhando contigo por seu desenvolvimento.'}
]

export default function Icon({ isApproachDisplayed, displayApproach}: IconProps) {
  return (
    <>
    <div id='icon-box'>
      <h4>ABORDAGEM</h4>
      <div id='approach-card-box'>
        {approachArray.map((card) => {
          const CardIcon = card.icon

          return (
            <div className="approach-card" key={card.title}>
              <CardIcon className='card-icon' stroke={1} />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          )
        })}
      </div>
      <a href="#approach-info" className='underlined-a' id='more-info-a'
        onClick={displayApproach}
        aria-expanded={isApproachDisplayed}
        aria-controls="approach-info"
        >Sobre a abordagem
        <span>{ isApproachDisplayed ? <IconArrowNarrowDown stroke={1.5} />  : <IconArrowNarrowRight stroke={1.5} /> }
        </span>
      </a>
      {isApproachDisplayed && (
        <div id='approach-info'>
          <p>Fundada pelo psiquiatra e analista suíço <span className='approach-highlight'>Carl G. Jung</span>, a <span className='approach-highlight'>Psicologia Analítica ou Psicologia Profunda</span> atua através de uma
          <span className='approach-highlight'> integração profunda entre a consciência e as imagens inconscientes</span>, considerando as influências da <span className='approach-highlight'> cultura, arte, religião e dos sonhos </span>
           na composição do sujeito. Compreende que o adoecimento e a cura da psique – alma humana – se dão em contextos sociais e simbólicos e podem ser alcançados
          especialmente <span className='approach-highlight'>através da palavra, do desenho e dos sonhos</span>. A clínica junguiana privilegia uma escuta do sujeito de forma <span className='approach-highlight'>integral e profunda, valorizando suas produções
          simbólicas e imagéticas.</span></p>
        </div>
      )}
    </div>
    </>
  )
}
