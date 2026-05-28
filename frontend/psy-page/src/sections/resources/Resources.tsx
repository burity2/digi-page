import './resources.css'
import type { TablerIcon } from '@tabler/icons-react'
import { IconArrowNarrowRight, IconDownload } from '@tabler/icons-react';

import watercolorImg from '../../assets/pictures/watercolor.jpeg'
import partyImg from '../../assets/pictures/party.jpeg'
import workshopImg from '../../assets/pictures/workshop.jpeg'

type ResourceCard = {
  img: string,
  resource_type: string,
  resource_name:  string,
  resource_cta: string,
  cta_icon: TablerIcon
}

const resourceArray: ResourceCard[] = [
{img: watercolorImg, resource_type: 'WORKSHEET', resource_name: 'How painting will cure your anxiety', resource_cta: '5 min read', cta_icon:IconDownload },
{img: partyImg, resource_type: 'PDF', resource_name: 'therapists  autumn meet & greet', resource_cta: 'photoshoot', cta_icon:IconDownload },
{img: workshopImg, resource_type: 'TEXT', resource_name: 'How it\'s like to be with Vanessa', resource_cta: '10 min read', cta_icon:IconDownload },
]

export default function Resources() {
  return (
    <>
    <div className="resources-box">
      <div className="resources-txt">
        <h4>RESOURCES</h4>
        <h2>Tools and reads to support your wellbeing</h2>
        <button>Ver todos os recursos<span><IconArrowNarrowRight stroke={1.5} /></span></button>
      </div>
      <div className="resources-cards">
          {resourceArray.map((res) => {
          const ResIcon = res.cta_icon
          return (
            <div className="res-card" key={res.resource_name}>
              <img className='res-img' src={res.img} alt="resource cover" />
              <div className='res-txt'>
                <h4>{res.resource_type}</h4>
                <h2>{res.resource_name}</h2>
                <div className='res-cta-wrapper'>
                  <p>{res.resource_cta}</p>
                  <ResIcon className='res-icon' stroke={1} />
                </div>
              </div>
            </div>
          )
        })}
        </div>
    </div>
    </>
  )
}