import React, { useState, useEffect } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const SlidePara = props => {
  const [data, setData] = useState([])

  useEffect(() => {
    let dataStr = props.data
    setData(dataStr.split(' '))
  }, [props.data])

  return (
    <div
      className={props.containerClass ? props.containerClass : ''}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'baseline',
      }}
    >
      {
        data.map(
          (item, i) => (
            <div
              key={i}
              style={{
                marginRight: `${props.size / 4}rem`,
                height: props.size ? `${props.size}rem` : '1.6rem',
                lineHeight: props.size ? `${props.size}rem` : '1.6rem',
                overflow: 'hidden'
              }}
            >
              <ScrollAnimation
                key={i}
                animateIn={props.animation}
                animateOnce={true}
                duration={props.duration ? props.duration : 1}
              >
                {item}
              </ScrollAnimation>
            </div>
          )
        )
      }
    </div>
  )
}

export default SlidePara