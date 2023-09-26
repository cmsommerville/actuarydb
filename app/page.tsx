import dotenv from "dotenv";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

dotenv.config();

export default function Home() {
  return (
    <main className="dark:text-slate-300">
      <Hero />
      <AboutUs />
      <Features />
      <Contact />
    </main>
  );
}
