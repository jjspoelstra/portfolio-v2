
import Projects from "../components/Projects"
import Header from "../components/Header"
import Socials from "../components/Socials"

export default function Home() {
  return (
    <main>
      <section className="mainBlock hide-caret">
        <Header/>
        <Projects/>
        <Socials/>
      </section>
    </main>

  )
}
