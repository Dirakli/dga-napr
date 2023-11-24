import React from "react";

function MainWrapper(children: any) {
  return (
    <main className="bg-gray-300 min-h-screen w-full flex flex-col justify-between">
      {children}
    </main>
  );
}

export default MainWrapper;
