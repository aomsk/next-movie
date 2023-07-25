import React from "react";
import Image from "next/image";

type Props = {
  params: any;
};

export default async function MovieDetail({ params }: Props) {
  const imagePath = "https://image.tmdb.org/t/p/original";

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = await response.json();

  return (
    <div>
      <h2 className="text-4xl font-bold">{data.title}</h2>
      <p className="text-[15px]">Release date : {data.release_date}</p>
      <Image
        width={600}
        height={600}
        className="my-12 w-full"
        src={imagePath + data.backdrop_path}
        alt={data.title}
        priority
      />
      <p className="text-justify">{data.overview}</p>
    </div>
  );
}
