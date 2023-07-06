'use client'

import { motion, AnimatePresence } from "framer-motion";
import ListItem from "./ListItem";
import { useEffect, useState } from "react";

const container = {
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Header() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);

  return (
    <div className="siteHeader">
      <h1 className="headerTitle"> joseph jaye </h1>
      <p className="headerLabel"> developer & writer</p> 
      <p className="headerLabel"></p>
      <nav className="headerMenu">
        <AnimatePresence initial={false}>
          {shouldAnimate && (
            <motion.ol
              variants={container}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <ListItem text={'home'} variants={item} />
              <ListItem text={'projects'} variants={item} />
              <ListItem text={'writing'} variants={item} />
              <ListItem text={'info'} variants={item} />
              <ListItem text={'contact'} variants={item} />
              
            </motion.ol>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
