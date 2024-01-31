import CardList from "@/components/CardList";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-10">
        <Featured />
        <CategoryList />
        <div>
          <CardList />
        </div>
      </div>
    </div>
  );
};

export default Home;
