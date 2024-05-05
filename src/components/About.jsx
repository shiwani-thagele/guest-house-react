
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import about_1 from "../assets/about-img-1.jpg"
import about_2 from "../assets/about-img-2.jpg"
import about_3 from '../assets/about-img-big-2.jpg'
const AboutUs = () => {
  return (
    <>
      <section className="overflow-hidden pt-20 pb-12 lg:pt-[50px] lg:pb-[50px] bg-[#F7F6BB] dark:bg-dark">
      <span className="block mb-4 text-4xl font-bold text-primary text-center transform hover:scale-105 transition duration-300">
  About Us
</span>



        <div className="container mx-auto">
          <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="flex items-center -mx-3 sm:-mx-4">
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="py-3 sm:py-4">
                    <img
                      src={about_1} //270*320px
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                  <div className="py-3 sm:py-4">
                    <img
                      src={about_2} //270*320px
                      alt=""
                      className="w-full rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:px-4 xl:w-1/2">
                  <div className="relative z-10 my-4">
                    <img
                      src={about_3} // 270*400px
                      alt=""
                      className="w-full rounded-2xl"
                    />
                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                      <svg
                        width={134}
                        height={106}
                        viewBox="0 0 134 106"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {/* Circles for decorative purpose */}
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="mt-10 lg:mt-0">
                <span className="block mb-4 text-lg font-semibold text-primary">
                  Why Choose Us
                </span>
                <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                  Make your customers happy by giving services.
                </h2>
                <p className="mb-5 text-base text-body-color dark:text-dark-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
                </p>
                <p className="mb-8 text-base text-body-color dark:text-dark-6">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
                </p>
                <a
            href="#"
            className="bg-[#87A922] hover:bg-[#FFF8DC] hover:border-2 hover:border-black  hover:text-black  font-bold rounded-xl py-2 px-2 transition duration-300 ease-in-out block text-center"
          >
            Get Started
          </a>
              </div>
            </div>
          </div>
        </div>
        {/* Social Icons */}
      <div className="flex justify-center space-x-10 items-center h-12  dark:bg-dark-3">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaFacebookF className="text-xl text-primary hover:text-primary-dark" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaTwitter className="text-xl text-primary hover:text-primary-dark" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaInstagram className="text-xl text-primary hover:text-primary-dark" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="mx-2">
        <FaLinkedinIn className="text-xl text-primary hover:text-primary-dark" />
      </a>
    </div>
      </section>

      
    </>
  );
};

export default AboutUs;


