"use client";

import React from "react";

export default function Error({ error, reset }: any) {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px]">
      <h1 className="text-red-500 font-bold">Error : {error.message}</h1>
    </div>
  );
}
