import React from "react";
import Image from "next/image";
import Title from "./Title";
import MikeAvatar from "../assets/images/review-pics/ngoni.jpeg";
import TinashAvatar from "../assets/images/review-pics/tinashe.jpg";

export default function Reviews() {
  return (
    <div>
      <section class="reviews text-neutral-700 dark:text-neutral-300">
        <div class="mx-auto text-center md:max-w-xl lg:max-w-3xl text-black">
          <Title title="Testimonials" />
          <p class="mb-6 pb-2 md:mb-12 md:pb-0">
            Here is what some of our guests had to say about our services.
          </p>
        </div>

        {/* First Testimonial */}
        <div class="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div class="block rounded-lg bg-custom text-white">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image
                  src={TinashAvatar}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">TNAESH</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  It's a warm place to be, feels like home and the accommodation
                  and services are too good. Very hospitable staff. I'd
                  recommend this place to anyone. The best in Beitbridge by far.
                </p>
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div>
            <div class="block rounded-lg bg-custom text-white">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image
                  src="/summit.png"
                  alt="Summit Logo"
                  width={330}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">KNOWLEDGE</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  I would recommend it 100% to anyone who needs accomodation in
                  Beitbridge for a decent price. No complaints whatsoever.
                </p>
              </div>
            </div>
          </div>

          {/* Third Testimonial */}
          <div>
            <div class="block rounded-lg bg-custom text-white">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image
                  src={MikeAvatar}
                  alt="Summit Logo"
                  width={"fill"}
                  height={"fill"}
                  className="object-contain"
                />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">NGONI</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  High speed internet, could keep up with my online classes. The
                  food was great, comfortable clean rooms and very friendly
                  staff. I higly recommend.
                </p>
              </div>
            </div>
          </div>

          {/* Fouth Testimonial */}
          <div>
            <div class="block rounded-lg bg-custom text-white">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image
                  src="/summit.png"
                  alt="Summit Logo"
                  width={330}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">NICHOLAS</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Excellent place to stay. Great service. The host are very
                  friendly, kind and welcoming. The rooms were clean and fresh
                  linen on the bed.
                </p>
              </div>
            </div>
          </div>

          {/* Fifth Testimonial */}
          <div>
            <div class="block rounded-lg bg-custom text-white">
              <div class="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div class="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <Image
                  src="/summit.png"
                  alt="Summit Logo"
                  width={330}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div class="p-6">
                <h4 class="mb-4 text-2xl font-semibold">LAZARUS.S</h4>
                <hr />
                <p class="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  I really enjoyed their services, keep the standard. The
                  challenge is the rocky or stoney road to the located place,
                  its not tared. The rocky road is not long Less 200mtrs. Once
                  you arrive at the place and inside haaaa wow excellent
                  services, thumbs up team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
