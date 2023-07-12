'use client'
import { motion} from 'framer-motion'
import Link from 'next/link';
import { useState, useEffect } from 'react';

const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function About(){

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
        <>
            <motion.section className='about'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}>
            
            {isMobile ? <p>I’m a full-stack web developer with a history of working with both people and technology at once. During my time as a crisis counselor and an IT consultant, I noticed the strain and difficulty poor software can cause users, support staff, and even the clients of those using the software. Having decided to take matters into my own hands, I have since worked as a freelance web developer. My goal is to create web applications that are both easy to use and provide a real service to people, whether that be for joy, utility, or anything in-between.</p> : <><p> My first experience with code was early in high school, when our computer science class learned to create games with the block-based visual programming language, Scratch. While I pursued my other passion in mental health, my love for technology and code never faltered. During my time as an IT consultant throughout college, and in the mental health field as a crisis counselor, I noticed the immense strain and difficulty poor software caused to users, support staff, and the clients of those using it. This realization prompted me to take initiative in solving these issues.</p> <br /> <p>My professional history of simultaneously working with people and technology has bestowed me with a unique insight into the real-life effects of technology on individuals. This understanding drives my goal to develop web applications that are not only easy to use but also contribute meaningfully to the lives of people, whether it's by providing enjoyment, functionality, or anything in between.</p> <br /></>}
      

           
            
            

            <motion.p className='break '  whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>
            <Link href={'/dev'}> 
                <b>Looking for a dev?</b>
              </Link> 
            </motion.p>
            <br />
            <motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>
              <Link href={'/freelance'}> 
                <b>Looking for a website?</b>
              </Link>
            </motion.p>
              <br />
              <motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>
              <Link href={'/projects'}> 
                <b>Check out my projects -</b>
              </Link>
            </motion.p>

            </motion.section>
            

            
          </>
    )
}