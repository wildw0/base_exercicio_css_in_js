import Header from './components/Cabecalho'
import Hero from './components/Hero'
import LlistaVagas from './containers/ListaVagas'
import EstiloGLobal from './styles'

import './global.css'

function App() {
  return (
    <>
      <EstiloGLobal />
      <Header />
      <Hero />
      <div className="container">
        <LlistaVagas />
      </div>
    </>
  )
}

export default App
