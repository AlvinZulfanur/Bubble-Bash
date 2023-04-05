import Button from "./Button"

export default function Hero() {
  return (
    <>
      <div className="container mx-auto">
        <div className=" text-white font-sans sm:mt-16 mt-0">
          <h1 className="sm:text-6xl text-3xl font-bold w-10/12 mx-auto text-center leading-normal">
            Create Amazing Digital Product For Your Business
          </h1>
          <p className="sm:text-lg text-lg text-white/60 mx-auto text-center sm:w-9/12 w-10/12 sm:mt-7 mt-2">
            We are a professional digital agency that has been established since
            2016, we present a variety of digital services that can help you
            solve problems in your business
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
    </>
  )
}
