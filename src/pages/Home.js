import flower from '../Assets/flower.svg'
import another from '../Assets/another.svg'
import arrow from '../Assets/arrow.svg'
import '../Assets/css/Home.css'
import { Link } from 'react-router-dom';
import GetInTouch from '../componants/GetInTouch';
const Home = () => {
  return (
    <div className='home'>
      <div className="container">
          <div className="container1">
              <div className="txt-line" id='Ibtihel'>
                  <p>Ibtihel</p>
              </div>
              <div className="txt-line line-bottom" id="BenSalah">
                  <p>Ben Salah</p>
              </div>
          </div>
          <div></div>
      </div>
      <div className="left-side-quote">
          <p>I create interactive  <br /> client side application <br /> that meets all the requirement of modern websites.</p>
      </div>
      <div className="container">
          <div></div>
          <div className="container1">
              <div className="txt-line">
                  <p>FrontEnd</p>
              </div>
              <div className="txt-line line-bottom">
                  <p>React developer</p>
              </div>
          </div>
      </div>
      <div className="flower-svg">
          <img src={flower} alt="" />
      </div>
      <div className="short-about">
          <div className="main-h1-short-about">
              <h1 className="main-short-about">
                  Shortly
              </h1>
              <h1 className='main-short-about'>
                  About
              </h1>
              <h1 className="main-short-about">
                  MySelf!
              </h1>
          </div>
          <div className="sub-main-p-short-about">
              <p className="sub-main-short-about">
                I IMPLEMENT THE BEST SOLUTION FOR YOUR PROJECT
              </p>
              <p className="sub-main-short-about">
                PROVIDING THE BEST EXPERIENCE FOR YOUR PEOPLE 
              </p>
          </div>
          <div className="another-svg">
              <img src={another} alt="" />
          </div>
      </div>
      <div className="my-skills-main-reel">
          <div className="my-skills-reel" id="skill-reel">
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
              <div className="reel-item">&nbsp; -- My skills</div>
          </div>
          <div className="skill-set-boxes">
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">HTML5</h1>
                  <p className="skill-set-box-p">W3C Validate Mark-Up, SEO optimized code.</p>
                  <p>___</p>
              </div>
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">CSS3</h1>
                  <p className="skill-set-box-p">Responsive & Mobile Friendly, Cross-browser compatibility (Brave, Chrome, Firefox).</p>
                  <p>___</p>
              </div>
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">javascript</h1>
                  <p className="skill-set-box-p">With this technology i create visual effects and interaction and DOM elements</p>
                  <p>___</p>
              </div>
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">React.js</h1>
                  <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
                  <p>___</p>
              </div>
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">Next.js</h1>
                  <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
                  <p>___</p>
              </div>
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">Tailwindcss</h1>
                  <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
                  <p>___</p>
              </div>
              <div className="skill-set-box">
                  <h1 className="skill-set-box-h1">bootsrap</h1>
                  <p className="skill-set-box-p">I used this as an animation library, The most loved ones!</p>
                  <p>___</p>
              </div>
          </div>
          <div className="project-and-work">
              <h1>
                  <Link className="h1-project" to="/projects">
                      My Projects and Works <img src={arrow} alt="" />
                  </Link>
              </h1>
              <br />
              <p>Click me!</p>
          </div>
          <GetInTouch />
          
      </div>
      </div>
  )
}

export default Home
