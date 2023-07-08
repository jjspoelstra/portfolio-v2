'use client'

import { motion, AnimatePresence } from "framer-motion";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";



export default function Header() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className="siteHeader">
      <h1 className="headerTitle"> joseph j. spoelstra </h1>
      <p className="headerLabel"> developer & writer</p> 
      <p className="headerLabel"></p>
      <nav className="headerMenu">
        
            <motion.ol
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ListItem text={'about'} />
              <ListItem text={'projects'} />
              <ListItem text={'writing'} />
              <ListItem text={'photography'} />
              
            </motion.ol>
         
      </nav>
    </div>
  );
}
