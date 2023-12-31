'use client'

import { motion} from 'framer-motion'
import { useContext, useEffect, useState } from 'react';
import { AnimationContext } from '../context/AnimationContext';

const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function Freelance(){
  
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 950px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery); // Initial check on page load

    // Cleanup the listener when component unmounts
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);

    const { toggleAnimation } = useContext(AnimationContext);
        const handleClick = () => {
          toggleAnimation(); // Trigger animation state change
        };
      return (
        <motion.section className='projects freelance'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}>
            
            {isMobile ? <><p>Websites today serve as a powerful tool for storytelling, business, and community building, and off-the-shelf solutions often falling short in realizing your unique vision. Here's a short summary of how create your one-of-a-kind web presence: </p>
            <br />
                  <ul className='process'>
                    <li> <p>● Vision 💡 - Concepts + Goals</p></li>
                    <li> <p>● Proposal 📝 - Format + Outline</p></li>
                    <li> <p>● Development 🔬 - The Build </p></li>
                    <li> <p>● Launch 🚀 - Takeoff!</p></li>
                    <li> <p>● Support 🔧 - Support over time</p></li>
                  </ul> </> : <><p>Websites today are more than just an online presence—they're a platform for your story, a tool for your business, or a home for your community. Off-the-shelf solutions can help build a website, but they often lack the depth of customization and control that truly brings your vision to life. That's where I come in. </p>
                  <br />
                  <p>As a Full-Stack Engineer, I've experienced firsthand the transformational power of well-crafted, custom-built websites. My approach is to create unique digital spaces tailored to your exact needs. No two stories are the same, so why should your website be any different? Here's how we can begin crafting your unique narrative together:</p>
                  <ul className='process'>
                    <li> <p>● Vision 💡 A project always begins with a vision. Here, we discuss the concepts and goals behind your website.</p></li>
                    <li> <p>● Proposal 📝 Create a formal outline for the project and set a path for development. Develop a preview of the design, then begin preparations for takeoff!</p></li>
                    <li> <p>● Development 🔬 Regular updates on the development process will be provided throughout testing.</p></li>
                    <li> <p>● Launch 🚀 The final form of your website officially takes off and becomes live.</p></li>
                    <li> <p>● Support 🔧  Optionality for continued support of the website over time.</p></li>
                  </ul> <br /> <br /></>}

                  

                
                
                <br />
           

                <p className=''>Looking for a website or to collaborate on a project? Get in touch with me <motion.b onMouseEnter={handleClick} onMouseLeave={handleClick} whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>here</motion.b></p> 
                

            </motion.section>
      )
}