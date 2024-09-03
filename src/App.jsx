import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Home from "./components/Home"
import Pages from './components/Pages'
import Portfolio from './components/Portfolio'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[100%] h-[100vh] bg-[#7454F4] px-4 flex justify-center items-center '>
        <div className='w-[350px] sm:w-[550px] md:w-[750px] lg:w-[1000px] h-[600px]  px-4 bg-white rounded-3xl shadow-md shadow-purple-800 flex flex-col justify-between  '>

         <Header/>
         
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/Pages" element={<Pages/>}/>
                  <Route path="/Portfolio" element={<Portfolio/>} />
                </Routes>
            </BrowserRouter>

          <Footer/>
          
        </div>
    </div>
  )
}

export default App
