import React, { useState, useEffect } from 'react'
import SlideLetters from '../common/SlideLetters'
import ScrollAnimation from 'react-animate-on-scroll'
import projects from '../../packages/projects.json'

const ProJectItem = props => {
  return (
    <ScrollAnimation
      animateIn={'animate__slideInLeft'}
      animateOnce={true}
      delay={100}
      duration={1}
    >
      <div className="project-section__block__item">
        <a
          href={props.data.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          <div>{props.data.name}</div>
          <div>{props.data.name}</div>
        </a>
        <span className="badge">{props.data.tech}</span>
        <img
          src={props.data.image}
          alt={props.data.name}
          style={{
            top: props.location[1],
            left: props.location[0]
          }}
        />
      </div>
    </ScrollAnimation>
  )
}

const ProjectSection = () => {
  const [location, setLocation] = useState([0, 0]);

  useEffect(() => {
    window.addEventListener('mousemove', e => {
      setLocation([e.clientX, e.clientY])
    })
  }, [])

  return (
    <section className="project-section" id="inspirations">
      <div className="project-section__block">
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'section__number'}
          data={'03'}
          duration={0.5}
          size={1.6}
        />
        <SlideLetters
          animation={'animate__slideInUp'}
          containerClass={'section__title'}
          data={'Inspirations'}
          delay={50}
          duration={1}
          size={6.6}
        />
        {
          projects.map(
            (project, i) => (
              <React.Fragment key={i}>
                <SlideLetters
                  animation={'animate__slideInUp'}
                  containerClass={'project-section__block__year'}
                  data={project.year}
                  duration={0.5}
                  size={1.6}
                />
                <div className="project-section__block__list">
                  {
                    project.data.map(
                      data => (
                        <ProJectItem
                          key={data.id}
                          data={data}
                          location={location}
                        />
                      )
                    )
                  }
                </div>
              </React.Fragment>
            )
          )
        }
        <ScrollAnimation
          animateIn={'animate__slideInUp'}
          animateOnce={true}
          duration={2}
        >
          <div className="project-section__block__funny-text">
            <span>Jaw-dropping works huh</span>
            <span
              role="img"
              aria-label="clap"
            >
              👏
            </span>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}

export default ProjectSection
