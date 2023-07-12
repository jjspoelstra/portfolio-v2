import HomePage from "./components/HomePage"
import Header from "./components/Header"
import Socials from "./components/Socials"

export default function Home() {
  return (
    <main>
      <section className="mainBlock hide-caret">
        <Header/>
        <HomePage/>
        <Socials/>
      </section>
    </main>

  )
}
