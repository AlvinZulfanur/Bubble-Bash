export default function PortofoliosCard({
  image,
  project,
  description,
  ImageClassName,
}) {
  const addClassName = ImageClassName ? `${ImageClassName}` : ""
  return (
    <div className="sm:w-12/12 md:w-10/12 sm:p-2 p-5 ">
      <img src={image} className={` mb-4  ${addClassName}`} />
      <h1 className="font-sans font-semibold sm:text-2xl text-xl text-ebonyClay-900 mb-2">
        {project}
      </h1>
      <p className="font-sans sm:text-lg text-base text-ebonyClay-600 ">
        {description}
      </p>
    </div>
  )
}
