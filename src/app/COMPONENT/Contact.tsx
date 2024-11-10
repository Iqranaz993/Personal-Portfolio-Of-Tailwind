function Contact() {
  return (
    <section id="Contact" className="text-gray-600 body-font relative">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-white text-center">
        Contact
      </h1>

      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            // frameBorder={0}
            title="map"
            // marginHeight={0}
            // marginWidth={0}
            // scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.592621391447!2d66.99325027443031!3d24.87775954456686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315862b73e75d%3A0x5864dabe740501c5!2sMiran%20Naka%20Lyari%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731094464606!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            style={{ filter: "contrast(1.2) opacity(0.4)" }}
          />
          <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">
                Miran Naka Lyari, Karachi City, Sindh, Pakistan
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-500 leading-relaxed">zoyapari993@gmail.com</a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">0311-2553572</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 mx-auto
     text-black">
          <h2 className="text-lg mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5 text-black">
            Fell free to contact me!
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
               focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2
               focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors
                duration-200 ease-in-out"
              defaultValue={""}
            />
          </div>
          <button className="bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Send Message
          </button>

        </div>
      </div>
    </section>

  )
}

export default Contact