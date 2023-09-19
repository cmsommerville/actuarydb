import Features from "./Features";
import AboutUs from "./AboutUs";
import Hero from "./Hero";
import Contact from "./Contact";

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
