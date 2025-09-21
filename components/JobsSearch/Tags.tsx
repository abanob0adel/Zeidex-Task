import { TagsLinks, TagsTypes } from "@/shared/Tags";
import Tag from "../Shared/Tag";

export default function Tags() {
  return (
    <>
      <div className="mt-11">
        <div className="flex items-center flex-wrap lg:flex-nowrap justify-center gap-3.5">
          {TagsLinks.map((item: TagsTypes, index) => (
            <Tag key={index} title={item?.title} link={item?.link} />
          ))}
        </div>
      </div>
    </>
  );
}
