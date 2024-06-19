import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'

const data = [
  {
    id: 1,
    image: img1,
    title: 'Github',
    profile: 'https://github.com/conceptualboyvikash'
  },
  {
    id: 2,
    image: img2,
    title: 'Linkedin',
    profile: 'https://www.linkedin.com/in/vikash-kumar-77b626221/'
  },
  {
    id: 3,
    image: img3,
    title: 'Codeforces',
    profile: 'https://codeforces.com/profile/conceptualboy_vikash'
  },
  {
    id: 4,
    image: img4,
    title: 'LeetCode',
    profile: 'https://leetcode.com/u/conceptualboyvikash/'
  },
  {
    id: 5,
    image: img5,
    title: 'Geeks for Geeks',
    profile: 'https://www.geeksforgeeks.org/user/conceptualboy_vikash/'
  },
  {
    id: 6,
    image: img6,
    title: 'CodeChef',
    profile: 'https://www.codechef.com/users/conceptulab_vi'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h2>My Profiles</h2>
      <div className="container profile__container">
        {
          data.map(({id,image,title,profile})=>{
            return (
              <article className="profile__item">
                <div className="profile__item-image">
                  <img src={image} alt="" />
                </div>
                <h3>{title}</h3>
                <a href={profile} className='btn btn-primary' target='_blank'>Profile</a>
            </article>
            )
          })
        }

        
      </div>
    </section>
  )
}

export default Portfolio


{/* <article className="profile__item">
          <div className="profile__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Github</h3>
          <a href="" className='btn btn-primary' target='_blank'>Profile</a>
        </article>

        <article className="profile__item">
          <div className="profile__item-image">
            <img src={img2} alt="" />
          </div>
          <h3>Linkedin</h3>
          <a href="" className='btn btn-primary' target='_blank'>Profile</a>
        </article>

        <article className="profile__item">
          <div className="profile__item-image">
            <img src={img3} alt="" />
          </div>
          <h3>Codeforces</h3>
          <a href="" className='btn btn-primary' target='_blank'>Profile</a>
        </article>

        <article className="profile__item">
          <div className="profile__item-image">
            <img src={img4} alt="" />
          </div>
          <h3>Leetcode</h3>
          <a href="" className='btn btn-primary' target='_blank'>Profile</a>
        </article>

        <article className="profile__item">
          <div className="profile__item-image">
            <img src={img5} alt="" />
          </div>
          <h3>Geeks for Geeks</h3>
          <a href="" className='btn btn-primary' target='_blank'>Profile</a>
        </article>

<article className="profile__item">
<div className="profile__item-image">
  <img src={img6} alt="" />
</div>
<h3>CodeChef</h3>
<a href="" className='btn btn-primary' target='_blank'>Profile</a>
</article> */}