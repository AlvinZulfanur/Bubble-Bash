import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import OverviewPanel from "../../components/OverviewPanel"
import ServicesSection from "../../components/ServicesSection"
import PortofoliosSection from "../../components/PortofoliosSection"
import ClientSection from "../../components/ClientSection"
import JoinSection from "../../components/JoinSection"
export default function Home() {
  return (
    <>
      <div className="bg-green-600 h-[700px]">
        <Navbar />
        <Hero />
      </div>
      <OverviewPanel />
      <ServicesSection />
      <PortofoliosSection />
      <ClientSection />
      <JoinSection />
      <footer className="md:p-20 p-5">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col md:space-x-11 relative">
            <div className="md:w-6/12 w-full">
              <div className="flex items-center space-x-2 mb-2">
                <img src="Logo Bubble.png" />
                <h3 className="text-ebonyClay-900 font-semibold font-sans text-xl">
                  Bubble Bash
                </h3>
              </div>
              <p className="text-lg text-ebonyClay-600 mb-4 w-11/12 md:block hidden">
                Introducing, We are Bubble Bash digital agency company with more
                than 6 years of experience. We are committed to serve with all
                our heart
              </p>
              <div className="flex space-x-4 mb-2 absolute md:static bottom-0 md:mb-0 mb-10">
                <img src="fb.png" className="w-8 h-8 " />
                <img src="twitter.png" className="w-8 h-8 " />
                <img src="IG.png" className="w-8 h-8" />
                <img src="linkedin.png" className="w-8 h-8" />
              </div>
              <p className="md:text-lg text-base text-ebonyClay-600 md:static absolute bottom-0">
                UI design by{" "}
                <a href="https://www.figma.com/@glennvhalado">Glenn Vhalado</a>
              </p>
            </div>
            <div className="md:w-6/12 w-full mx-auto">
              <div className="flex md:flex-row flex-col md:space-x-6">
                <div className="md:w-4/12 w-full">
                  <h3 className="font-semibold md:text-lg text-base text-ebonyClay-900 mb-3">
                    Pages
                  </h3>
                  <div className="flex flex-col space-y-4 text-ebonyClay-600 md:text-lg text-sm md:mb-0 mb-3">
                    <p>Home</p>
                    <p>Our Services</p>
                    <p>Portofolio</p>
                    <p>Testimonial</p>
                    <p>Contact Us</p>
                  </div>
                </div>
                <div className="md:w-4/12 w-full">
                  <h3 className="font-semibold md:text-lg text-base text-ebonyClay-900 mb-3">
                    Explore
                  </h3>
                  <div className="flex flex-col space-y-4 text-ebonyClay-600 md:text-lg text-sm md:mb-0 mb-3">
                    <p>Resources</p>
                    <p>Blog</p>
                    <p>Document</p>
                  </div>
                </div>
                <div className="md:w-4/12 w-full">
                  <h3 className="font-semibold md:text-lg text-base text-ebonyClay-900 mb-3">
                    Company
                  </h3>
                  <div className="flex flex-col space-y-4 text-ebonyClay-600 md:text-lg text-sm text-lg md:mb-0 mb-24 md:mb-0 mb-3">
                    <p>About Us</p>
                    <p>Partners</p>
                    <p>Customers</p>
                    <p>Contact Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
