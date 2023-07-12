'use client'
import { usePathname } from 'next/navigation'
import { motion} from 'framer-motion'
import Link from 'next/link';
import { useContext } from 'react';
import { AnimationContext } from '../context/AnimationContext';



export default function Dev(){
    return (
        <motion.section className='projects'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}>
            <p>
              A few small exerpts from my novel: ursa (here in my solutide) (working title), and short stories.
            </p>

              <br />

              <p>ursa (here in my solitude)</p>
                <p></p>
              <p>Sodom and Gomorrah</p>
                <p></p>
              <p>The Zest of a Lime</p>
                <p> - Her pops would sooner think someone was "lyin' and screwin'" with him than believe a door could creek or a dish could fall of its own volition. He didn't believe anything could happen a person didn't make. Human were put here by God for a reason, he said.
                  <br />
                  He was the kind of man who couldn't stand the sour taste of water, and much preferred milk. </p>
              <p>Clamor, Inchworm!</p> 
                <p></p>
              
            </motion.section>
    )
}