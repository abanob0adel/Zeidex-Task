import routes from "@/lib/routes";

export interface NavTypes {
  link: string;
  title: string;
}

const baseLinks: NavTypes[] = [
  { link: routes.HOME, title: "Home" },
  { link: routes.FeaturedJobs, title: "Featured Jobs" },
  { link: routes.SalaryTrend, title: "Salary Trend" },
  { link: routes.WhereToFly, title: "Where To Fly" },
  { link: routes.CovidPolicy, title: "Covid Policy" },
  { link: routes.Blog, title: "Blog" },
];

export const NavLinks = baseLinks;

export const mobileLinks: NavTypes[] = [
  ...baseLinks,
  { link: routes.Help, title: "Help" },
];
