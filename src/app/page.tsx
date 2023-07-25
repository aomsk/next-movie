import Movie from "../components/movie";

export default async function Home() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
  const data = await response.json();

  return (
    <main>
      <h1 className="text-xl font-bold mb-4">Popular Movie ({data.results.length})</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {data.results.map((movie: any) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </main>
  );
}
