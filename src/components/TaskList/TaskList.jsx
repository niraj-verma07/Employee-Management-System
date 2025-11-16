import React from "react";

const TaskList = () => {
  return (
    <div
      id="tasklist"
      className="h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 "
    >
      <div className="h-full w-[300px] bg-red-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">15 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Design new landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatem culpa ex asperiores, ut excepturi?
        </p>
      </div>

      <div className="h-full w-[300px] bg-yellow-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">15 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Design new landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatem culpa ex asperiores, ut excepturi?
        </p>
      </div>

      <div className="h-full w-[300px] bg-blue-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">15 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Design new landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatem culpa ex asperiores, ut excepturi?
        </p>
      </div>

      <div className="h-full w-[300px] bg-green-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">15 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Design new landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatem culpa ex asperiores, ut excepturi?
        </p>
      </div>

      <div className="h-full w-[300px] bg-red-400 rounded-xl shrink-0 p-5">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">15 Nov 2025</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Design new landing page</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          voluptatem culpa ex asperiores, ut excepturi?
        </p>
      </div>
    </div>
  );
};

export default TaskList;
