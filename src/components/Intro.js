import React, { useState } from 'react'
import SlideLetters from './common/SlideLetters'
import MainIntro from './intro/MainIntro'

const Intro = () => {
  const [hidden, setHidden] = useState(false);

  setTimeout(() => {
    setHidden(true)
  }, 4000)

  return (
    <div className={`intro${hidden ? ' --hidden' : ''}`}>
      <SlideLetters
        animation={'animate__slideInUp'}
        containerClass={'intro__title'}
        data={'Nt. Studio'}
        duration={0.5}
        size={1.6}
      />
      <MainIntro />
      <SlideLetters
        animation={'animate__slideInUp'}
        containerClass={'intro__sub-title'}
        data={'Vietnam ©2020'}
        duration={0.5}
        size={1}
      />
    </div>
  )
}

export default Intro