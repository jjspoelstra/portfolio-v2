'use client'
import { usePathname } from 'next/navigation'
import { motion} from 'framer-motion'
import Link from 'next/link';
import { useContext } from 'react';
import { AnimationContext } from '../context/AnimationContext';


const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function Home(){
    return (
        
            <>
              <motion.section 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={transition}
              className='projects flex extend'>
                <section className='home'>
                  <h1 className ='bigText'> Hi, I'm Joe, </h1>
                  <span> a Full-Stack Engineer based in New York City</span>
                  {/* <br />
                  <br />
                  <p className="about-brief">I combine my background in crisis counseling and IT consulting to create web applications that bring joy and utility to people's lives. When I'm not coding, I'm also a budding novelist. </p> {/* Brief about 
                  <br /> */}
                  <br />
                  <br />
                  <motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>
                    <Link href={'/about'}> 
                      <b>Learn more about me</b>
                    </Link>
                    </motion.p>
                </section>
                <img className='small' src="joe-photo.jpg" alt="" />
              </motion.section>
            </>
          
    )
}