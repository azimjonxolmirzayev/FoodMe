import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Price from "./components/Price";
import Xizmatlar from "./components/Xizmatlar";
import Freetrial from "./components/Freetrial";
import Faq from "./components/Faq";
import "./components/i18next";


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Xizmatlar />
      <Price />
      <Freetrial />
      <Faq />
      <Footer />
    </>
  );
}

export default App;
