import { useState } from 'react';
import room_1 from '../assets/bedroom-1.jpg';
import room_2 from "../assets/bedroom2.jpg";
import room_3 from "../assets/pic-2.jpg"
import room_4 from "../assets/pic-3.jpg"
import video from "../assets/video-1.mp4"

function MainContent() {
  const [showContent, setShowContent] = useState(false);

  const cards = [
    {
      imageUrl: room_1,
      isNew: true,
      title: 'Vacation House',
      description: '2 bed - 2 bath - 2,156 sq ft',
      address: '123 jakesone st, 77865',
      price: '$299/month',
      videoLink: video,
    },
    {
      imageUrl: room_2,
      isNew: false,
      title: 'Luxury Villa',
      description: '3 bed - 3 bath - 3,000 sq ft',
      address: '456 main st, 90123',
      price: '$499/month',
      videoLink: video,
    },
    {
      imageUrl: room_3,
      isNew: false,
      title: 'Dining Area',
      description: 'Spacious dining area with modern decor.',
      address: '789 elm st, 34567',
      price: '$199/month',
      videoLink: video,
    },
    {
      imageUrl: room_4,
      isNew: false,
      title: 'Business Suite',
      description: 'Executive suite designed for business travelers.',
      address: '901 oak st, 67890',
      price: '$599/month',
      videoLink: video,
    },
  ];

  return (
    <div className="p-4 bg-gradient-to-t bg-[#F7F6BB]">
    <span className="mb-1 block text-lg  text-center font-semibold text-primary">
    Our Rooms
  </span>
  <span className="block mb-4 text-4xl font-bold text-primary text-center transform ">
                 What We Offer
              </span>
  <p className="text-base text-body-color text-center dark:text-dark-6">
    There are many variations of passages of Lorem Ipsum available
    but the majority have suffered alteration in some form.
  </p>
      <main className="flex flex-wrap justify-center items-start gap-4">
        {cards.map((card, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
            <div className="bg-[#87A922]  text-white rounded-md shadow-lg overflow-hidden transition duration-300 transform hover:scale-105">
              <div
                className="h-40 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              >
                <div className="absolute top-2 right-2 flex gap-2">
                  
        ]

                </div>
              </div>
              <div className="p-4">
                <div className="flex gap-2">
                  {card.isNew && (
                    <p className="w-fit rounded-full bg-green-100 px-2 text-[10px] font-medium text-green-600">NEW 24 HRS AGO</p>
                  )}
                  <a href={card.videoLink} className="w-fit rounded-full bg-indigo-100 px-2 text-[10px] font-medium text-indigo-600 hover:text-indigo-800">VIDEO TOUR</a>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">{card.title}</p>
                  <p className="text-sm text-white">{card.description}</p>
                  <p className="text-sm text-white">{card.address}</p>
                </div>
              </div>
              <div className="border-t border-gray-200 bg-gray-50 p-3 flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-900">{card.price}</p>
                <a
                  href="#"
                  className="bg-[#2C7865] text-white hover:bg-[#FFF8DC] hover:border-2 hover:border-black  hover:text-black font-bold py-3 px-4 rounded-xl transition duration-300 ease-in-out"
                >
                  Book Now
                </a>
              
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default MainContent;
