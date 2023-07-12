'use client'
import Freelance from "../components/Freelance"
import Header from "../components/Header"
import Socials from "../components/Socials"
import { AnimationProvider } from "../context/AnimationContext"

export default function Home() {
  
  return (
    <main>
      <section className="mainBlock hide-caret">
        <AnimationProvider>
          <Header/>
          <Freelance/>
          <Socials/>
        </AnimationProvider>
          
      </section>
    </main>

  )
}
