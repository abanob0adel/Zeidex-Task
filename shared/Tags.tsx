import routes from "@/lib/routes";

export interface TagsTypes {
  link: string;
  title: string;
}

export const TagsLinks: TagsTypes[] = [
  { link: "#", title: "Jobs in California" },
  { link: "#", title: "Jobs in Arizona" },
  { link: "#", title: "Jobs in Washington" },
  { link: "#", title: "Jobs in New York" },
  { link: "#", title: "Jobs in Florida" },
];
