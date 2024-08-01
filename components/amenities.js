import React from "react";
import Amenities1 from "../assets/images/amenities/amenities1.jpeg";
import Amenities2 from "../assets/images/amenities/amenities-front.jpeg";
import Amenities3 from "../assets/images/amenities/amenities-dining.jpeg";
import Amenities4 from "../assets/images/amenities/amenities-parking.jpeg";
import Amenities5 from "../assets/images/amenities/amenities-sofa.jpeg";
import Amenities6 from "../assets/images/amenities/amenities-garden2.jpeg";
import Image from "next/image";
import Title from "./Title";

export default function Amenities() {
  return (
    <div className="bg-[#cfcfcf] min-hide">
      <div className="container my-24 mx-auto md:px-6 mb-custom">
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
          <Title title="Amenities" />
          <div className="-m-1 flex flex-wrap md:-m-2 mb-custom">
            <div className="flex w-1/2 flex-wrap">
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  src={Amenities1}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  src={Amenities2}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
              <div className="w-full p-1 md:p-2">
                <Image
                  src={Amenities3}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex w-1/2 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <Image
                  src={Amenities4}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  src={Amenities5}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
              <div className="w-1/2 p-1 md:p-2">
                <Image
                  src={Amenities6}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
