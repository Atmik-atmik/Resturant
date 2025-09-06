import React from 'react'
import {Link} from "react-router-dom"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const About = () => {
  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading"></h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className='mid'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat harum asperiores eligendi nam culpa obcaecati iure ipsum modi adipisci sequi. Cumque quis consequuntur nobis rem dolor dolorum dicta ipsam repellat praesentium alias laudantium accusamus totam minima labore ipsa eius aut obcaecati, error quia veritatis? Quia quisquam repellendus provident iste minus.
          </p>
          <Link to= {"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowNarrowRight/>
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
      
    </section >
  )
}

export default About
