import React from 'react'
import './Introduction.css'
import GithubLogo from '../../img/github.png';
import LinkedInLogo from '../../img/linkedin.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import BhushanImage from '../../img/bhushan.png';
import CrowEmoji from '../../img/crown.png';
import GlassesEmoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Introduction = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>
            Hi! I Am
          </span>
          <span>
            Bhushan Mahajan
          </span>
          <span>Experienced Full Stack Developer with ~ 2 years of expertise in designing, developing, and testing end-to-end mobile/web applications. Skilled in project management, delivering complex projects within tight deadlines, and utilizing the latest technologies to develop innovative solutions. Highly Passionate for learning and exploring new technologies.</span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <a href="https://www.linkedin.com/in/bhushan-mahajan1997/">
            <img src={LinkedInLogo} alt="" />
          </a>
          <a href="https://github.com/bhushan-r-mahajan">
            <img src={GithubLogo} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={BhushanImage} alt="" />
        <img src={GlassesEmoji} alt="" />
        <div style={{top: '-3%', left: '65%'}}>
          <FloatingDiv image={CrowEmoji} text1='Web' text2='Developer'/>
        </div>
        <div style={{top: '48%', left: '70%'}}>
          <FloatingDiv image={CrowEmoji} text1='Fullstack' text2='Developer'/>
        </div>
        <div style={{top: '88%', left: '18%'}}>
          <FloatingDiv image={CrowEmoji} text1='iOS' text2='Developer'/>
        </div>
        <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
        <div className='blur' style={{ background: '#C1F5FF', top: '15rem', width: '21rem', height: '11rem' }}></div>
        <div className='blur' style={{background: '#C1F5FF', top: '15rem', width: '21rem', height: '11rem', left: '-2rem'}}></div>
      </div>
     
    </div>
  )
}

export default Introduction