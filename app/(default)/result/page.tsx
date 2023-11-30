export default function Result() {
  const ini_hasil = 0;
  return (
    <>
      <div>
        <div
          className="h-screen bg-cover bg-no-repeat absolute w-full z-[-10]"
          style={{
            backgroundImage:
              "url(https://imgsrv2.voi.id/wB9BwjIkuwgNnzL1CEN1l891OcJwMjF-7ucmFe1BPI0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83MDY4LzIwMjAwNjEwMTQwNi1tYWluLmNyb3BwZWRfMTU5MTc3MjgxMi5qcGc.jpg)",
          }}
        >
          <div className="h-screen w-full bg-gradient-to-tr from-white to-[#fffa] backdrop-sm ">
            <div className="max-w-6xl mx-auto px-4 sm:px-6"></div>
          </div>
        </div>
      </div>

      <div
        className="h-screen w-full flex flex-col items-center justify-center"
        data-aos="zoom-y-out"
      >
        <div className="text-2xl font-bold mb-8">Hasil Deteksi</div>
        <div>
          Jumlah Lubang: <span>{ini_hasil}</span>
        </div>
        <table className="table-auto mt-4">
          <thead>
            <tr className="bg-neutral-50 bg-opacity-75 transition duration-200 ease-in-out hover:bg-neutral-100">
              <th className="px-3 py-2">Gambar</th>
              <th className="px-3 py-2">Waktu</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b transition duration-200 ease-in-out hover:bg-neutral-50 hover:bg-opacity-50">
              <td className="px-3 py-2">
                The Sliding Mr. Bones (Next Stop, Pottersville)
              </td>
              <td className="px-3 py-2">Malcolm Lockyer</td>
            </tr>
            <tr className="border-b transition duration-200 ease-in-out hover:bg-neutral-50 hover:bg-opacity-50">
              <td className="px-3 py-2">Witchy Woman</td>
              <td className="px-3 py-2">The Eagles</td>
            </tr>
            <tr className="border-b transition duration-200 ease-in-out hover:bg-neutral-50 hover:bg-opacity-50">
              <td className="px-3 py-2">Shining Star</td>
              <td className="px-3 py-2">Earth, Wind, and Fire</td>
            </tr>
          </tbody>
        </table>
        <a
          className="btn-sm text-gray-100 bg-teal-600 hover:bg-teal-800 mt-8"
          href=".\"
        >
          Ulangi Deteksi
        </a>
      </div>
    </>
  );
}
