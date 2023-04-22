import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/data"

export const About = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='about__left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='about__right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button className='about__button' type='button'>
                  <a
                    className='about__link about__link_silver'
                    href='https://gregorybv.github.io/my-portfolio/'
                  >
                    Learn more
                  </a>
                </button>
                <button type='button' className='about__button primaryBtn'>
                  <a
                    className='about__link'
                    href='https://gregorybv.github.io/react-portfolio/'
                  >
                    Find out more
                  </a>
                </button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
