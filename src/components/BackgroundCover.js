import React, { useState } from 'react'

let blocks = []

const blockNumber = 6

for (let i = 0; i < blockNumber; i++) {
  blocks.push(
    <div
      className="background-cover__block"
      key={i}
    >
      <div className="background-cover__block--scalable"></div>
    </div>
  )
}

const BackgroundCover = () => {
  const [scale, setScale] = useState(false)

  setTimeout(() => {
    setScale(true)
  }, 4000);

  return (
    <div className={`background-cover${scale ? ' --scale' : ''}`}>
      {blocks}
    </div>
  )
}

export default BackgroundCover