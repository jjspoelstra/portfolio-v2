'use client'
import { usePathname } from 'next/navigation'
import { motion} from 'framer-motion'
import Link from 'next/link';
import { useContext } from 'react';
import { AnimationContext } from '../context/AnimationContext';

const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function Dev(){
    return (
        <motion.section className='about'
        initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}
            >
          
          <p>Technology, for me, is like a constantly evolving puzzle, and I find joy in the challenge. Keeping up with the industry's latest tools and trends isn't just part of the job as a Full-Stack Developer; it's an exciting journey of continuous learning. I've grown comfortable with the MERN JavaScript stack, but I believe there's always room in the toolbox for something new. </p>
          
          <br />
          
          <p>But it's not just about the code. Being a good developer also means being a good team player. To that end, I've learned the value of clear communication, positive attitude, and effective collaboration. These aren't just buzzwords to me, but vital elements in turning a good team into a great one. Here's a snapshot of the technical and collaborative skills I bring to the table:</p>
              <br />
              <ul className='process'>
                    <li> <p>● Frontend - React, Next.js, HTML5/CSS, Vanilla JavaScript, Tailwind, MaterialUI</p></li>
                    <li> <p>● Backend - Node.js, Express, MongoDB, Mongoose, Puppeteer, GraphQL, DynamoDB, EC2</p></li>
                    <li> <p>● General - Agile Methodology, Scrum (CSM), Object-Oriented Programming, Functional Programming, MVC</p></li>

                </ul>
        </motion.section>
    )
}