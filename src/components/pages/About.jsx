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
                <button>Download CV</button>
                <button className='primaryBtn'>Download CV</button>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}