

import { usePathname } from 'next/navigation'
import Link  from 'next/link'
import { motion } from "framer-motion"




export default function ListItem({text, variants}) {
    const pathname = usePathname()
    
    if ((text === 'about' && pathname !== '/') || (text !== 'about' && `/${text}` !== pathname)){
        return (
              <motion.li
              className="shorten"
              variants={variants}
              whileHover={{ scale: 1.5, transition: { type: 'spring', stiffness: 100 } }}
              whileTap={{ opacity: 0, transition: { duration: 0.5 } }}
              >
                <Link href={text === 'about' ? '/' : `/${text}`}>
                {text}
              </Link>
                  
              </motion.li>
          )
    } else {
        return (
            <motion.li
              className="greyText"
              variants={variants}
              >
                <span> - </span>
                <span>{text}</span>
                
              </motion.li>
        )
    }
    
  }