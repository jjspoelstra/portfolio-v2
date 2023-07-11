'use client'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link';


const transition = { ease: "easeIn", duration: 3, ease: [0, 0.71, 0.2, 1.00] };

export default function Content() {
    const pathname = usePathname()


    if (pathname === '/about') {
        return (
          <>
            <motion.section className='projects'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={transition}>
            
            <br />
            <p> I'm a software engineer with a past in crisis counseling and IT consulting. I've seen how poor software can cause stress for <b>everyone</b> involved. Having decided to take matters into my own hands, I now work as a freelancer. I strive to create web applications that are both easy to use and provide a genuine service to people, whether for joy, utility, or anything in-between. When I'm not coding, you'll find me writing short stories or working on my upcoming novel.</p>
            <br />
            <br />
           
            <section className='border'></section>
            <br />
            <br />
    
            <h1><b>My Process</b></h1>
                  <p>These days, websites are a the best way to showcase the services you provide. I'd like to help you build a website that meets your needs. Here's how we'll get started:</p>
                  <ul className='process'>
                    <li> <p>● Vision 💡 A project always begins with a vision. Here, we discuss the concepts and goals behind your website.</p></li>
                    <li> <p>● Proposal 📝 Create a formal outline for the project and set a path for development. Develop a preview of the design, then begin preparations for takeoff!</p></li>
                    <li> <p>● Development 🔬 Regular updates on the development process will be provided throughout testing.</p></li>
                    <li> <p>● Launch 🚀 The final form of your website officially takes off and becomes live.</p></li>
                    <li> <p>● Support 🔧  Optionality for continued support of the website over time.</p></li>
                  </ul>
            </motion.section>
            
          </>
          ) 
    } else if (pathname === '/projects') {
        return (
          <motion.section className='projects'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={transition}>
      
      <br />
      <br />
    
    <div>
      <a href="https://trattotiadisyracusa.netlify.app/" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>Trattoria di Siracusa</span> <span className='smallText'>A cozy Italian bistro with an elevated feel</span></motion.p></a>
      <strong>HTML/CSS/JavaScript </strong>
      
    </div>
    <br />
    <div>
      <a href="https://shielded-ravine-86283.herokuapp.com/year/2023" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>Interactive NBA History</span><span className='smallText'>A site with interactive playoff brackets, season statistics, and more. </span></motion.p></a>
      <strong>JavaScript/EJS/Node/Express/Puppeteer </strong>
    </div>
    
    <br />
    <div>
      <a href="https://straight-ahead-energy101signup-245fd68098ce.herokuapp.com" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>Energy Coaching 101</span><span className='smallText'>Comissioned signup page for energy leadership training.</span></motion.p></a>
          <strong>React/Tailwind/Node/Express/Nodemailer/PaypalAPI </strong>
    </div>
    <br />
    <br />
    <br />
    <section className='github'>
    <a href="https://github.com/jjspoelstra" target="_blank"><motion.p whileHover={{ scale: 1.05, opacity: 0.5, transition: { type: 'tween', stiffness: 100 } }}><span className='bigText'>jjspoelstra</span></motion.p></a>
    <span className='smallText'>Check out more on my Github profile </span>

    </section>
  </motion.section>


        )
    }  else if (pathname === '/writing') {
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
    } else if (pathname === '/photography') {
      return (
        <motion.section className='projects'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}>
            <span> ursa (in this solitude) - exerpts</span>
            <span> The Zest of a Lime - exerpts</span>
            <span> Sodom and Gomorrah - exerpts</span>
            <span> Clamor! The plight of the inchworm - exerpts</span>
            
          </motion.section>
      )
  } else if (pathname === '/'){
    return(
      <>
        <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={transition}
        className='projects flex extend'>
          <section className='home'>
            <h1 className ='bigText'> Hi, I'm Joe, </h1>
            <span> A Full-Stack Engineer based in New York City</span>
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
    
  }