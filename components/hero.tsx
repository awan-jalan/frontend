import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Hero() {
  const route = useRouter();
  const handleClick = (e: any) => {
    e.preventDefault();
    route.push("./result");
  };
  const [dragActive, setDragActive] = useState<boolean>(false);
  const inputRef = useRef<any>(null);
  const [files, setFiles] = useState<any>([]);

  function handleChange(e: any) {
    e.preventDefault();
    console.log("File has been added");
    if (e.target.files && e.target.files[0]) {
      for (let i = 0; i < e.target.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.target.files[i]]);
      }
    }
  }

  function handleSubmitFile(e: any) {
    if (files.length === 0) {
      // no file has been submitted
    } else {
      // write submit logic here
    }
  }

  function handleDrop(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      for (let i = 0; i < e.dataTransfer.files["length"]; i++) {
        setFiles((prevState: any) => [...prevState, e.dataTransfer.files[i]]);
      }
    }
  }

  function handleDragLeave(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  }

  function handleDragOver(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function handleDragEnter(e: any) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  }

  function removeFile(fileName: any, idx: any) {
    const newArr = [...files];
    newArr.splice(idx, 1);
    setFiles([]);
    setFiles(newArr);
  }

  function openFileExplorer() {
    inputRef.current.value = "";
    inputRef.current.click();
  }

  return (
    <section className="relative">
      <div
        className="h-max bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://imgsrv2.voi.id/wB9BwjIkuwgNnzL1CEN1l891OcJwMjF-7ucmFe1BPI0/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy83MDY4LzIwMjAwNjEwMTQwNi1tYWluLmNyb3BwZWRfMTU5MTc3MjgxMi5qcGc.jpg)",
        }}
      >
        <div className=" w-full bg-gradient-to-tr from-white to-[#fffa] backdrop-sm py-28">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            {/* Hero content */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-4xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
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
                  className="text-2xl font-semibold text-gray-700 mt-6"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Mulai dengan unggah video!
                </p>
              </div>
            </div>

            <div className="flex flex-col py-5 items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className={`flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 bg-opacity-50 hover:bg-opacity-75
                  ${dragActive ? "border-4 border-gray-600" : "border-2 border-gray-300"}`}
                onDragEnter={handleDragEnter}
                onSubmit={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
              >
                <input
                  id="dropzone-file"
                  type="file"
                  ref={inputRef}
                  onChange={handleChange}
                  className="hidden"
                  accept=".mp4"
                  multiple={false}
                />
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Drag-drop ke sini</span>{" "}
                    atau klik untuk upload
                  </p>
                  <p className="text-xs text-gray-500">Menerima format MP4</p>
                </div>
                <div className="flex flex-col items-center p-3">
                  {files.map((file: any, idx: any) => (
                    <div key={idx} className="flex flex-row space-x-5">
                      <span className="text-sm">{file.name}</span>
                      <button
                        onClick={() => removeFile(file.name,idx)}
                      >
                        <AiOutlineClose className="text-red-500" />
                      </button>
                    </div>
                  ))}
                </div>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center mt-6">
              <button
                onClick={(e) => handleClick(e)}
                className="btn-sm text-gray-100 bg-teal-600 hover:bg-teal-800 disabled:opacity-40"
                disabled={files.length === 0}
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
