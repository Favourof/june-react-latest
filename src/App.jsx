import { Route, Routes } from "react-router-dom"
import { Navbar } from "./Components/Navbar"
import { Home } from "./pages/Home"
import About from "./pages/About"
import { Contact } from "./pages/Contact"
import { ErrorPage } from "./pages/ErrorPage"
import { Dashboard } from "./pages/Dashboard"
import { Profile } from "./pages/Dashboard/Profile"
import { Settings } from "./pages/Dashboard/Settings"
import { Product } from "./pages/Product"




function App() {
  // const name = "flutter"


  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />

        <Route path="*" element={<ErrorPage />} />

        <Route path="/dashboard" element={<Dashboard />} >
          <Route path="" element={<Home />} />
          <Route path="profile/:name/:age/:country" element={<Profile />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
