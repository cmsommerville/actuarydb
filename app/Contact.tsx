"use client";
import { useState } from "react";
import { AWS_API_GATEWAY_ROOT } from "./config";

interface FormDataInterface {
  first_name: string;
  last_name: string;
  email: string;
  msg: string;
  zip_code?: string | undefined | null;
}

const DEFAULT_FORM_DATA: FormDataInterface = {
  first_name: "",
  last_name: "",
  email: "",
  msg: "",
};

const validator = (form_data: FormDataInterface) => {
  // zip_code is a honeypot
  if (form_data.zip_code) return;

  if (!form_data.first_name) return;
  if (!form_data.last_name) return;
  if (!form_data.email) return;
  if (!form_data.msg) return;
  return form_data;
};

export default function Contact() {
  const [formData, setFormData] =
    useState<FormDataInterface>(DEFAULT_FORM_DATA);

  const formDataSetter = (key: keyof FormDataInterface, val: string) => {
    setFormData((prev) => ({ ...prev, [key]: val }));
  };

  const handleFormSubmit = () => {
    const data = validator(formData);
    if (!data) return;
    fetch(`${AWS_API_GATEWAY_ROOT}/contact`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(String(err));
      });
  };

  return (
    <section
      id="contact"
      className="w-full h-full min-h-[600px] pt-12 pb-24 flex justify-center relative  dark:bg-slate-800"
    >
      <div
        className="absolute top-0 left-0 h-144 md:h-96 min-h-full w-full custom-animated-gradient"
        style={{
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
        }}
      ></div>
      <form className="bg-gradient-to-br from-slate-50 to-white dark:from-slate-800 dark:to-slate-700 shadow-t dark:shadow-primary-500 py-8 px-6 md:px-16 rounded-lg absolute z-10 -top-8 w-3/4 md:w-2/3 lg:w-1/2">
        <div className="space-y-12">
          <div className="border-b border-slate-900/10 pb-12">
            <h2 className="text-3xl font-bold tracking-tight leading-7 text-slate-700 dark:text-slate-300">
              Contact Us
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-3 lg:gap-y-8 sm:grid-cols-6">
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="first"
                  className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
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
                      className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6  dark:bg-transparent dark:placeholder:text-slate-400 dark:border-slate-500"
                      placeholder="Sally"
                      onChange={(e) =>
                        formDataSetter("first_name", e.target.value)
                      }
                      value={formData.first_name}
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-6 lg:col-span-3">
                <label
                  htmlFor="last"
                  className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
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
                      className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6  dark:bg-transparent dark:placeholder:text-slate-400 dark:border-slate-500"
                      placeholder="Dunbar"
                      onChange={(e) =>
                        formDataSetter("last_name", e.target.value)
                      }
                      value={formData.last_name}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-6 md:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
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
                      className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6  dark:bg-transparent dark:placeholder:text-slate-400 dark:border-slate-500"
                      placeholder="sally@actuarydb.com"
                      onChange={(e) => formDataSetter("email", e.target.value)}
                      value={formData.email}
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-6">
                <label
                  htmlFor="msg"
                  className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
                >
                  About*
                </label>
                <div className="mt-2">
                  <textarea
                    id="msg"
                    name="msg"
                    rows={3}
                    className="block w-full rounded-md border-0 py-1.5 text-slate-800 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 sm:text-sm sm:leading-6 dark:bg-transparent dark:placeholder:text-slate-400 dark:ring-slate-500"
                    defaultValue={""}
                    placeholder="Tell us a little bit about your project."
                    onChange={(e) => formDataSetter("msg", e.target.value)}
                    value={formData.msg}
                  />
                </div>
              </div>
              <div className="nosend">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-slate-800 dark:text-slate-400"
                >
                  Zip Code*
                </label>
                <input
                  autoComplete="nope"
                  type="text"
                  id="postal-code"
                  name="postal-code"
                  placeholder="e.g. 90210"
                  className="block flex-1 border border-slate-200 outline-none rounded-md py-1.5 pl-3 text-slate-800 placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-violet-600 focus:border-transparent sm:text-sm sm:leading-6  dark:bg-transparent dark:placeholder:text-slate-400 dark:border-slate-500"
                  onChange={(e) => formDataSetter("zip_code", e.target.value)}
                  value={formData.zip_code ?? ""}
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="mb-2 inline-block rounded bg-primary-500 px-10 py-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0"
            onClick={handleFormSubmit}
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
