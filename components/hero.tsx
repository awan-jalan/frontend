import VideoThumb from "@/public/images/modal.png";
import ModalVideo from "@/components/modal-video";
import { useRouter } from 'next/navigation'

export default function Hero() {
  const route = useRouter()
  const handleClick = (e : any) => {
    e.preventDefault()
    route.push("./result")
  }
  return (
    <section className="relative">
      <div
        className="h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://imgsrv2.voi.id/wB9BwjIkuwgNnzL1CEN1l891OcJwMjF-7ucmFe1BPI0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83MDY4LzIwMjAwNjEwMTQwNi1tYWluLmNyb3BwZWRfMTU5MTc3MjgxMi5qcGc.jpg)",
        }}
      >
        <div className="h-screen w-full bg-gradient-to-tr from-white to-[#fffa] backdrop-sm ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="pt-40  text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Kami melakukan deteksi{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  jalanan rusak
                </span>
                .
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-2xl text-gray-700 mt-6"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Mulai dengan unggah video!
                </p>
              </div>
            </div>

            <label className="flex flex-col items-center justify-center mt-6" data-aos="zoom-y-out" data-aos-delay="300">
              <input
                type="file"
                className="w-96 text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded file:border-0
                  file:text-sm file:font-semibold
                  file:bg-gray-100 file:text-blue-700
                  hover:file:bg-gray-200
                "
              />
            </label>
            <div
              className="flex flex-col items-center justify-center mt-6"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <button
                onClick={()=> handleClick}
                className="btn-sm text-gray-100 bg-teal-600 hover:bg-teal-800 disabled:opacity-40"
                disabled
              >
                Upload Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
