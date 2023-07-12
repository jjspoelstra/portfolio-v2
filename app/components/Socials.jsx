'use client'
import { useContext, useEffect, useState } from 'react';
import { AnimationContext } from '../context/AnimationContext';
import { usePathname } from 'next/navigation'
import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Socials(){
    const pathname = usePathname()
    
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

    if (pathname === '/freelance')  {
        const { isAnimationTriggered } = useContext(AnimationContext);
        if (isMobile){
            return (
            <footer>
        
                    <ul class="icons flex">
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 100 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="jjspoels@gmail.com" target="_blank"><FaEnvelope /></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 150 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://twitter.com/JoeSpoelstra31" target="_blank"><FaTwitter/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 200 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://github.com/jjspoelstra" target="_blank"><FaGithub/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 250 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://www.linkedin.com/in/joe-spoelstra/" target="_blank"><FaLinkedin/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 300 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://angel.co/u/joe-spoelstra" target="_blank"><FaAngellist/></a></motion.li>
                        </ul>
                    
            </footer>
                
              )
        } else {
            return (
            
                <section className='socials'>
                    <ul class="icons flex">
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 100 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="jjspoels@gmail.com" target="_blank"><FaEnvelope /></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 150 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://twitter.com/JoeSpoelstra31" target="_blank"><FaTwitter/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 200 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://github.com/jjspoelstra" target="_blank"><FaGithub/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 250 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://www.linkedin.com/in/joe-spoelstra/" target="_blank"><FaLinkedin/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 300 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://angel.co/u/joe-spoelstra" target="_blank"><FaAngellist/></a></motion.li>
                        </ul>
                      
                  </section>
              )
        }
        
    } else {
        const isAnimationTriggered = false
        if (isMobile){
            return (
                <footer>
                    <ul class="icons flex">
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 100 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="jjspoels@gmail.com" target="_blank"><FaEnvelope /></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 150 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://twitter.com/JoeSpoelstra31" target="_blank"><FaTwitter/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 200 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://github.com/jjspoelstra" target="_blank"><FaGithub/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 250 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://www.linkedin.com/in/joe-spoelstra/" target="_blank"><FaLinkedin/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 300 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://angel.co/u/joe-spoelstra" target="_blank"><FaAngellist/></a></motion.li>
                        </ul>
                      
                  </footer>
              )
        } else {
            return (
                <section className='socials'>
                    <ul class="icons flex">
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 100 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="jjspoels@gmail.com" target="_blank"><FaEnvelope /></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 150 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://twitter.com/JoeSpoelstra31" target="_blank"><FaTwitter/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 200 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://github.com/jjspoelstra" target="_blank"><FaGithub/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 250 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://www.linkedin.com/in/joe-spoelstra/" target="_blank"><FaLinkedin/></a></motion.li>
                          <motion.li animate={{ scale: isAnimationTriggered ? 1.6 : 1, transition: { type: 'spring', stiffness: 300 } }} whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://angel.co/u/joe-spoelstra" target="_blank"><FaAngellist/></a></motion.li>
                        </ul>
                      
                  </section>
              )
        }
        
    }
  
    
}
