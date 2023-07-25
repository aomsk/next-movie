import React from "react";
import Link from "next/link";

type Props = {};

export default function NotFound({}: Props) {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[10px]">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-bold mb-2">Not Found 404</h1>
        <Link href="/" className="btn">
          Back To Home
        </Link>
      </div>
    </div>
  );
}
