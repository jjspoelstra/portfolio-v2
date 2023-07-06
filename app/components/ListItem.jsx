

import { usePathname } from 'next/navigation'
import Link  from 'next/link'
import { motion } from "framer-motion"




export default function ListItem({text, variants}) {
    const pathname = usePathname()
    
    if ((text === 'home' && pathname !== '/') || (text !== 'home' && `/${text}` !== pathname)){
        return (
              <motion.li
              className=""
              variants={variants}
              whileHover={{ scale: 1.05, transition: { type: 'spring', stiffness: 150 } }}
              whileTap={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <Link href={text === 'home' ? '/' : `/${text}`}>
                {text}
              </Link>
                  
              </motion.li>
          )
    } else {
        return (
            <motion.li
              className=""
              variants={variants}
              >
                <span>●</span>
                  
              </motion.li>
        )
    }
    
  }