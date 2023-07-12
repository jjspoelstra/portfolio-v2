'use client'
import About from "../components/About"
import Header from "../components/Header"
import Socials from "../components/Socials"

export default function Home() {
  
  return (
    <main>
      <section className="mainBlock hide-caret">
          <Header/>
          <About/>
          <Socials/>
      </section>
    </main>

  )
}
