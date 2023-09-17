import Image from "next/image";
import Features from "./Features";
import Navbar from "./components/Navbar";
import HeroBackground from "./svg/hero";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="dark:text-slate-300">
      <section className="text-slate-300 ">
        <span className="[&>svg]:absolute [&>svg]:-z-10 [&>svg]:m-auto [&>svg]:block [&>svg]:w-full">
          <HeroBackground />
          <Navbar />
        </span>
        <div className="h-screen w-full flex justify-center items-center">
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
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className="inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-slate-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-slate-700 dark:hover:bg-opacity-40"
                data-te-ripple-init
                data-te-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
      <Features />

      <section className="w-full h-90vh min-h-[600px] py-12 flex justify-center relative">
        <div
          className="absolute top-0 left-0 h-full w-full custom-animated-gradient "
          style={{
            clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
          }}
        ></div>
        <form className="bg-gradient-to-br from-slate-50 to-white shadow-tr py-8 px-16 rounded-lg absolute z-10 -top-8 w-3/4 md:w-2/3 lg:w-1/2">
          <div className="space-y-12">
            <div className="border-b border-slate-900/10 pb-12">
              <h2 className="text-3xl font-bold tracking-tight leading-7 text-slate-700">
                Contact Us
              </h2>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 lg:gap-y-8 sm:grid-cols-6">
                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="first"
                    className="block text-sm font-medium leading-6 text-slate-800"
                  >
                    First Name*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600 sm:max-w-md">
                      <input
                        type="text"
                        name="first"
                        id="first"
                        autoComplete="given-name"
                        className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6"
                        placeholder="Sally"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-6 lg:col-span-3">
                  <label
                    htmlFor="last"
                    className="block text-sm font-medium leading-6 text-slate-800"
                  >
                    Last Name*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600 sm:max-w-md">
                      <input
                        type="text"
                        name="last"
                        id="last"
                        autoComplete="family-name"
                        className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6"
                        placeholder="Dunbar"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-6 md:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-slate-800"
                  >
                    Email*
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-slate-600 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-600 sm:max-w-md">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6"
                        placeholder="sally@actuarydb.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-slate-800"
                  >
                    About*
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      placeholder="Tell us a little bit about your project."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="submit"
              className="mb-2 inline-block rounded bg-primary-500 px-10 py-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
