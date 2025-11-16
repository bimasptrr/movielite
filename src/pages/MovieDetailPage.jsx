export default function MovieDetailPage({ movie, onNavigate }) {
  return (
    <div className="bg-[#141414] p-8 rounded-xl shadow-lg text-white">
      <button
        onClick={() => onNavigate("movies")}
        className="mb-6 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
      >
        ← Kembali
      </button>

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={movie.poster}
          className="rounded-lg w-72 shadow-xl"
        />

        <div>
          <h1 className="text-4xl font-extrabold text-red-600">{movie.title}</h1>
          <p className="text-gray-400 mt-2">{movie.year} • {movie.duration}</p>

          <p className="mt-4 text-gray-200 leading-relaxed">{movie.synopsis}</p>

          <p className="mt-6"><strong>Director:</strong> {movie.director}</p>

          <div className="mt-5">
            <strong>Genre:</strong>
            <div className="flex gap-3 mt-2 flex-wrap">
              {movie.genre.map((g) => (
                <span
                  key={g}
                  className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {g}
                </span>
              ))}
            </div>
          </div>

          <p className="mt-5 text-yellow-400 font-bold text-xl">⭐ {movie.rating}</p>
        </div>
      </div>
    </div>
  );
}
