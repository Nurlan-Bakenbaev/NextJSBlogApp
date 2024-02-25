import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import React from "react";

const Home = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  return (
    <div>
      <div className="flex flex-col gap-10">
        <h2 className="text-lg md:text-4xl  text-center my-3">
          My Blog with CRUD
        </h2>
        <Featured />
        <CategoryList />
        <div>
          <CardList page={page} />
        </div>
      </div>
    </div>
  );
};

export default Home;
