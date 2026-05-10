import Hero from './components/Hero'
import CareerHighlights from './components/CareerHighlights'
import About from './components/About'
import GridOverlay from './components/GridOverlay'

function App() {
  return (
    <main className="min-h-screen bg-[#f2f0e6] font-sans">
      <Hero />
      <CareerHighlights />
      <About />
      {import.meta.env.DEV && <GridOverlay />}
    </main>
  )
}

export default App
