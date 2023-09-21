import Navbar from "./components/Navbar";
import HeroBackground from "./svg/hero";

export default function Hero() {
  return (
    <section className="text-slate-300 h-132 md:h-96 min-h-screen">
      <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:m-auto [&>svg]:block [&>svg]:w-full">
        <HeroBackground />
        <Navbar />
      </span>
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-center dark:text-slate-100 w-11/12 sm:w-10/12 lg:w-8/12 xl:w-7/12">
          <div className="block rounded-lg bg-[hsla(0,0%,15%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.7)] dark:shadow-black/20 md:py-16 md:px-12 saturate-200 backdrop-blur-xl">
            <h1 className="mt-6 mb-16 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
              Data for Actuaries. <br />{" "}
              <span className="text-primary-400 dark:text-primary-300">
                By Actuaries.
              </span>
            </h1>
            <a
              className="mb-2 inline-block rounded bg-primary-500 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-slate-300 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
              data-te-ripple-init
              data-te-ripple-color="light"
              href="#contact"
              role="button"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
