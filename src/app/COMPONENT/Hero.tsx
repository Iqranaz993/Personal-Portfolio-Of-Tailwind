'use client'
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="text-white text-2xl">Hello</h2>
            <h1 className="text-white text-3xl mx-[40px] ">I'M</h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              IQRA NAZ
            </h1>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white"> A {" "}
              <span style={{ color: 'red', fontWeight: 'bold' }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Web Developer', 'Teacher', 'Youtuber', 'Receptionist!']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}

                />
              </span>
            </h1>

            <p className="mb-8 leading-relaxed text-white">
              I specialize in creating interactive, user-centered applications with clean, efficient code. Welcome to my portfolio – take a look around!
            </p>
            <Link href={"#Contact"}>
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">

                Contact

              </button>
            </Link>
          </div>

          <div className="flex lg:flex-row md:flex-col">


          </div>

          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-full mx-auto w-[15rem]"
              alt="hero"
              width={200}
              height={200}
              src={require('../../../public/profile.png')}
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default Hero;