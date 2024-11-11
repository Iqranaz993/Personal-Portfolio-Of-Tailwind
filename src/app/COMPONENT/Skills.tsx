import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextui } from "react-icons/si";
import { FaRegFileExcel } from "react-icons/fa";
import { FaFileWord } from "react-icons/fa";
function Skills() {
  return (
    <div id="Skills">
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">

            <h1 className="sm:text-3xl text-2xl font-medium title-font text-white">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 mt-[5rem]">
            {/* skills */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaHtml5 className="font-bold" />
                  </div>
                  <h2 className="text-lg text-white title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-white rounded-xl">
                    <div className="absoulte bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">90%</p>


                </div>
              </div>
            </div>
            {/* skill2 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaCss3Alt className="font-bold" />
                  </div>
                  <h2 className="text-lg text-white title-font font-medium">
                    css
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-white rounded-xl">
                    <div className="absoulte bg-blue-500 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">80%</p>


                </div>
              </div>
            </div>
            {/* skill3 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <IoLogoJavascript className="font-bold" />
                  </div>
                  <h2 className="text-lg text-white title-font font-medium">
                    JavaScript/typeScript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-white rounded-xl">
                    <div className="absoulte bg-blue-500 h-1 rounded-xl w-[50%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">50%</p>


                </div>
              </div>
            </div>
            {/* skill 4 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <SiNextui className="font-bold" />
                  </div>
                  <h2 className="text-lg text-white title-font font-medium">
                    Next.js
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-white rounded-xl">
                    <div className="absoulte bg-blue-500 h-1 rounded-xl w-[40%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">40%</p>
                </div>
              </div>
            </div>
            {/* skill5 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaRegFileExcel className="font-bold" />
                  </div>
                  <h2 className="text-lg text-white title-font font-medium">
                    MS Excel
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-white rounded-xl">
                    <div className="absoulte bg-blue-500 h-1 rounded-xl w-[100%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">100%</p>


                </div>
              </div>
            </div>
            {/* skill6 */}
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <FaFileWord className="font-bold" />
                  </div>
                  <h2 className="text-lg text-white title-font font-medium">
                    MS worls
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="relative h-1 w-full bg-white rounded-xl">
                    <div className="absoulte bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-blue-600 text-right">90%</p>


                </div>
              </div>
            </div>





          </div>
        </div>


      </section>

    </div>
  )
}

export default Skills;