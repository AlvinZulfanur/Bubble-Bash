export default function ReviewsCard({
  project,
  feedback,
  avatarImage,
  avatarName,
  avatarJob,
}) {
  return (
    <>
      <div className="border-2 border-ebonyClay-900 sm:w-11/12 p-6 hover:border-green-500 transition-all mb-3 sm:mb-0">
        <h3 className="font-semibold text-2xl text-ebonyClay-900 mb-2">
          {project}
        </h3>
        <p className="md:text-lg text-sm text-ebonyClay-600 mb-3">{feedback}</p>
        <div className="flex items-center space-x-3">
          <img src={avatarImage} />
          <div>
            <h3 className="font-semibold md:text-lg text-base text-ebonyClay-900">
              {avatarName}
            </h3>
            <p className="md:text-lg text-sm text-ebonyClay-600">{avatarJob}</p>
          </div>
        </div>
      </div>
    </>
  )
}
