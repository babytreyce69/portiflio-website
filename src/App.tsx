import { useCallback, useState } from 'react'
import BioColumn from './components/BioColumn'
import CardColumn from './components/CardColumn'
import PageTransition from './components/PageTransition'
import PlaceholderModal from './components/PlaceholderModal'
import PlaceholderPage from './components/PlaceholderPage'
import SiteHeader from './components/SiteHeader'
import WaveStrip from './components/WaveStrip'
import { getSlideDirection, type Page } from './types/pages'

function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [page, setPage] = useState<Page>('home')
  const [direction, setDirection] = useState<'left' | 'right'>('right')

  const navigate = useCallback((next: Page) => {
    if (next === page) return
    setDirection(getSlideDirection(page, next))
    setPage(next)
  }, [page])

  return (
    <>
      <main className="layout">
        <div className="layout__masthead">
          <SiteHeader activePage={page} onNavigate={navigate} />
          <WaveStrip />
        </div>

        <PageTransition page={page} direction={direction}>
          {page === 'home' ? (
            <>
              <CardColumn onOpen={() => setModalOpen(true)} />
              <BioColumn onOpen={() => setModalOpen(true)} />
            </>
          ) : (
            <PlaceholderPage page={page} />
          )}
        </PageTransition>
      </main>

      {modalOpen ? (
        <PlaceholderModal onClose={() => setModalOpen(false)} />
      ) : null}
    </>
  )
}

export default App
