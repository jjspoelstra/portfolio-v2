'use client'
import { motion} from 'framer-motion'
import Link from 'next/link';

const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function About(){
    return (
        <>
            <motion.section className='about'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}>
            
            <p> My first experience with code was early in high school, when our computer science class learned to create games with the block-based visual programming language, Scratch. While I pursued my other passion in mental health, my love for technology and code never faltered. During my time as an IT consultant throughout college, and in the mental health field as a crisis counselor, I noticed the immense strain and difficulty poor software caused to users, support staff, and the clients of those using it. This realization prompted me to take initiative in solving these issues.</p>
            <br />
            <p>My professional history of simultaneously working with people and technology has bestowed me with a unique insight into the real-life effects of technology on individuals. This understanding drives my goal to develop web applications that are not only easy to use but also contribute meaningfully to the lives of people, whether it's by providing enjoyment, functionality, or anything in between.</p>
            
            <br />

            <motion.p className='break '  whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}>
              <b>
                Looking for a dev? 
              </b>
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