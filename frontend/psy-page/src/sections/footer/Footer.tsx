import './footer.css'
import type { TablerIcon } from '@tabler/icons-react'

import { IconBrandInstagram, IconBrandLinkedin, IconMapPin, IconMail, IconPhone } from '@tabler/icons-react';

type ContactCard = {
  icon: TablerIcon,
  info: string,
  id: 'location' | 'email' | 'phone'
}

const ContactArray: ContactCard[] = [
  {icon: IconMapPin, info: 'Brasília, DF — Brasil', id: 'location' },
  {icon: IconMail, info: 'hello@vanessadigimon.com', id: 'email'},
  {icon: IconPhone, info: '+55 (61) 98765-4321', id: 'phone'},
  ]

export default function Footer() {
  return (
    <>
    <div id="footer-box">
      <div id='footer-txt' className='footer-card'>
        <h3>Let's stay connected</h3>
        <p>If you have any questions or want to schedule a consultation, reach out.</p>
     </div>
      <div id='footer-contact' className='footer-card'>
        {ContactArray.map((channel) => {
          const ContactIcon = channel.icon

          return (
            <div className="contact-card" key={channel.id}>
              <ContactIcon className='contact-icon' stroke={1} />
              <p>{channel.info}</p>
            </div>
          )
        })}
      </div>
      <div id='footer-links' className='footer-card'>
        <h3>Me siga</h3>
        <div id='link-btn-wrapper'>
          <button className='link-btn'><IconBrandInstagram className='follow-icon' stroke={1.5} /></button>
          <button className='link-btn'><IconBrandLinkedin className='follow-icon' stroke={1.5} /></button>
        </div>
      </div>
    </div>
    </>
  )
}