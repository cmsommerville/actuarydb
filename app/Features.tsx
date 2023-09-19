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
    text: "Spend less time gathering data from across your organization. Bring it all together into one data warehouse.",
  },
  {
    icon: <ArrowPathIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Automate",
    text: "Stop manually munging your data. Let us automate the data prep so you can focus on the analysis.",
  },
  {
    icon: <GlobeAltIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Modernize",
    text: "Relational, NoSQL, cloud, or on-prem. We can help you onboard the latest technologies to fit your use case.",
  },
  {
    icon: <ClockIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Timely",
    text: "Actuaries' time is valuable. Get your data when you need it.",
  },
  {
    icon: <ChartBarIcon className="text-primary-500 dark:text-primary-400" />,
    header: "Enrich",
    text: "Don't settle for transactional data. Create data that is useful to actuaries.",
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
    <section id="features" className="dark:bg-slate-800 pt-16 pb-24">
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
  );
};

export default Features;
