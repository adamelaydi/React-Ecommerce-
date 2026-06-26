// Pages
import { Home } from './js/pages/Home'
import About from './js/pages/About'
import Accessories from './js/pages/Accessories'
import Blog from './js/pages/Blog'
import Contact from './js/pages/Contact'
import Signin from './js/pages/Signin'
import Login from './js/pages/Login'
import Cart from './js/pages/Cart'
import Favorite from './js/pages/favorite'
import Categories from './js/pages/Categories'
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
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/favorite' element={<Favorite/>} />
        <Route path='/categories' element={<Favorite/>}
      </Routes>
    </>
  )
}

export default App
