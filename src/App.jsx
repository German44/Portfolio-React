import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../src/components/about/About'
import Banner from '../src/components/hero/Banner'
import Contact from '../src/components/contact/Contact'
// import Header from '../src/components/header/Header'
import Work from '../src/components/works/Work'
import './App.css'
import NavBar from './components/navbar/NavBar'


function App() {
  // bg-site bg-no-repeat bg-cover overflow-hidden
  return (
    <div className='body'>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route ></Route>
        </Routes>
      </BrowserRouter>
      <Banner />
      <NavBar />
      <About />
      <Work />
      <Contact />
      <div className='h-[135px]'></div>
    </div>
  )
}

export default App
