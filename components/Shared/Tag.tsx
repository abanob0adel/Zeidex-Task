import Link from "next/link";
import React from "react";

const Tag = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      className="py-2 px-5 border border-border bg-primary-white rounded-3xl text-black/40 text-body-sm"
      href={link}
    >
      {title}
    </Link>
  );
};
export default Tag;
