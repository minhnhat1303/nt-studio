import React from 'react'
import Intro from './components/Intro'
import BackgroundCover from './components/BackgroundCover'
import Sidebar from './components/Sidebar'
import Container from './components/Container'
import 'animate.css/animate.min.css'
import './styles/main.scss'

const App = () => {
  return (
    <React.Fragment>
      <Intro />
      <BackgroundCover />
      <Sidebar />
      <Container />
    </React.Fragment>
  )
}

export default App
