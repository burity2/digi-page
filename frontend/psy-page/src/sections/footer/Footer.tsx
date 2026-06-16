import './footer.css'
import type { TablerIcon } from '@tabler/icons-react'

import { IconBrandInstagram, IconBrandLinkedin, IconMapPin, IconMail, IconPhone, IconBrandWhatsapp } from '@tabler/icons-react';

type ContactCard = {
  icon: TablerIcon,
  info: string,
  link?: string,
  id: 'location' | 'email' | 'phone'
}

const ContactArray: ContactCard[] = [
  {icon: IconMapPin, info: 'Brasília, DF — Brasil', id: 'location' },
  {icon: IconMail, info: 'psivanessadigiorno@gmail.com', link:'mailto:psivanessadigiorno@gmail.com', id: 'email'},
  {icon: IconPhone, info: '+55 (61) 8241-8519', link:'https://api.whatsapp.com/send/?phone=556182418519&text&type=phone_number&app_absent=0&utm_source=ig', id: 'phone'},
  ]

export default function Footer() {
  return (
    <>
    <div id="footer-box">
      <div id='footer-txt' className='footer-card'>
        <h3>Se interessou?</h3>
        <p>Me manda uma mensagem e vamos trocar contato!</p>
     </div>
      <div id='footer-contact' className='footer-card'>
        {ContactArray.map((channel) => {
          const ContactIcon = channel.icon
          return (
            <a className="contact-card" key={channel.id} href={channel.link} target='_blank' rel="noopener noreferrer">
              <ContactIcon className='contact-icon' stroke={1} />
              <p>{channel.info}</p>
            </a>
          )
        })}
      </div>
      <div id='footer-links' className='footer-card'>
        <h3>Me encontre nas redes sociais:</h3>
        <div id='link-btn-wrapper'>
          <a className='link-btn' href='https://www.instagram.com/vanessa_digiornu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target='_blank' rel="noopener noreferrer"><IconBrandInstagram className='follow-icon' stroke={1.5} /></a>
          <a className='link-btn' href='https://www.linkedin.com/in/vanessa-di-giorno-040423282?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel="noopener noreferrer"><IconBrandLinkedin className='follow-icon' id='ig-icon' stroke={1.5} /></a>
          <a className='link-btn' href='https://api.whatsapp.com/send/?phone=556182418519&text&type=phone_number&app_absent=0&utm_source=ig' target='_blank' rel="noopener noreferrer"><IconBrandWhatsapp className='follow-icon' id='wa-icon' stroke={1.5} /></a>
        </div>
      </div>

    </div>
    <p className='rights-p'>© 2025 Vanessa Di Giorno. Todos os direitos reservados.</p>
    </>
  )
}