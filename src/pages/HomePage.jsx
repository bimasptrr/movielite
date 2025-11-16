export default function HomePage({ onNavigate }) {
  return (
    <div className="relative h-96 flex flex-col justify-center items-start p-10 bg-gradient-to-r from-black to-red-900 rounded-xl shadow-lg overflow-hidden">

      <h1 className="text-5xl font-extrabold mb-4 text-white drop-shadow-lg">
        Unlimited Movies, For You.
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-6">
        Jelajahi koleksi film favorit lengkap dengan tampilan modern ala Netflix.
      </p>

      <button
        onClick={() => onNavigate("movies")}
        className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg shadow-lg"
      >
        Mulai Menonton →
      </button>
    </div>
  );
}
