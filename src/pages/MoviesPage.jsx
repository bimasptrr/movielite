import { Movies } from "../data/movies";

export default function MoviesPage({ onNavigate }) {
  const movies = Object.values(Movies.movies);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-5 text-red-600">Popular Movies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => onNavigate("detail", movie)}
            className="cursor-pointer group"
          >
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src={movie.poster}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-300"
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black/80 w-full p-3">
                <p className="font-semibold text-white">{movie.title}</p>
                <p className="text-gray-300 text-sm">{movie.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
