import './icons.css'
import type { TablerIcon } from '@tabler/icons-react'

import { IconAtom, IconAtom2, IconHeartHandshake, IconMessageCircleHeart } from '@tabler/icons-react';

type ApproachCard = {
  icon: TablerIcon,
  title: string,
  description: string
}

const approachArray: ApproachCard[] = [
  {icon: IconAtom, title: 'Evidence-based', description: 'Grounded in research and tailored to you.' },
  {icon: IconHeartHandshake, title: 'Compassionate', description: 'A warm, non-judgmental space to feel heard.'},
  {icon: IconAtom2, title: 'Holistic', description: 'Addressing mind, body, and emotional wellbeing.'},
  {icon: IconMessageCircleHeart, title: 'Collaborative', description: 'Working together toward insight and change.'}
]

export default function Icon() {
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
    </div>
    </>
  )
}
