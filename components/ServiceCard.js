export default function ServiceCard({ image, service, description }) {
  return (
    <div className="bg-white shadow-xl md:w-10/12 sm:w-11/12 md:px-5 px-3 py-6 hover:-translate-y-5 transition-all">
      <img src={image} className="mx-auto mb-4" />
      <h1 className="font-semibold sm:text-2xl text-xl mb-4 text-center">
        {service}
      </h1>
      <p className="sm:text-lg text-base mx-auto text-ebonyClay-600 text-center">
        {description}
      </p>
    </div>
  )
}
