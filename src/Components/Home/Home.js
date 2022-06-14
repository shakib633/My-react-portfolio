import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"
import Skills from './../../Skills/Skills';
import { Button } from "react-bootstrap"
import Skill from "../../Skills/Skill"
import Contact from "../Contact/Contact"
import Projects from './../Projects/Projects';
import Blogs from "../Blogs/Blogs"
import Footer from "../Footer/Footer"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>

        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Md Shakib Ahamed</span>
            </h1>
            <h2>
              a 
              <span>
                <Typewriter words={["Jr. MERN Stack Developer.", " Jr. Frontend Developer (react.Js)"]} loop cursor cursorStyle='..' typeSpeed={70} deleteSpeed={50} delaySpeed={500} />class
              </span>
            </h2>
            <a target ="_blank " href="https://drive.google.com/file/d/1ILTu_dPTHIjFvFq3gP0sXYbdhM5H1ztt/view?usp=sharing" ><Button className="btn btn-warning fw-bold mt-5">Resume</Button></a>


            <p>Hi, My name's MD Shakib Ahamed. I am a student at Southwest Forestry University which is located in Yunnan Province, China. My major is Computer Science and Technology. When I was in the first year I started coding & then I loved to do coding and I wanted to be a web developer. During my spare time, I used to watch coding concepts and how to make websites. And I planned to do some work included with web development and I made a few projects according to the web development. And now I am good at Html5, Css3, React.Js, Bootstrap, Tailwind, React Router, Rest API, Node.Js, Express.Js, MongoDB, Firebase, and Stripe. And I have to plan to learn Python and Django & Also PHP. So now I want to join A Farm as a Developer as I can learn new features & i can Develop my skill & can utilize my Current skills</p>
            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND WITH ME</h4>
                <div className='button'>
                <a target="_blank " href="https://www.facebook.com/shakib633"> <button className='btn_shadow'><i className='fab fa-facebook'></i></button></a>
                   <a target="_blank "  href="https://www.instagram.com/s_h_uvo/"> <button className='btn_shadow'><i className="fab fa-instagram"></i></button></a>
                   <a target="_blank "  href="https://github.com/shakib633"> <button className='btn_shadow'>                       <i target="_blank "className='fab fa-github'></i></button></a>
                   <a  href="https://www.linkedin.com/in/shakib633/"> <button className='btn_shadow'><i className='fab fa-linkedin'></i></button></a>
                </div>
              </div>
              
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
        <div>
        </div>
        <Skills></Skills>
         <Projects></Projects>

        <Contact></Contact>
      </section>
      <Footer></Footer>
    </>
  )
}

export default Home