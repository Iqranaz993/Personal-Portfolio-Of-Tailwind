import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const SectionAbout = () => {
  return (
    <div id="About" className="body-font">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white text-center justify-center">
        About Me
      </h1>
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">

          <Image
            className="object-cover object-center rounded-full mx-auto w-[12rem]"
            alt="About"
            width={150}
            height={150}
            src={require('../../../public/profile2.jpeg')}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed text-white">
            Hi! I'm IQRA NAZ, a student of governor house initative Artifical Intalligence web 3.0 and metaverse.
            With expertise in HTML and CSS, I love building interactive, user-friendly digital experiences.
            Through projects like web pages , I've honed my skills in
            html and css. When I'm not coding, I enjoy music and outing.
            i am doing job in Dewan ishtiaq group of companies as a receptionist.
            Feel free to explore my work or reach out if you'd like to collaborate!
          </p>
          <div className="flex justify-center items-center">
            <Link href={"/my_cv.pdf"}>
              <button className='inline-flex text-white bg-blue-500 border-0 py-2  px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
                View Cv
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>

  )
}
