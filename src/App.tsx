import FloatingNav from './components/FloatingNav'
import Hero from './components/Hero'
import GrowthDesigner from './components/GrowthDesigner'
import CareerHighlights from './components/CareerHighlights'
import SelectedProjects from './components/SelectedProjects'
import GridOverlay from './components/GridOverlay'

function App() {
  return (
    <>
      <FloatingNav />
      <main className="canvas min-h-screen font-sans">
        <Hero />
        <GrowthDesigner />
        <CareerHighlights />
        <SelectedProjects />
        {import.meta.env.DEV && <GridOverlay />}
      </main>
    </>
  )
}

export default App
