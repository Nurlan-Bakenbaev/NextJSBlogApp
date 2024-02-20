import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import React from "react";

const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div>
      <h1 className=" bg-blue-500 py-2 rounded-full text-center text:xl my-2 md:my-5 md:text-3xl">
        {cat} Blog
      </h1>
      <div className="flex flex-col gap-10">
        <CategoryList />
      </div>
      <div>
        <CardList  page={page} cat={cat} />
      </div>
    </div>
  );
};

export default page;
