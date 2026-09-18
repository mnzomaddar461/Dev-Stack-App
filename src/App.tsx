import { Suspense, useEffect, useState } from "react"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import MainLayout from "./Components/MainLayout/MainLayout"
import Nav from "./Components/Nav"
import type { Technology } from "./Types/TechType"


function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);

  useEffect(() => {
    const loadData = async() =>{
      const response = await fetch("/data.json")
      const data: Technology[] = await response.json()

      setTechnologies(data)
    }
    loadData()
  }, [])
  return (
    <>
      <Nav/>
      <Hero/>
      {/* for main content */}
      <Suspense fallback = {<h2> Loading.....</h2>}>
        <MainLayout technologies={technologies} />
      </Suspense>
      <Footer/>
    </>
  )
}

export default App
