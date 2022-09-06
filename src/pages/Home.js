import { useEffect, useRef } from 'react';
import flower from '../Assets/flower.svg'
import another from '../Assets/another.svg'
import arrow from '../Assets/arrow.svg'
import '../Assets/css/Home.css'
import { Link } from 'react-router-dom';
import GetInTouch from '../componants/GetInTouch';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
const Home = () => {
    
        // var [scroll, setScroll] = useState();
        // useEffect(()=> {

        //     document.getElementById("ibtihel").style.transform = "translateX("+scroll+"px)";
        //     document.getElementById("bensalah").style.transform = "translateX(-"+scroll+"px)";
        //     document.getElementById("digital").style.transform = "translateX(-"+scroll+"px)";
        //     document.getElementById("designer").style.transform = "translateX("+scroll+"px)";
            
            
        // })
        // const updateScroll = () => {
        //     let newScroll = window.scrollY / 5;
        //     setScroll(newScroll);
        // } 
        // setInterval(updateScroll, 1);

        let text1 = useRef(null)
        let text2 = useRef(null)
        let text3 = useRef(null)
        let text4 = useRef(null)
        let about = useRef(null)
        let about2 = useRef(null)
        let p1 = useRef(null)
        const timeline_home = gsap.timeline();
       gsap.registerPlugin(ScrollTrigger)
        useEffect(()=> {
            timeline_home.from([text1, text2, text3, text4], {
                duration: 1,
                skewY: 15,
                y: 400,
                stagger: {
                    amount: .2
                }
            },"-=1.2")
            timeline_home.from(p1,{
                duration: .6,
                x: -100,
                delay: .2,
                opacity: 0,
            })
            gsap.from([about,about2],{
                scrollTrigger: {
                    trigger: [about, about2],
                    toggleActions: "play none none none"
                },
                y: 100,
                opacity: 0,
                duration: .8,
                stagger: {
                    amount: .4
                }
            })
        })
    return (
        
        <div className="home" >
       
        
        <div className="container">
           <div className="container1">
            <div className="txt-line"  id="ibtihel">
                <p ref={el=>text1=el}>
                    Ibtihel
                </p>
            </div>
            <div className="txt-line line-bottom" id="bensalah">
                <p ref={el=>text2=el}>
                    Ben Salah
                </p>
            </div>
        </div>
        <div></div>
        </div>
        {/* <div className="right-side-menu">
            <p>DARK THEME</p>
            <p>LIGHT THEME</p>
        </div> */}
        <div className="left-side-quote">
        <p ref={el=>p1=el}>I create digital experiences that merge art <br /> direction, branding, creative strategy, web <br /> design, prototyping, and digital interactions.
        </p>
        </div>
        <div className="container">
        <div></div>
           <div className="container1">
            <div className="txt-line" id="digital">
                <p ref={el=>text3=el}>
                    Digital
                </p>
            </div>
            <div className="txt-line line-bottom" id="designer">
                <p ref={el=>text4=el}>
                    Designer
                </p>
            </div>
        </div>
        </div>
        <div className="flower-svg">
            <img src={flower} alt="flower" />
        </div>
        <div className="short-about">
            <div className="main-h1-short-about" ref={el=> about = el}>
            <h1 className="main-short-about">
                Shortly        
            </h1>
            <h1 className="main-short-about">
                About        
            </h1>
            <h1 className="main-short-about">
                MySelf!     
            </h1>
        </div>
        <div className="sub-main-p-short-about" ref={el=> about2 =el}>
            <p className="sub-main-short-about">
            I LOVE TO COMBINE THE MODERN TECHNOLOGIES WITH VISUAL AESTHETICS.
            </p>
            <p className="sub-main-short-about">
            I BELIEVE THAT EVERY PROJECT THAT I DO SHOULD HAVE AN OVERVALUE.
            </p>
            <p className="sub-main-short-about">
            I ALWAYS TRY TO FIND THE OPTIMAL SOLUTION TO THE CLIENT'S TASK.
            </p>
        </div>
        <div className="another-svg">
            <img src={another} alt="another" />
        </div>
        </div>
        
        <div className="my-skills-main-reel">
            <div className="my-skills-reel" id="skill-reel">
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
                <div className="reel-item"> &nbsp;  — My skills</div>
             </div>
        </div>
        
        <div className="skill-set-boxes">
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">HTML5</h1>
                <p className="skill-set-box-p">I mainly used to develop Website Markup</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">CSS3</h1>
                <p className="skill-set-box-p">I ues this to style and bring design to browsers</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">JAVASCRIPT</h1>
                <p className="skill-set-box-p"> With this technology i create visual effects and interaction with DOM elements</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">REACT.JS</h1>
                <p className="skill-set-box-p">I loved it! I use it to create applications that have lot of reactivity</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">Greensock - GSAP</h1>
                <p className="skill-set-box-p">I used this as an animtion library, The most loved ones!</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">Three.js</h1>
                <p className="skill-set-box-p">This library deals and simplifies the working with webgl and glsl</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">Node.js</h1>
                <p className="skill-set-box-p">I use it for writing server scripting for applications</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">EXPRESS</h1>
                <p className="skill-set-box-p">Framework for writing scripting of node.js</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">PHP</h1>
                <p className="skill-set-box-p">I also used it as a backend for server-side scripting but prefer node.js</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">MySQL</h1>
                <p className="skill-set-box-p">i use it as a database for storing files and other stuff</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">Sass</h1>
                <p className="skill-set-box-p">I prefer this also instead of CSS because of advance functionalities</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">PHOTOSHOP</h1>
                <p className="skill-set-box-p">this is where i do photo editing, create visuals and for thumbnails</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">Illustrator</h1>
                <p className="skill-set-box-p">used for typography, logo designing, making posters and for vector art</p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">FIGMA</h1>
                <p className="skill-set-box-p">I used it for create prototypes, designs and mockups </p>
                
                <p>___</p>
            </div>
            <div className="skill-set-box">
                <h1 className="skill-set-box-h1">premiere pro</h1>
                <p className="skill-set-box-p">i use it as my video editor, to edit youtube videos</p>
                
                <p>___</p>
            </div>
            
        </div>
        <div className="project-and-work">
                <h1>
                    <Link className="h1-project" to="/projects">My Projects and Works <img src={arrow} alt="" /></Link>
                </h1>
                <br />
                <p>Click me!</p>
            </div>
            <GetInTouch />
       
        </div>
    )
}

export default Home
