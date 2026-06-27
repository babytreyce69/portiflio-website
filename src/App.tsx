import { useState } from 'react'
import BioColumn from './components/BioColumn'
import CardColumn from './components/CardColumn'
import PlaceholderModal from './components/PlaceholderModal'
import SiteHeader from './components/SiteHeader'
import WaveStrip from './components/WaveStrip'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <main className="layout">
        <div className="layout__masthead">
          <SiteHeader />
          <WaveStrip />
        </div>
        <CardColumn onOpen={() => setModalOpen(true)} />
        <BioColumn onOpen={() => setModalOpen(true)} />
      </main>

      {modalOpen ? (
        <PlaceholderModal onClose={() => setModalOpen(false)} />
      ) : null}
    </>
  )
}

export default App
