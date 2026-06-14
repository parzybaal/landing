import { useEffect } from 'react'
import LandingPage from './components/LandingPage'
import { PAGE_META } from './constants/constants.config'

function App() {
  useEffect(() => {
    document.title = PAGE_META.title
    const description = document.querySelector('meta[name="description"]')
    if (description !== null) {
      description.setAttribute('content', PAGE_META.description)
    }
  }, [])

  return <LandingPage />
}

export default App
