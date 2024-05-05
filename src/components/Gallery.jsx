import React from "react";
import pic1 from "../assets/pic-1.jpg";
import pic2 from "../assets/pic-2.jpg";
import pic3 from "../assets/pic-3.jpg";
import pic4 from "../assets/pic-5.jpg";
import pic5 from "../assets/pic-6.jpg";
import pic6 from "../assets/pic-7.jpg";
import pic7 from "../assets/pic-8.jpg";
import pic8 from "../assets/bedroom-1.jpg";
import pic9 from "../assets/out.jpg";
import pic10 from "../assets/service.jpg";
import pic11 from "../assets/flower.jpg";
const Gallery = () => {
  return (
    <div className="bg-custom-orange min-h-screen">
      <div className="container mx-auto p-4">
        <span className="mb-1 block text-lg text-center font-semibold text-primary">
          Explore Our Gallery
        </span>
        <span className="block mb-4 text-4xl font-bold text-primary text-center transform">
          Journey Through Our Collection
        </span>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img
            className="h-auto max-w-full rounded-lg"
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Kashi_Vishwanath_Temple_Banaras.jpg" //blank
              alt=""
            />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic1} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic2} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic3} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic4} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic5} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic6} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic7} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic8} alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic9} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic10} alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src={pic11} alt="" />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Gallery;
