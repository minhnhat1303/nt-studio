import React from 'react'
import SlideLetters from '../common/SlideLetters'
import SlidePara from '../common/SlidePara'
import ScrollAnimation from 'react-animate-on-scroll'

const styleList = [
  ['Anybody', 'Growth / Profit'],
  ['Anywhere', 'Worldwide'],
  ['Anytime', '24/7']
]

const freelanceList = [
  'Website Design',
  'Multiple Devices',
  'Modern UI/UX',
  'S.E.O'
]

const AboutSection = () => {
  return (
    <section className="about-section" id="nt-studio">
      <div className="about-section__block">
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'section__number'}
          data={'02'}
          duration={0.5}
          size={1.6}
        />
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'section__title'}
          data={'Nt. Studio'}
          duration={1}
          size={6.6}
        />
        <SlidePara
          animation={'animate__slideInUp'}
          containerClass={'about-section__block__content'}
          data={`I'm a web developer. I share my passion for high-quality products and I'll be happy to help clients with what I do best.`}
          duration={1}
          size={2.4}
        />
        <SlidePara
          animation={'animate__slideInUp'}
          containerClass={'about-section__block__sub-content'}
          data={'I have been doing this over 2 years helping clients worldwide grow their business and make profit.'}
          duration={1}
          size={1.5}
        />
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'about-section__block__sub-title'}
          data={'Freelances for'}
          duration={0.5}
          size={1.6}
        />
        <div className="about-section__block__list">
          {
            styleList.map(
              (item, i) => (
                <ScrollAnimation
                  key={i}
                  animateIn={'animate__slideInLeft'}
                  animateOnce={true}
                  duration={1}
                >
                  <div className="about-section__block__item">
                    <span>{item[0]}</span>
                    <span>{item[1]}</span>
                  </div>
                </ScrollAnimation>
              )
            )
          }
        </div>
        <div className="about-section__block__sub-list">
          {
            freelanceList.map(
              (item, i) => (
                <SlideLetters
                  key={i}
                  animation={'animate__slideInUp'}
                  containerClass={'about-section__block__sub-item'}
                  data={item}
                  duration={0.5}
                  size={1.6}
                />
              )
            )
          }
        </div>
        <ScrollAnimation
          animateIn={'animate__slideInUp'}
          animateOnce={true}
          duration={2}
        >
          <div className="about-section__block__funny-text">
            <span>Good things comes to down-scrollers</span>
            <span
              role="img"
              aria-label="lmao"
            >
              😂
          </span>
          </div>
        </ScrollAnimation>
      </div>
    </section >
  )
}

export default AboutSection