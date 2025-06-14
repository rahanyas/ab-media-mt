import { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const testimonialsData = [
  {
    id: 1,
    name: "Ayesha Singh",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    comment: "Amazing experience! Everything was well organized and hassle-free.",
    location: "Delhi, India"
  },
  {
    id: 2,
    name: "Rohan Mehra",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    comment: "One of the best trips I’ve ever had. Highly recommend this service.",
    location: "Mumbai, India"
  },
  {
    id: 3,
    name: "Priya Desai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    comment: "Travel was smooth and the support was excellent throughout!",
    location: "Ahmedabad, India"
  },
  {
    id: 4,
    name: "Aman Verma",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    comment: "Loved every part of the tour. Great guides and value for money!",
    location: "Kolkata, India"
  },
  {
    id: 5,
    name: "Nisha Rai",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    comment: "Superb coordination and memorable journey!",
    location: "Chennai, India"
  },
  {
    id: 6,
    name: "Vikram Joshi",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    comment: "Would definitely book again. Totally worth it.",
    location: "Hyderabad, India"
  }
];

const Testimonials = () => {
  const [page, setPage] = useState(0);
  const pageSize = 3;

  const paginated = testimonialsData.slice(page * pageSize, (page + 1) * pageSize);

  return (
    <div className="w-full px-6 py-14 bg-gray-100 relative ">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Testimonials</h1>

      <div className="grid gap-6 md:grid-cols-3">
        {paginated.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-md rounded-xl p-5 relative"
          >
            <div className="absolute -top-5 -left-5">
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full border-4 border-white shadow-md"
              />
            </div>
            <div className="pl-14 pt-2">
              <h2 className="text-lg font-semibold text-gray-800">{t.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{t.location}</p>
              <p className="text-gray-600 text-sm">"{t.comment}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center space-x-4 absolute right-7 bottom-2">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          disabled={(page + 1) * pageSize >= testimonialsData.length}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          <GoArrowRight />          
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
