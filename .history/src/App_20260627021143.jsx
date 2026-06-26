// Pages
import { Home } from './js/pages/Home'
import About from './js/pages/About'
import Accessories from './js/pages/Accessories'
import Blog from './js/pages/Blog'
// Routing
import { Route,Routes } from 'react-router-dom'
//Styling
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/accessories' element={<Accessories />} />
        <Route path='/blog' element
      </Routes>
    </>
  )
}

export default App
