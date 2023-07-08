'use client'

import { FaTwitter, FaEnvelope, FaGithub, FaLinkedin, FaAngellist } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Socials(){
    return (
        <section className='socials'>
            <ul class="icons flex">
                  <motion.li whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="jjspoels@gmail.com" target="_blank"><FaEnvelope /></a></motion.li>
                  <motion.li whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://twitter.com/JoeSpoelstra31" target="_blank"><FaTwitter/></a></motion.li>
                  <motion.li whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://github.com/jjspoelstra" target="_blank"><FaGithub/></a></motion.li>
                  <motion.li whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://www.linkedin.com/in/joe-spoelstra/" target="_blank"><FaLinkedin/></a></motion.li>
                  <motion.li whileHover={{ scale: 1.1, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><a href="https://angel.co/u/joe-spoelstra" target="_blank"><FaAngellist/></a></motion.li>
                </ul>
              
          </section>
      )
}
