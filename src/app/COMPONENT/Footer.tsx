import Link from "next/link";
import { FaYoutube, FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <div>
            <footer className="body-font ">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center
                     text-white">


                        <span className="ml-3 text-xl hover:bg-[#A6B37D] text-white">IQRA NAZ</span>
                    </a>

                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <Link
                            target="blank"
                            href={"https://www.youtube.com/@codingtrain993"} className="text-white">
                            <FaYoutube className="text-2xl hover:text-[#ff0000]" />

                        </Link>
                        <Link
                            target="blank"
                            href={"https://www.linkedin.com/in/iqra-naz-949879221/"} className="ml-3 text-white">
                            <FaLinkedin className="text-2xl hover:text-[#0A66C2]" />

                        </Link>
                        <Link
                            target="blank"
                            href={"https://github.com/Iqranaz993"} className="ml-3 text-white">
                            <FaGithub className="text-2xl hover:text-[#000000]" />

                        </Link>
                        <Link
                            target="blank"
                            href={"https://www.instagram.com/zoyapari993/"} className="ml-3 text-white">
                            <FaInstagramSquare className="text-2xl hover:text-[#ff0000]" />

                        </Link>
                    </span>
                </div>
            </footer>

        </div>
    )
}

export default Footer;