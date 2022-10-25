import flower from '../Assets/flower.svg';
import '../Assets/css/About.css';
import { motion } from "framer-motion"

const About = () => {
  return (
    <>
    <div>
        <div className="about">
            <div className="about-container">
                <div className="container-text">
                    <div className="container-inner-text1">
                        <p>
                            Ibtihel 
                        </p>
                    </div>
                    <motion.div animate={{
                       
                       transitionEnd: {
                        marginTop:0,
                      },
                    }} 
                    className="container-inner-text2">
                        <p>
                            Ben Salah
                        </p>
                    </motion.div>
                </div>
                <div  className="container-quote container-quote1">
                    I create sites and <br /> applications that cause <br /> pleasant emotions
                </div>
                <div className="container-quote container-quote2">
                    I specialize in interaction <br /> design, experience websites <br /> and applications
                </div>
            </div>
            <div className="about-container2">
                <div className="about-container2-heading">
                    
                    <div className="about-text-lower">
                        <motion.p animate={{
                            transitionEnd: {
                                lineHeight: "normal",
                            }
                        }} >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Front-End</motion.p>
                    </div>
                    <div className="about-text-lower">
                        <motion.p>&nbsp;Developer&nbsp;&nbsp;&nbsp; &</motion.p>
                    </div>
                    
                </div>
                <div className="about-container2-p">
                    <p>Hi! I'm Ibtihel Ben Salah, a FrontEnd from tunisia.</p>
                    <p> ___My journey started 1 year ago, learning to code by myself witch made pick on new technologies in fast way and to work independently </p>
                    <p className="about-container2-p-right">
                        I created more than 30 client web applications that are responsive , SEO friendly with high performance.
                     in the process I acquired an ability to implement scalable and maintainable projects in efficient way and in a determined period of time.
                    </p>
                    <p>Finally you maybe want to know about my academic backround, I have a civil engineering degree and 1 year professional experince in that field, I worked in a frensh company SETEC, 
                      I worked with a team of more than 10 individual on big projects in which I made sure to be an active listener and great communicator to garentee a harmounious work enviroment and to hit all the goals of the project in most affective way
                    </p>
                </div>
               
                
                <div className="about-container-flower">
                    <img src={flower} alt="" />
                </div>
            </div>
            <div className="about-footer">
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default About
