import "./home.css";
import Navbar from "../../components/Navbar";
import Betterways from "../Betterways";
import YourPriority from "../YourPriority";
import Savings from "../Savings";
import SavingsCard from "../../components/SavingsCard";
import { Cards } from "../../data";
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
      {Cards.map((item) => {
        return <SavingsCard cards={item} key={item.id} />;
      })}
      <Access />
      <FamilySavings />
      <Customer />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
