export default function ClientOverview({ number, text }) {
  return (
    <>
      <h3 className="sm:text-3xl text-xl font-semibold text-ebonyClay-900">
        {number}
      </h3>
      <p className="sm:text-base text-sm text-ebonyClay-600">{text}</p>
    </>
  )
}
