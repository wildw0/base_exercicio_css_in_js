import React from 'react'
import Header from './components/Cabecalho'
import Hero from './components/Hero'
import LlistaVagas from './containers/ListaVagas'
import EstiloGLobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGLobal />
      <Header />
      <Hero />
      <Container>
        <LlistaVagas />
      </Container>
    </>
  )
}

export default App
