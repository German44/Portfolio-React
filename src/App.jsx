import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../src/components/About'
import Banner from '../src/components/Banner'
import Contact from '../src/components/Contact'
import Header from '../src/components/Header'
import Work from '../src/components/Work'
import './App.css'
// import NavBar from './components/NavBar'

function App() {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route ></Route>
        </Routes>
      </BrowserRouter>
      <Banner />
      {/* <NavBar /> */}
      <About />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
  )
}

export default App
