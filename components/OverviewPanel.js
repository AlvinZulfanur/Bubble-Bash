import Image from "next/image"
import Thumbnail from "public/thumbnail.png"
import ClientOverview from "./ClientOverview"
export default function OverviewPanel() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="sm:-mt-10 -mt-40">
          <Image src={Thumbnail} className="sm:w-full sm:p-2 p-2" />
          <div>
            <div className="flex">
              <div className="w-3/12 sm:p-5 p-2 text-center">
                <ClientOverview number="1.2K+" text="Happy Clients" />
              </div>
              <div className="w-3/12 sm:p-5 p-2 text-center">
                <ClientOverview number="1.1K+" text="WorldWide Clients" />
              </div>
              <div className="w-3/12 sm:p-5 p-2 text-center">
                <ClientOverview number="6+" text="Years of Experience" />
              </div>
              <div className="w-3/12 sm:p-5 p-2 text-center">
                <ClientOverview number="12+" text="Award Winners" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
