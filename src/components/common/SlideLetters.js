import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const SlideLetters = props => {
  const [data, setData] = useState([])

  useEffect(() => {
    let dataStr = props.data
    setData(dataStr.split(''))
  }, [props.data])

  return (
    <div
      className={props.containerClass ? props.containerClass : ''}
      style={{
        height: props.size ? `${props.size}rem` : '1.6rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
      }}
    >
      {
        data.map(
          (item, i) => (
            <ScrollAnimation
              key={i}
              animateIn={props.animation}
              animateOnce={true}
              duration={props.duration ? props.duration : 1}
              style={{
                width: item === ' ' ? `${props.size / 4}rem` : 'auto',
                lineHeight: props.size ? `${props.size}rem` : '1.6rem'
              }}
            >
              {item}
            </ScrollAnimation>
          )
        )
      }
    </div>
  )
}

export default SlideLetters