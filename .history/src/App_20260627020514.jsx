// Pages
import { Home } from './js/pages/Home'
import About from './js/pages/About'
// Routing
import { Route,Routes } from 'react-router-dom'
//Styling
import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About}
      </Routes>
    </>
  )
}

export default App
