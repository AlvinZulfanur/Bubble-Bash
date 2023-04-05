import Button from "./Button"
export default function JoinSection() {
  return (
    <>
      <section>
        <div className="bg-green-600">
          <div className="container mx-auto py-16">
            <div>
              <h1 className="md:text-5xl text-3xl text-white font-bold text-center w-full md:w-6/12 mx-auto mb-4">
                Have a project idea and want to make it come true?
              </h1>
              <p className="text-lg text-white text-center md:w-7/12 w-full px-2 md:px-0 mx-auto">
                Please contact us and we will discuss about your project, don't
                forget we are always here for you
              </p>
              <Button>Contact Us</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
