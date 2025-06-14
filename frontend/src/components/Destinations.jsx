import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import axiosInstance from "../../utils/axiosInstance";
import Spinner from "./Loading";

const Destinations = () => {
  const [page, setPage] = useState(0);
  const limit = 6;

  const { data, isError, isLoading, error, isPlaceholderData } = useQuery({
    queryKey: ["destinations", page],
    queryFn: async () => {
      const response = await axiosInstance.get(`/api/destination?page=${page}&limit=${limit}`);
      return response.data;
    },
    keepPreviousData: true,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p className="text-red-500">Error: {error.message}</p>;

  const totalPages = Math.ceil(data.total / limit); 

  return (
    <div className="w-full px-4 py-8 relative">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-400">Explore Most Popular Destinations</h1>
        <p className="text-gray-500 mt-2">
          Plan your trip with the most loved and best-selling <br /> tour packages
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-9">
        {data?.data?.map((destination) => (
          <div
            key={destination.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform hover:scale-105"
          >
            <img
              src={destination.image}
              alt={destination.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{destination.name}</h2>
              <p className="text-sm text-gray-500">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-end mt-6 gap-3">
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 0))}
          disabled={page === 0}
          className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-50"
        >
          <GoArrowLeft />
        </button>

        

        <button
          onClick={() => {
            if (page < totalPages - 1) setPage((old) => old + 1);
          }}
          disabled={page >= totalPages - 1}
          className="p-2 border rounded-full hover:bg-gray-100 disabled:opacity-50"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Destinations;
