import React from "react";

const PopularPost = () => {
  return (
    <div className="w-full md:w-[350px] lg:w-full mt-12 md:mt-5 flex flex-col items-start gap-3">
      <h3 className="text-lg">Popular Posts</h3>
      <div className="p-1 rounded-md bg-orange-500">Travel</div>
      <p className="text-sm">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod officiis
        quae quas dolor iure. Deleniti molestias quisquam cum. Cumque, ex?
      </p>
    </div>
  );
};

export default PopularPost;
