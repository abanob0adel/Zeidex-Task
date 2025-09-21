import FormSearch from "@/components/JobsSearch/FormSearch";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Search",
};
export default function JobSearch() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-3.5 container">
        <h2 className="text-center font-bold lg:text-heading-lg text-3xl">
          Find jobs and plan your next future with us!
        </h2>
        <p className="text-body-lg  text-center text-color-link">
          Start job search at America’s No.1 Jobs site. Browse latest jobs in
          America and find your dream job.
        </p>
        <FormSearch />
      </div>
    </>
  );
}
