'use client'

import { motion } from "framer-motion";
import ListItem from "./ListItem";
import { AnimationProvider } from "../context/AnimationContext";
import { FiMenu } from "react-icons/fi"; // Importing menu icon
import { useState, useEffect } from "react";


export default function Header() {
  
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMediaQuery = (event) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 950px)");
    mediaQuery.addEventListener("change", handleMediaQuery);
    handleMediaQuery(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQuery);
    };
  }, []);


  return (
    <AnimationProvider>
      <div className="siteHeader hide-caret">
        <section>
          <h1 className="headerTitle"> joseph j. spoelstra </h1>
          <p className="headerLabel"> web developer</p>
        </section>

        {isMobile 
        ? 
        <div>
          <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)}><FiMenu /></button>
          {menuOpen && 
            <nav className="headerMenu mobileMenu">
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
          }
        </div> 
        : 
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
        }
      </div>
    </AnimationProvider>
  );
}
