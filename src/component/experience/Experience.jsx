import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills in</h5>
      <h2>Development</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <artical className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Java-Script</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>JQuery</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <artical className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>NodeJs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>ExpressJs</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>Mongoose</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
            <artical className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icons'/>
              <div>
              <h4>NPM</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </artical>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
