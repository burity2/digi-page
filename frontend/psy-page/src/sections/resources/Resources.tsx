import './resources.css'

import watercolorImg from '../../assets/pictures/watercolor.jpeg'
import partyImg from '../../assets/pictures/party.jpeg'
import MeetImg from '../../assets/pictures/meet.jpg'
import personImg from '../../assets/pictures/person.jpg'
import profileImg from '../../assets/pictures/profile-art.jpg'
import readingImg from  '../../assets/pictures/reading.jpg'
import watercolorTwoImg from '../../assets/pictures/watercolor-2.jpg'
import carrotImg from '../../assets/pictures/carrot.jpg'
import readingTwoImg from '../../assets/pictures/reading-2.jpg'
import vaneTwoImg from '../../assets/pictures/vane-hold-art.jpg'
import meetTwoImg from '../../assets/pictures/ws2.jpg'
import workshopImg from '../../assets/pictures/workshop.jpg'

type ResourceCard = {
  img: string,
  alt:  string,
  id: number
}

const resourceArray: ResourceCard[] = [
{img: watercolorImg, alt: 'watercolor portrait', id: 1},
{img: partyImg, alt: 'people partying on a sunny place', id: 2},
{img: MeetImg, alt: 'friends laughing', id: 3 },
{img: profileImg, alt: 'Vanessa and her watercolors', id: 4 },
{img: readingTwoImg, alt: 'Vanessa reading', id: 5 },
{img: vaneTwoImg, alt: 'Vanessa showing her painting', id: 6 },
{img: carrotImg, alt: 'Girl showing her painting', id: 7 },
{img: personImg, alt: 'Woman showing her painting', id: 8 },
{img: readingImg, alt: 'Vanessa and her book', id: 9 },
{img: watercolorTwoImg, alt: 'watercolor of a greek vase and oranges', id: 10 },
{img: workshopImg, alt: 'people painting in groups', id: 11 },
{img: meetTwoImg, alt: 'friends laughing', id: 12 },
]

export default function Resources() {
  return (
    <>
    <div className="resources-box">
      <div className="resources-cards">
          {[...resourceArray, ...resourceArray].map((res) => {
          return (
            <div className="res-card" key={res.id}>
              <img className='res-img' src={res.img} alt={res.alt} />
            </div>
          )
        })}
        </div>
    </div>
    </>
  )
}