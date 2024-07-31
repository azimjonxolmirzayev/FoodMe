import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

function Home() {
  return (
    <div className="w-full h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Header />
      <Services />
    </div>
  );
}

export default Home;
