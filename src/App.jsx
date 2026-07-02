import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home } from "./pages/Home"
import About from "./pages/About"
import { Contact } from "./pages/Contact"
import { ErrorPage } from "./pages/ErrorPage"




function App() {
  // const name = "flutter"


  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
