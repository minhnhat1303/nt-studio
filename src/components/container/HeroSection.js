import React, { useState, useRef, useEffect } from 'react'
// import { AiOutlineFacebook } from 'react-icons/ai'
import {
  DiJavascript1,
  DiJqueryLogo,
  DiNodejs,
  DiMysql,
  DiMongodb,
  DiPhotoshop,
  DiIllustrator
} from 'react-icons/di'
import {
  FaHtml5,
  FaNpm,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
  FaPhp,
  FaLaravel,
  FaGithub,
  FaBitbucket,
  FaWordpressSimple,
  FaWindows,
  FaApple,
  FaGitlab,
} from 'react-icons/fa'
import { FiFigma } from 'react-icons/fi'
import { 
  SiNextDotJs,
  SiRedux,
  SiSass, 
  SiTypescript,
  SiAdobexd,
} from 'react-icons/si'

const waitingTime = 5000

const titleList = ["I'M", 'NHAT', 'TRAN']

const scriptList = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <DiJavascript1 />,
  <FaBootstrap />,
  <DiJqueryLogo />,
  <SiSass />,
  <SiTypescript />,
  <FaReact />,
  <SiRedux />,
  <SiNextDotJs />,
  <DiNodejs />,
  <FaNpm />,
  <FaPhp />,
  <FaLaravel />,
  <FaWordpressSimple />,
  <DiMysql />,
  <DiMongodb />,
  <FaGithub />,
  <FaGitlab />,
  <FaBitbucket />,
  <FaWindows />,
  <FaApple />,
  <DiPhotoshop />,
  <DiIllustrator />,
  <SiAdobexd />,
  <FiFigma />,
]

const TitleItem = props => {
  const titleElement = useRef()

  useEffect(() => {
    setTimeout(() => {
      titleElement.current.classList.remove('--hidden')
    }, props.wait)
  }, [props.wait])

  return (
    <div
      className="hero__title --hidden"
      ref={titleElement}
    >
      {props.data}
    </div>
  )
}

const HeroSection = () => {
  const [hidden, setHidden] = useState(true)
  const [scaleUp, setScaleUp] = useState(true)
  const [h, setH] = useState('');
  const [m, setM] = useState('');

  setTimeout(() => {
    setHidden(false)
  }, waitingTime)

  setTimeout(() => {
    setScaleUp(false)
  }, waitingTime - 1000)

  setInterval(() => {
    let today = new Date();
    setH(today.getHours() < 10 ? `0${today.getHours()}` : today.getHours())
    setM(today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes())
  }, 1000)

  return (
    <section className="hero-section" id="home">
      <img
        className={`hero__bg${scaleUp ? ' --scale-up' : ''}`}
        src="/images/hero.jpg"
        alt="nt-studio-hero-background"
      />
      <div className="hero__backdrop"></div>
      <div className="hero__block--top">
        <div className="hero__header">
          <div className={`hero__language${hidden ? ' --hidden' : ''}`}>
            <div>Time ?</div>
            <div>
              {`${h} : ${m}`}
            </div>
          </div>
        </div>
        <div className="hero__body">
          <div className={`hero__sub-title${hidden ? ' --hidden' : ''}`}>Welcome</div>
          {
            titleList.map(
              (titleItem, i) => (
                <TitleItem
                  key={i}
                  data={titleItem}
                  wait={waitingTime + (i + 1) * 150}
                />
              )
            )
          }
        </div>
      </div>
      <div className="hero__block--bottom">
        <div className="hero__call-me">
          <a
            className={`hero__call-me--scalable${hidden ? ' --hidden' : ''}`}
            href="tel:+84963597534"
          >
            SHOUT ME
          </a>
        </div>
        <div className="hero__introduction">
          <div className={`hero__introduction__text${hidden ? ' --hidden' : ''}`}>
            <div>
              <div className="hero__tech-list">
                {
                  scriptList.map(
                    (script, i) => <div key={i}>{script}</div>
                  )
                }
              </div>
            </div>
          </div>
          <div className="hero__introduction__location">
            <div className={`hero__introduction__location__text${hidden ? ' --hidden' : ''}`}>
              <div>VIETNAM</div>
              <div>HCMC</div>
            </div>
            <div className={`hero__introduction__location__number${hidden ? ' --hidden' : ''}`}>
              <div>10.797017819507223, 106.67054056898473</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection