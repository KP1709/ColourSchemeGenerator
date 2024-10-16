import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import RandomColour from './components/RandomColour'
import Header from './components/Header'

const queryClient = new QueryClient()
function App() {

  return (
    <main>
      <Header/>
      <QueryClientProvider client={queryClient} config={{suspense: true}}>
        <RandomColour />
        {/* <ReactQueryDevtools/> */}
      </QueryClientProvider>
    </main>
  )
}

export default App
