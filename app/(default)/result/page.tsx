export default function Result() {
  const ini_hasil = 0
  return (
    <>
    <div >
      <div
        className="h-screen bg-cover bg-no-repeat absolute w-full z-[-10]"
        style={{
          backgroundImage:
            "url(https://imgsrv2.voi.id/wB9BwjIkuwgNnzL1CEN1l891OcJwMjF-7ucmFe1BPI0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83MDY4LzIwMjAwNjEwMTQwNi1tYWluLmNyb3BwZWRfMTU5MTc3MjgxMi5qcGc.jpg)",
        }}
      >
        <div className="h-screen w-full bg-gradient-to-tr from-white to-[#fffa] backdrop-sm ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

          </div>
        </div>
      </div>
    </div>
   
    <div className="w-full ml-[30vw] mt-[40vh]">
    <div>
      Jumlah Lubang : 
      <span>
        {ini_hasil}
      </span>
    </div>
    <table className="table-auto">
    <thead>
      <tr>
        <th>Image</th>
        <th>Time</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
        <td>Malcolm Lockyer</td>
      </tr>
      <tr>
        <td>Witchy Woman</td>
        <td>The Eagles</td>
      </tr>
      <tr>
        <td>Shining Star</td>
        <td>Earth, Wind, and Fire</td>
      </tr>
    </tbody>
  </table>
    </div>
    </>
  );
}
