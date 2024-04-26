import React from "react";

const StatementBar = ({ statement, percentage }) => {
  return (
    <div className="p-2">
      <div className="flex items-start mb-2 space-x-1 text-left">
        <div className="text-4xl font-sans-500">{percentage}%</div>
        <div className="font-sans-300">{statement}</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="transition-all ease-out duration-1000 bg-gradient-to-r from-[#1c4cfc] to-[#a4b6fafb] h-full rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const StatementList = () => {
  return (
    <div className="bg-gray-100 rounded-xl p-4 border-[1.5px] border-gray-300">
      <StatementBar
        statement="
Of our costumers reported smoother and tighter skin apperance"
        percentage={98}
      />
      <StatementBar
        statement="
Deep and long-lasting hydration right after using the product"
        percentage={96}
      />
      <StatementBar
        statement="
Of our costumers stated that they would recommend Gle Skincare to others"
        percentage={85}
      />
    </div>
  );
};

export default StatementList;
