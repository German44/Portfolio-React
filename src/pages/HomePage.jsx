import About from "../components/about/About";
import Banner from "../components/hero/Banner";
import Contact from "../components/contact/Contact";
import Work from "../components/works/Work";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";


const HomePage = () => {
  return (
    <>
      <Banner />
      <NavBar />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
