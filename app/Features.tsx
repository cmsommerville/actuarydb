import {
  ArrowPathIcon,
  ClockIcon,
  CircleStackIcon,
  ChartBarIcon,
  GlobeAltIcon,
  LightBulbIcon,
} from "@heroicons/react/24/outline";

interface FeatureItemProps {
  icon: React.ReactNode;
  header: string;
  text: string;
}

const features: FeatureItemProps[] = [
  {
    icon: (
      <CircleStackIcon className="text-primary-500 dark:text-primary-400" />
    ),
    header: "Integrate",
    text: "We specialize in bringing all your data together into one data warehouse.",
  },
  {
    icon: <ArrowPathIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Automate",
    text: "Let us automate the data prep so you can focus on the analysis.",
  },
  {
    icon: <ClockIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Timely",
    text: "Your data when you need it.",
  },
  {
    icon: <ChartBarIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Enrich",
    text: "In ipsum voluptate commodo do aute excepteur ea aliquip ad do quis dolore. Deserunt pariatur duis in non ad ea nulla id duis. ",
  },
  {
    icon: <GlobeAltIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Modernize",
    text: "Proident dolore dolore sunt in aute magna nostrud. Eu in laborum anim nostrud.",
  },
  {
    icon: <LightBulbIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Insights",
    text: "Est pariatur exercitation incididunt elit. Sint Lorem eu culpa deserunt sit non nisi reprehenderit duis. ",
  },
];

const FeatureItem = (props: FeatureItemProps) => {
  return (
    <div className="flex">
      <div className="shrink-0 w-8 h-8 mr-1">{props.icon}</div>
      <div className="ml-2 grow">
        <p className="mb-3 font-bold text-slate-700 dark:text-slate-300">
          {props.header}
        </p>
        <p className="text-slate-500 dark:text-slate-400">{props.text}</p>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <>
      <section className="bg-slate-100 dark:bg-slate-800 py-16 relative">
        <div className="absolute inset-0 bg-grid-slate bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] dark:bg-bottom dark:border-b dark:border-slate-100/5"></div>
        <div className="container mx-auto flex flex-col items-center w-10/12 lg:w-9/12">
          <h2 className="mb-6 px-32 py-3 text-4xl font-bold text-slate-700 dark:text-slate-300 text-center">
            Why use{" "}
            <span className="text-primary-500 dark:text-primary-400">
              ActuaryDB?
            </span>
          </h2>
          <p className="lg:w-3/4 text-center text-slate-500 mb-12">
            Eu nisi culpa cupidatat esse. Deserunt laboris qui sunt amet do.
            Esse sit exercitation adipisicing labore laborum laboris incididunt
            deserunt et amet exercitation officia amet proident. Ad excepteur
            officia mollit ad ipsum magna officia deserunt veniam incididunt
            fugiat ad esse tempor. Culpa culpa deserunt ad non incididunt
            officia. Lorem ad excepteur nisi sint aute cupidatat velit eiusmod.
            Ex culpa occaecat adipisicing adipisicing dolore deserunt culpa
            aliqua ut laborum sit.
          </p>
        </div>
      </section>
      <section className="dark:bg-slate-800 pt-16 pb-24">
        <div className="container mx-auto flex flex-col items-center w-9/12">
          <div className="flex flex-wrap items-center ">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-12">
              {features.map((feature) => {
                return <FeatureItem key={feature.header} {...feature} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
