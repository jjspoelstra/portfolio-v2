import Content from "./components/Content"
import Header from "./components/Header"
import Socials from "./components/Socials"

export default function Home() {
  return (
    <main>
      <section className="mainBlock">
        <Header/>
        <Content/>
        <Socials/>
      </section>
    </main>

  )
}
