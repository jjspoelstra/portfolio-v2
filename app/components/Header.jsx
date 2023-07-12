'use client'

import { motion } from "framer-motion";
import ListItem from "./ListItem";
import { AnimationProvider } from "../context/AnimationContext";



export default function Header() {
  

  return (
    <AnimationProvider>
    <div className="siteHeader hide-caret">
      <h1 className="headerTitle"> joseph j. spoelstra </h1>
      <p className="headerLabel"> web developer</p> 
      <p className="headerLabel"></p>
      <nav className="headerMenu">
        
            <motion.ol
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ListItem text={'home'} />
              <ListItem text={'about'} />
              <ListItem className='subsection' text={'dev'} />
              <ListItem className='subsection' text={'freelance'} />
              <ListItem className='subsection' text={'projects'} />
              {/* <ListItem text={'writing'} /> */}
              
              
            </motion.ol>
         
      </nav>
    </div>
    </AnimationProvider>
  );
}
