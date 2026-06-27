import { useState } from 'react'
import BioColumn from './components/BioColumn'
import CardColumn from './components/CardColumn'
import PlaceholderModal from './components/PlaceholderModal'

function App() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <main className="layout">
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
