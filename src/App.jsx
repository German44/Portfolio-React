import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../src/components/about/About";
import Banner from "../src/components/hero/Banner";
import Contact from "../src/components/contact/Contact";
// import Header from '../src/components/header/Header'
import Work from "../src/components/works/Work";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import CaseStudyPage from "./pages/CaseStudyPage";

function App() {
  // bg-site bg-no-repeat bg-cover overflow-hidden
  return (
    <div className="body">
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/work/CaseStudyPage" element={<CaseStudyPage />} />
          <Route
            exact
            path="/"
            element={
              <>
                <Banner />
                <NavBar />
                <About />
                <Work />
                <Contact />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
      {/* <div className='h-[135px]'></div> */}
    </div>
  );
}

export default App;
