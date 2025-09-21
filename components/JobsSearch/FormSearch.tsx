import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function FormSearch() {
  return (
    <form className="mt-3.5 flex items-center flex-col lg:flex-row gap-3.5 px-3 py-4 lg:py-0 bg-white border border-border rounded-2xl">
      <div>
        <Input placeholder="Location" />
      </div>
      <div className="lg:border-l border-border">
        <Input placeholder="Keyword" />
      </div>
      <div className="lg:border-l border-border">
        <Input placeholder="Salary Range" />
      </div>

      <Button
        type="submit"
        variant="blue"
        className="w-full lg:w-fit shadow-primary"
      >
        Search Jobs
      </Button>
    </form>
  );
}
