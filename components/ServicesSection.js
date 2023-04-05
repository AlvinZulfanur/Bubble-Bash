import ServiceCard from "./ServiceCard"
import SectionTitle from "./SectionTitle"

export default function ServicesSection() {
  return (
    <>
      <section>
        <div className="bg-gray-100 mt-20">
          <div className="container mx-auto py-10">
            <SectionTitle
              title="Our Service"
              description="We Provide What You Need"
            />
            <div className="flex sm:flex-row sm:flex-wrap flex-col md:ml-12 sm:p-8  px-5 py-6">
              <div className="sm:w-6/12 md:w-4/12 w-full mb-8">
                <ServiceCard
                  image="figma.png"
                  service="UI UX Designer"
                  description="We are ready to make your website more friendly and efficient in the eyes of users"
                />
              </div>
              <div className="sm:w-6/12 md:w-4/12 w-full mb-8 ">
                <ServiceCard
                  image="Code.png"
                  service="Web Development"
                  description="Want to create a website that has many features? We have the answer for you."
                />
              </div>
              <div className="sm:w-6/12 md:w-4/12 w-full mb-8 ">
                <ServiceCard
                  image="ArticleMedium.png"
                  service="Content Writer"
                  description="We provide interesting content and can attract customers for you"
                />
              </div>
              <div className="sm:w-6/12 md:w-4/12 w-full mb-8 ">
                <ServiceCard
                  image="presentation.png"
                  service="Branding"
                  description="Create visual branding with amazing result, you just sit back and relax"
                />
              </div>
              <div className="sm:w-6/12 md:w-4/12 w-full mb-8 ">
                <ServiceCard
                  image="VideoCamera.png"
                  service="Editing Video"
                  description="Want to create a website that has many features? We have the answer for you."
                />
              </div>
              <div className="sm:w-6/12 md:w-4/12 w-full mb-8 ">
                <ServiceCard
                  image="PenNib.png"
                  service="Illustration"
                  description="Create beauty illustrasion as you need, and make it interesting"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
