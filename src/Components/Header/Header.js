import React, { useState } from "react"
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState()
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className=''>
            <h3 className=''>s h a k i b</h3>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
            
              <li>
              <Link to='/'>Home</Link></li>
              
              <li>
                <a href='#projects'>projects</a>
              </li>
          <li>
          <Link to='/blogs'>Blogs</Link>

          </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='btn btn-warning shadow'><a target ="_blank " href="https://drive.google.com/file/d/1ILTu_dPTHIjFvFq3gP0sXYbdhM5H1ztt/view?usp=sharing" >Resume</a></button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header