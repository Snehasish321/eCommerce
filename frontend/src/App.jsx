import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from "./pages/Collection"
import About from "./pages/About"
import Product from "./pages/Product"
import Login from "./pages/Login"
import PlaceOrder from "./pages/PlaceOrder"
import Orders from "./pages/Orders"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Navbar/>
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Product/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/place-order' element={<PlaceOrder/>}/>
        <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App



