'use client'
import Dev from "../components/Dev"
import Header from "../components/Header"
import Socials from "../components/Socials"

export default function Home() {
  
  return (
    <main>
      <section className="mainBlock hide-caret">
          <Header/>
          <Dev/>
          <Socials/>
      </section>
    </main>

  )
}
