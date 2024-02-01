import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className=" bg-blue-500 py-2 rounded-full text-center text:xl my-2 md:my-5 md:text-3xl">
        Style Blog
      </h1>
      <div className="flex flex-col gap-10">
        <CategoryList />
      </div>
      <div>
        <CardList />
      </div>
    </div>
  );
};

export default page;
