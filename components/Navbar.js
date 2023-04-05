import Logo from "/public/Logo Bubble.png"
import Image from "next/image"
import { useState } from "react"
export default function Navbar() {
  const [OffCanvas, setOffCanvas] = useState(false)
  return (
    <nav className="py-8">
      <div className="container mx-auto">
        <div className="flex items-center">
          <div className="lg:w-3/12 w-10/12 space-x-3 flex items-center cursor-pointer px-3 sm:px-3 md:px-0">
            <Image src={Logo} alt="Logo" className="w-10" />
            <h3 className="text-white font-semibold font-sans text-xl">
              Bubble Bash
            </h3>
          </div>
          <div className="lg:hidden w-2/12 text-end px-2">
            <button onClick={() => setOffCanvas(!OffCanvas)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M3 12H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
          <div
            className={`lg:w-9/12 lg:static lg:bg-none bg-gradient-to-b from-green-950 to-green-500 w-full lg:h-auto h-screen fixed top-0 transition-all ${
              OffCanvas ? "left-0" : "-left-full"
            }`}
          >
            <button
              className="absolute top-10 right-10 lg:hidden"
              onClick={() => setOffCanvas(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <ul className="lg:flex justify-end lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 p-5 lg:p-0 text-white text-lg font-sans cursor-pointer">
              <li className="hover:underline">Home</li>
              <li className="hover:underline">Our Services</li>
              <li className="hover:underline">Portofolio</li>
              <li className="hover:underline">Testimonial</li>
              <li className="hover:underline">Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
