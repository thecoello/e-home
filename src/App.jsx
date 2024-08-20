import './style.css'
import Lenis from 'lenis'
import Intro from './Intro'
import Nav from './components/Nav'

function App() {

  const lenis = new Lenis({
    duration: 4
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)

  return (
    <>
    <Nav />
    <Intro />
    </>
  )
}

export default App