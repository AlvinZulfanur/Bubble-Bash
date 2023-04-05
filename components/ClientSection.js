import SectionTitle from "./SectionTitle"
import ReviewsCard from "./ReviewsCard"
export default function ClientSection() {
  return (
    <>
      <section>
        <div className="container mx-auto py-10 mb-12">
          <SectionTitle
            title="Client Reviews"
            description="What Our Happy Client Say About Us"
          />
          <div className="flex sm:flex-row flex-col mt-8 px-4 sm:px-0 ">
            <div className="sm:w-4/12 w-full ">
              <ReviewsCard
                project="Website My Hospital"
                feedback="Very nice to work with Bubble Bash, a reliable and responsive team is very helpful"
                avatarImage="avatar-1.png"
                avatarName="Katty Clock"
                avatarJob="CEO My Hospital"
              />
            </div>
            <div className="sm:w-4/12 w-full ">
              <ReviewsCard
                project="Logo F&B Corp"
                feedback="Really the best service we've ever gotten, really looking forward to the next project"
                avatarImage="avatar-2.png"
                avatarName="John Robert"
                avatarJob="CEO My Hospital"
              />
            </div>
            <div className="sm:w-4/12 w-full">
              <ReviewsCard
                project="Supermarket Mobile Apps"
                feedback="The best developer team ever, it's a lot of fun working. Maybe work together again on the next project?"
                avatarImage="avatar-3.png"
                avatarName="Katty Clock"
                avatarJob="CEO My Hospital"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
