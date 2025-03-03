import React from "react";
import Hero from "./components/hero";
import About from "./components/About";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Hero />
      <About/>
      <Features/>
      <Story/>
      <Contact/>
      <Footer/>
    </main>
  );
};
export default App;

{/* <section className="z-0 min-h-screen bg-slate-500"></section> */}
      
