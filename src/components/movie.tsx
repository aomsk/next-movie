import React from "react";
import Link from "next/link";
import Image from "next/image";

type Props = {
  id: string;
  title: string;
  poster_path: string;
  release_date: string;
};

export default function Movie({ id, title, poster_path, release_date }: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="card w-auto h-[350px] bg-base-100 shadow-xl">
        <figure>
          <Image
            className="w-auto h-auto"
            src={imagePath + poster_path}
            width={100}
            height={100}
            alt={title}
            priority
          />
        </figure>
        <div className="card-body">
          <Link href={`/movie/${id}`}>
            <h2 className="card-title text-[15px]">{title}</h2>
          </Link>
          <p className="text-[15px]">Release date : {release_date}</p>
        </div>
      </div>
    </div>
  );
}
