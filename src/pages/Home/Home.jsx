import "./home.css";
import Navbar from "../../components/Navbar";
import Betterways from "../Betterways";
import YourPriority from "../YourPriority";
import Savings from "../Savings";
import Access from "../Access";
import FamilySavings from "../FamilySavings";
import Customer from "../Customer";
import Features from "../Features";
import Footer from "../../components/Footer";



const Home = () => {
  return (
    <>
      <Navbar />
      <Betterways />
      <YourPriority />
      <Savings />
      <Access />
      <FamilySavings />
      <Customer />
      <Features />
      <Footer />
    
    </>
  );
};

export default Home;
