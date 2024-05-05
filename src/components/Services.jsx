import React from "react";

const Service = () => {
  return (
    <section className="pb-5 pt-4 bg-custom-orange dark:bg-dark lg:pb-[80px] lg:pt-[80px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[490px] text-center lg:mb-20">
              <span className="mb-1 block text-lg font-semibold text-primary">
                Our Services
              </span>
              <span className="block mb-4 text-4xl font-bold text-primary text-center transform hover:scale-105 transition duration-300">
  What We Offer
</span>
              <p className="text-base text-body-color dark:text-dark-6">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-2 flex flex-wrap">
          <ServiceCard
            title="Refreshing Design"
            details="We dejoy working with discerning clients, people for whom qualuty, service, integrity & aesthetics."
            icon={
              <svg
                width="30"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 3C12.134 3 7 7.13401 7 13C7 18.866 12.134 24 18 24C23.866 24 29 18.866 29 13C29 7.13401 23.866 3 18 3ZM18 22C14.134 22 11 18.866 11 15C11 11.134 14.134 8 18 8C21.866 8 25 11.134 25 15C25 18.866 21.866 22 18 22Z"
                  fill="black"
                />
                <path
                  d="M18 10C16.9069 10 16 10.9069 16 12C16 13.0931 16.9069 14 18 14C19.0931 14 20 13.0931 20 12C20 10.9069 19.0931 10 18 10Z"
                  fill="black"
                />
                <path
                  d="M18 18C16.9069 18 16 18.9069 16 20C16 21.0931 16.9069 22 18 22C19.0931 22 20 21.0931 20 20C20 18.9069 19.0931 18 18 18Z"
                  fill="black"
                />
              </svg>
            }
          />
          <ServiceCard
            title="24 Hours Room Service"
            details="Experience the ultimate convenience with our round-the-clock room service, catering to your every need."
            icon={
              <svg
                width="30"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1C8.58258 1 1 8.58258 1 18C1 27.4174 8.58258 35 18 35C27.4174 35 35 27.4174 35 18C35 8.58258 27.4174 1 18 1ZM18 33C24.2352 33 29 28.2352 29 22C29 15.7648 24.2352 11 18 11C11.7648 11 8 15.7648 8 22C8 28.2352 11.7648 33 18 33Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 11V22"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22H29"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 11H8"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Fine Dining Experience"
            details="Indulge in a culinary journey with our exquisite dishes, exceptional service, and elegant ambiance."
            icon={
              <svg
                width="30"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 1C11.5228 1 6 5.52279 6 11C6 16.4772 11.5228 22 18 22C24.4772 22 29 16.4772 29 11C29 5.52279 24.4772 1 18 1ZM18 33C24.2352 33 29 28.2352 29 22C29 15.7648 24.2352 11 18 11C11.7648 11 8 15.7648 8 22C8 28.2352 11.7648 33 18 33Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 11V22"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22H22"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 22H14"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 11V15"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 15H22"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Tourist Support"
            details="Explore new destinations with confidence with our knowledgeable and friendly tourist guides."
            icon={
              <svg
                width="30"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                />
                <path
                  d="M18 3V10M18 26V33M3 18H10M26 18H33"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 6L15 9M15 9L18 6M18 6L21 9M12 30L15 27M15 27L18 30M18 30L21 27"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          <ServiceCard
            title="Business Event Services "
            details="Elevate your brand with our professional business and event services, "
            icon={
              <svg
                width="30"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 1H11C8.79086 1 7 2.79086 7 5V31C7 33.2091 8.79086 35 11 35H25C27.2091 35 29 33.2091 29 31V15.1523C29 13.9803 28.2611 12.944 27.2304 12.5933L20.6593 10.203C19.9954 9.99735 19.1522 10.2828 18.8321 10.9012L15.8844 16.0896C15.6942 16.464 15.3112 16.7312 14.885 16.8188L10.084 17.6319C9.35828 17.7892 8.92693 18.5294 9.23585 19.1786L12.1139 24.4163C12.3283 24.9162 12.1946 25.5189 11.7741 25.7915L8.34627 27.7294C7.71386 28.1465 7.78714 28.9897 8.41433 29.1875L13.6151 30.757C14.2399 30.9522 14.7444 31.489 14.7783 32.1523L15.1494 35.6537C15.2126 36.6031 16.1999 36.9518 16.6823 36.1516L20.0683 31.4639C20.2332 31.2092 20.4811 31 20.7691 31H27C28.6569 31 30 29.6569 30 28V5C30 3.34315 28.6569 2 27 2H20V1Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 8H21"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 12H21"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 16H21"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 20H21"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />

          

          <ServiceCard
            title="Entertainment "
            details="Experience endless fun and excitement with our wide range of entertainment and activities"
            icon={
              <svg
                width="30"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 2H12C8.68629 2 6 4.68629 6 8V28C6 31.3137 8.68629 34 12 34H24C27.3137 34 30 31.3137 30 28V8C30 4.68629 27.3137 2 24 2Z"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 8V12L20 14L16 12V8"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 12H12"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 17H12"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M24 22H12"
                  fill="none"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-[#FFF8DC] p-10 shadow-2 hover:shadow-lg hover:bg-[#F7F6BB] dark:bg-dark-2 md:px-5 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-black">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
