export default function ProfilePage() {
  return (
    <div className="bg-[#141414] p-10 rounded-xl shadow-lg text-center text-white max-w-xl mx-auto">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6">Profile Mahasiswa</h1>

      <div className="space-y-4 text-lg">
        <p><strong>Nama:</strong> Bima Saputra Aji</p>
        <p><strong>NIM:</strong> 21120123130104</p>
        <p><strong>Kelompok:</strong> 29</p>
      </div>

      <div className="mt-6 text-gray-300 text-sm">
        Aplikasi ini dibuat sebagai tugas Praktikum PPB
      </div>
    </div>
  );
}
