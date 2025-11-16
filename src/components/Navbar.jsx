export default function Navbar({ onNavigate }) {
  return (
    <nav className="w-full bg-black border-b border-red-600 shadow-lg">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1
          onClick={() => onNavigate("home")}
          className="text-3xl font-extrabold text-red-600 cursor-pointer tracking-wide"
        >
          MovieLite
        </h1>

        <div className="flex gap-8 text-lg font-medium text-white">
          <button onClick={() => onNavigate("home")} className="hover:text-red-500">Home</button>
          <button onClick={() => onNavigate("movies")} className="hover:text-red-500">Movies</button>
          <button onClick={() => onNavigate("profile")} className="hover:text-red-500">Profile</button>
        </div>
      </div>
    </nav>
  );
}
