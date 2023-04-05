import React from "react"

export default function SectionTitle({ title, description }) {
  return (
    <div className="px-2 sm:p-2 md:px-2">
      <h1 className="sm:text-lg text-base font-sans text-ebonyClay-600">
        {title}
      </h1>
      <p className="sm:text-4xl text-3xl font-sans text-ebonyClay-900 font-semibold">
        {description}
      </p>
    </div>
  )
}
