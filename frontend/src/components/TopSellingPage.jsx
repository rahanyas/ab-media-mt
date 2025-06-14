import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "./Loading";

const TopSellingPage = () => {
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["topSelling"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:9000/api/packages/top-selling");
      return res.data;
    }
  });

  if (isLoading) return <Spinner />;
  if (isError) return <p className="text-red-500 text-center">{error.message}</p>;

  return (
    <div className="w-full px-4 py-8 text-blue-500">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold  capitalize">
          Top Selling Tour Packages of India
        </h1>
        <p className="text-gray-600 mt-2">
          Stay tuned with our latest news and happenings through Inform
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 justify-items-center p-9">
        {data?.map((elem, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden w-full max-w-[280px] hover:shadow-lg transition duration-300"
          >
            <img
              src={elem.image}
              alt={elem.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold  mb-2">{elem.name}</h2>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition mt-3">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingPage;
