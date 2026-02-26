import React from "react";

const StatsCard = ({ OnStats }) => {
  return (
    <article className="bg-border-btns flex flex-col justify-center items-center p-8 rounded-2xl">
      <h4 className="text-3xl text-acentocyan md:text-4xl">
        {OnStats.number}+
      </h4>
      <p className="text-center text-sm text-trirdtext md:lg">
        {OnStats.description}
      </p>
    </article>
  );
};

export default StatsCard;
