import React, { useRef, useEffect } from 'react'

const NavItem = props => {
  const navElement = useRef()

  const clickHandler = y => {
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    setTimeout(() => {
      navElement.current.classList.remove('--hidden')
    }, props.wait);
  }, [props.wait])

  return (
    <li
      className="sidebar__nav__item --hidden"
      ref={navElement}
      onClick={() => clickHandler(props.yOffset)}
    >
      <div>{props.data[1]}</div>
      <div>{props.data[1]}</div>
    </li>
  )
}

export default NavItem