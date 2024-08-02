import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Price from "../components/Price";
import Xizmatlar from "../components/Xizmatlar";
import Freetrial from "../components/Freetrial";
import Faq from "../components/Faq";

function Home() {
  return (
    <div className="w-full font-['SpaceGrotesk'] bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Header />
      <Services />
      <Xizmatlar />
      <Price />
      <Freetrial />
      <Faq />
      <Footer />
    </div>
  );
}

export default Home;
