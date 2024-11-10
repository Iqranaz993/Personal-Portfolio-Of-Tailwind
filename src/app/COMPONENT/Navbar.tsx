
import Link from "next/link";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

function Navbar() {
  return (
    <div className="bg-[#1E201E] z-50 top-0 sticky">
      <header className="body-font text-white">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

            <span className="ml-3 text-[#C5D3E8] text-[30px]">IQRA NAZ </span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center gap-9">
            <Link href={"/"} className="mr-5 hover:bg-[#A6B37D] text-white-900 text-[20px]">Home</Link>
            <Link href={"#About"} className="mr-5 hover:bg-[#A6B37D] text-white-900 text-[20px]">About</Link>
            <Link href={"#Skills"} className="mr-5 hover:bg-[#A6B37D] text-white-900 text-[20px]">Skills</Link>
            <Link href={"#Projects"} className="mr-5 hover:bg-[#A6B37D] text-white-900 text-[20px]">Projects</Link>
            <Link href={"#Contact"} className="mr-5 hover:bg-[#A6B37D] text-white-900 text-[20px]">Contact</Link>

          </nav>
          <Link href={"/my_cv.pdf"}>
            <button className="ml-20 inline-flex items-center bg-black-100 border-0 py-1 px-3 focus:outline-none 
    hover:bg-[#A6B37D] rounded text-base mt-4 md:mt-0">
              Download cv
              <FaCloudDownloadAlt className="text-xl ml-2" />
            </button>
          </Link>

        </div>
      </header>
    </div>

  )
}

export default Navbar

