import React from 'react'
import SlideLetters from '../common/SlideLetters'
import SlidePara from '../common/SlidePara'

const ContactSection = () => {
  return (
    <div className="contact-section" id="can-do">
      <div className="contact-section__block">
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'section__number'}
          data={'04'}
          duration={0.5}
          size={1.6}
        />
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'section__title'}
          data={'Can Do'}
          duration={1}
          size={6.6}
        />
        <SlidePara
          animation={'animate__slideInUp'}
          containerClass={'contact-section__block__content'}
          data={'Being your creative partner, we work together to expand your brand meaningful, effective, minimal and sophisticated solutions that works.'}
          duration={1}
          size={2.4}
        />
        <a
          href="mailto:trandangminhnhat.dev@gmail.com"
          className="contact-section__block__jelly-box"
          rel="canonical"
        >
          <div className="la-square-jelly-box">
            <div></div>
            <div></div>
          </div>
          <div className="contact-section__block__jelly-box__text">
            <div>LET'S DO THIS</div>
            <div>
              <span>TALK TO ME</span>
              <span
                role="img"
                aria-label="wonder"
              >
                ✍
              </span>
            </div>
          </div>
        </a>
        <div className="contact-section__block__funny-text">
          <span
            role="img"
            aria-label="wonder"
          >
            🤔
            </span>
          <span>Wondering what this red box is for? Try clicking it and see what it does. Seriously, just click it nooowww.</span>
        </div>
      </div>
    </div>
  )
}

export default ContactSection