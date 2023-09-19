import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-slate-100 dark:bg-slate-800 py-16 relative"
    >
      <div className="absolute inset-0 bg-grid-slate bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5 pointer-none"></div>
      <div className="relative container mx-auto flex flex-col items-center w-10/12 lg:w-7/12 mb-12">
        <h2 className="mb-6 px-32 py-3 text-4xl font-bold text-slate-700 dark:text-slate-300 text-center">
          What is{" "}
          <span className="text-primary-500 dark:text-primary-400">
            ActuaryDB?
          </span>
        </h2>
        <div className="text-slate-500 space-y-4">
          <p className="">
            We at ActuaryDB are an actuarial consulting company that helps
            organizations deliver actuarial-focused data warehousing solutions
            and data-driven business tools on time and on budget.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="inline-block text-primary-500 mr-2">
                <QuestionMarkCircleIcon className="w-8 h-8" />
              </span>
              <span className="inline-block">
                <span className="font-semibold">
                  Do you have data in Access databases, mainframe flat files, or
                  multiple administration systems?
                </span>{" "}
                <span className="font-normal">
                  We have decades of experience helping organizations migrate to
                  modern, centralized data warehouses, specially-tailored to an
                  actuary&apos;s needs.
                </span>
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-block text-primary-500 mr-2">
                <QuestionMarkCircleIcon className="w-8 h-8" />
              </span>
              <span className="inline-block">
                <span className="font-semibold">
                  Do you have giant, mission-critical Excel spreadsheets?
                </span>{" "}
                <span>
                  Let us help you modernize into a fully-featured,
                  version-controlled web application.
                </span>
              </span>
            </li>
          </ul>
          <p className="pt-4">
            Contact us today to learn more about how we can help you on your
            data project!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
