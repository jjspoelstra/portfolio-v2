'use client'
import { usePathname } from 'next/navigation'
import { motion} from 'framer-motion'
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { AnimationContext } from '../context/AnimationContext';


const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function Home(){

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
              <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
              className='projects flex extend'>
                {isMobile ? <> 
                
                <section className='home'>

                  <h1 className ='bigText intro'> Hi, I'm Joe, </h1>

                  <section className='flex '>
                  <img className='small' src="joe-photo.jpg" alt="" />
                  <span> a Full-Stack Engineer based in New York City</span>
                  </section>

                  <br />
                  <br />
                  
                  
                  
                  
                  
                  <br />
                  <motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }} className='left'>
                    <Link href={'/about'}> 
                      <b>Learn more about me</b>
                    </Link>
                    </motion.p>
                  </section>
                  

                </> 

      : <>          <section className='home'>


                      <h1 className ='bigText'> Hi, I'm Joe, </h1>
                      <span> a Full-Stack Engineer based in New York City</span>
                      <br />
                      <br />
                      <motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>
                        <Link href={'/about'}> 
                          <b>Learn more about me</b>
                        </Link>
                        </motion.p>
                      </section>
                      <img className='small' src="joe-photo.jpg" alt="" />

                </>}
               
              </motion.section>
            </>
          
    )
}