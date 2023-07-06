'use client'
import { usePathname } from 'next/navigation'

export default function Content() {
    const pathname = usePathname()


    if (pathname === '/') {
        return (
            <section className='content'>
            <h2> I'm a software engineer based in NYC, </h2>
            <p>...with a history of working with both people and technology at once. During my time as a crisis counselor and an IT consultant, I noticed the strain and difficulty poor software can cause users, support staff, and even the clients of those using the software. Having decided to take matters into my own hands, I have since worked as a freelance web developer. My goal is to create web applications that are both easy to use and provide a real service to people, whether that be for joy, utility, or anything in-between.</p>
            </section>
          ) 
    } else if (pathname === '/projects') {
        return (
            <div>
 
 
  <div className='content'>
    <div>
      <span><img src="images/gifs/gifStrattoria.gif" alt="" /></span>
      <h3>Trattoria di Siracusa</h3>
      <p><strong>HTML5, CSS3, & Javascript -</strong> A cozy Italian bistro with an elevated feel</p><br />
      <ul>
        <li><a href="https://trattotiadisyracusa.netlify.app/">Take a look</a></li>
      </ul>
    </div>
    <div>
      <span><img src="images/gifs/gifNBA.gif" alt="" /></span>
      <h3>Interactive NBA History</h3>
      <p><strong>JavaScript, EJS, NodeJS, ExpressJS, Puppeteer -</strong> A site with interactive playoff brackets, season statistics, and more.</p>
      <ul>
        <li><a href="https://shielded-ravine-86283.herokuapp.com/year/2022">Take a look</a></li>
      </ul>
    </div>
    <div>
      <span><img src="images/gifs/straightAhead.gif" alt="" /></span>
      <h3>Energy Coaching 101</h3>
      <p><strong>React, TailwindCSS, NodeJS, ExpressJS, Nodemailer, PaypalAPI</strong> Client website for energy leadership training.</p><br />
      <ul>
        <li><a href="https://straight-ahead-energy101signup-245fd68098ce.herokuapp.com">Take a look</a></li>
      </ul>
    </div>
  </div>
</div>

        )
    } else if (pathname === '/info') {
        return (
            <section className='content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates unde blanditiis, id quia illo ullam nihil ut ducimus vel, maxime eius inventore cumque deserunt quas excepturi, minima magni expedita nam!</p>
            </section>
        )
    } else if (pathname === '/contact') {
        return (
            <section className='content'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates unde blanditiis, id quia illo ullam nihil ut ducimus vel, maxime eius inventore cumque deserunt quas excepturi, minima magni expedita nam!</p>
            </section>
        )
    } else if (pathname === '/writing') {
        return (
            <section className='content'>
                <p>Ursa (Here In My Solitude)</p>
                <p>Soddom and Gamorrah</p>
                <p>The Zest of a Lime</p>
                <p>Clamor, Inchworm!</p>
            </section>
        )
    }
    
  }