import React from 'react'

const serviceArr = [
  'S.E.O',
  'WEBSITE DESIGN',
  'MULTIPLE DEVICES',
  'MODERN UI/UX'
]

let services = []

serviceArr.forEach(
  (item, i) => {
    if (i < 4) {
      services.push(
        <div
          className={`intro__main-container__item --face-${i + 1}`}
          key={i}
        >
          {item}
        </div>
      )
    } else {
      return
    }
  }
)

const MainIntro = () => {
  return (
    <div className="intro__main-container">
      {services}
    </div>
  )
}

export default MainIntro