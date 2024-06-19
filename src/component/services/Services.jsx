import React from 'react'
import './serives.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What Skills I have</h5>
      <h2>Skills</h2>

      <div className="container skills__container">
        <article className="skills">
          <div className="skill__head">
            <h3>Data Structures & Algorithms</h3>
          </div>

          <ul className="skills__lists">
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Solved 1000+ problems on Leetcode based on DSA</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>A coding score of 1000+ on Geeks For Geeks</p>
            </li>
            
          </ul>
        </article>


        <article className="skills">
          <div className="skill__head">
            <h3>Development</h3>
          </div>

          <ul className="skills__lists">
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Well Equpped with Knowledge in HTML,CSS and Javascript</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>One Year Experience of Backend Technologies like Node,Express and MongoDB</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Expertse in ReactJs using Which I made This Portfolio Website</p>
            </li>
          </ul>
        </article>


        <article className="skills">
          <div className="skill__head">
            <h3>Competitive Programming</h3>
          </div>

          <ul className="skills__lists">
            <li>
              <BiCheck className='skills__list-icon' />
              <p>Pupil On Codeforces(Max-1315)</p>
            </li>
            <li>
              <BiCheck className='skills__list-icon' />
              <p>3-star raing on CodeChef(Max-1653)</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
