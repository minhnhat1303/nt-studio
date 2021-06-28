import React, { useState, useEffect } from 'react'
import NavItem from './sidebar/NavItem'
import {
  FaFacebookF,
  FaLinkedinIn,
  FaSkype
} from 'react-icons/fa'

const waitingTime = 5000

const navList = [
  ['home', 'Start'],
  ['nt-studio', 'Nt. Studio'],
  ['inspirations', 'Inspirations'],
  ['can-do', 'Can Do'],
]

const Sidebar = () => {
  const [hidden, setHidden] = useState(true)
  const [hArr, setHArr] = useState([0, 0, 0, 0])

  const switchMenu = element => {
    document.querySelector('.sidebar__nav__item.--active').classList.remove('--active')
    element.classList.add('--active')
  }

  setTimeout(() => {
    setHidden(false)
  }, waitingTime)

  useEffect(() => {
    let navElementList = document.querySelectorAll('.sidebar__nav__item')
    navElementList[0].classList.add('--active')

    let yOffsetArr = [];
    navList.forEach(navItem => {
      let sectionElement = document.querySelector(`#${navItem[0]}`)
      let yOffset = sectionElement.offsetTop
      yOffsetArr.push(yOffset)
    })
    setHArr(yOffsetArr)

    window.addEventListener('scroll', () => {
      scrollHanlder(navElementList, yOffsetArr)
    })

    const scrollHanlder = (navs, ys) => {
      let currentYOffset = document.documentElement.scrollTop
      if (currentYOffset + 200 < ys[1]) {
        switchMenu(navs[0])
      } else if (currentYOffset + 200 < ys[2]) {
        switchMenu(navs[1])
      } else if (currentYOffset + 200 < ys[3]) {
        switchMenu(navs[2])
      } else {
        switchMenu(navs[3])
      }
    }
  }, [])

  return (
    <aside className="sidebar">
      <div className="sidebar__brand">
        <div className={hidden ? '--hidden' : ''}>
          <span>N<sup>t</sup></span>
        </div>
      </div>
      <div className="sidebar__nav">
        <div className={`sidebar__nav__heading${hidden ? ' --hidden' : ''}`}>MENU</div>
        <ul className="sidebar__nav__list">
          {
            navList.map(
              (navItem, i) => (
                <NavItem
                  key={i}
                  data={navItem}
                  yOffset={hArr[i]}
                  wait={waitingTime + (i + 1) * 100}
                />
              )
            )
          }
        </ul>
      </div>
      <div className="sidebar__copyright">
        <div className="sidebar__copyright__info">
          <a
            href="tel:+84963597534"
            className={`${hidden ? ' --hidden' : ''}`}
          >
            Phone: +84963597534
          </a>
          <a
            href="mailto:trandangminhnhat.dev@gmail.com"
            className={`${hidden ? ' --hidden' : ''}`}
          >
            Mail: trandangminhnhat.dev@gmail.com
          </a>
        </div>
        <div className="sidebar__copyright__social-links">
          <a
            href="https://www.facebook.com/nhattdmdev//"
            className={`${hidden ? ' --hidden' : ''}`}
            rel="canonical"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.linkedin.com/in/nhattdm1303/"
            className={`${hidden ? ' --hidden' : ''}`}
            rel="canonical"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://join.skype.com/invite/xgfiVGfERRO2"
            className={`${hidden ? ' --hidden' : ''}`}
            rel="canonical"
          >
            <FaSkype />
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar