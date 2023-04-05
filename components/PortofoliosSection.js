import SectionTitle from "./SectionTitle"
import PortofoliosCard from "./PortofoliosCard"
export default function PortofoliosSection() {
  return (
    <>
      <section>
        <div className="container mx-auto py-10">
          <SectionTitle
            title="Our Portofolio's"
            description="Recent Projects"
          />
          <div className="flex sm:flex-row sm:flex-wrap flex-col mt-10">
            <div className="md:w-4/12 sm:w-6/12 w-full">
              <PortofoliosCard
                image="porto-1.jpg"
                project="Website My Hospital"
                description="Create a hospital website with patient, doctor, and drug logistics features that help hospital operations"
              />
            </div>
            <div className="md:w-4/12 sm:w-6/12 w-full">
              <PortofoliosCard
                image="porto-2.jpg"
                project="Food & Beverages Corp Logo"
                description="Create a logo for a food & beverage company, with emphasis on aesthetics and user requests"
              />
            </div>
            <div className="md:w-4/12 sm:w-6/12 sm:mx-auto w-full">
              <PortofoliosCard
                image="porto-3.jpg"
                ImageClassName="h-50 w-full"
                project="Supermarket Mobile Apps"
                description="Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
