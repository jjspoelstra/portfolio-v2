'use client'
import { motion} from 'framer-motion'
import { useEffect, useState } from 'react';

const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function Projects(){

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

    return (
        <motion.section className='projects'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}>
      
      <br />
      <br />
    
    <div>
      <a href="https://trattotiadisyracusa.netlify.app/" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>Trattoria di Siracusa</span> 
      {isMobile? <span className='smallText flex'>A cozy Italian bistro with an elevated feel</span> : <span className='smallText'>A cozy Italian bistro with an elevated feel</span>}
      </motion.p></a>
      <strong>HTML/CSS/JavaScript </strong>
      
    </div>
    <br />
    <div>
      <a href="https://shielded-ravine-86283.herokuapp.com/year/2023" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>Interactive NBA History</span>
      {isMobile ? <span className='smallText flex'>A site with interactive playoff brackets, season statistics, and more. </span>: <span className='smallText'>A site with interactive playoff brackets, season statistics, and more. </span>}
      </motion.p></a>
      <strong>JavaScript/EJS/Node/Express/Puppeteer </strong>
    </div>
    
    <br />
    <div>
      <a href="https://straight-ahead-energy101signup-245fd68098ce.herokuapp.com" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>Energy Coaching 101</span>
      {isMobile ? <span className='smallText flex'>Comissioned signup page for energy leadership training.</span>: <span className='smallText'>Comissioned signup page for energy leadership training.</span>}
      </motion.p></a>
          <strong>React/Tailwind/Node/Express/Nodemail </strong>
    </div>
    <br />
    <br />
    <br />
    <section className='github hide'>
    <a href="https://github.com/jjspoelstra" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>jjspoelstra</span></motion.p></a>
    <span className='smallText hide'>Check out more on my Github profile </span>

    </section>
  </motion.section>
    )
}