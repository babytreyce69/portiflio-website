import BioColumn from './components/BioColumn'
import CardColumn from './components/CardColumn'

function App() {
  return (
    <main className="layout">
      <header className="layout__masthead">
        <h2 className="site-title">Welcome!</h2>
      </header>

      <BioColumn />
      <CardColumn />
    </main>
  )
}

export default App
