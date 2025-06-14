import { FcClock } from 'react-icons/fc';
import { GiTakeMyMoney } from 'react-icons/gi';
import { TbCloudNetwork } from 'react-icons/tb';
import { IoBookOutline } from 'react-icons/io5';

const advantages = [
  {
    icon: <FcClock size={40} />,
    title: 'Save Time',
    descr: 'No more switching for packages or plans'
  },
  {
    icon: <GiTakeMyMoney size={40} />,
    title: 'Save Money',
    descr: 'Compare, negotiate, and choose the best'
  },
  {
    icon: <TbCloudNetwork size={40} />,
    title: 'Trusted Network',
    descr: 'A trusted network of 7000+ travel agents'
  },
  {
    icon: <IoBookOutline size={40} />,
    title: 'Multiple Options',
    descr: 'Itineraries & travel tips from trusted agents'
  }
];

const AdvantagePage = () => {
  return (
    <div className="bg-blue-400 w-full p-6 text-white">
      <h1 className="text-center text-3xl font-bold mb-2">Our Advantages</h1>
      <p className="text-center text-lg mb-8">
        You can rely on our experience and the quality of services we provide.<br />
        Here are more reasons to book tours with Treat Holidays.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {advantages.map((elem, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
            <div className="w-[100px] h-[100px] flex items-center justify-center bg-white text-blue-600 rounded-full shadow-lg mb-4">
              {elem.icon}
            </div>
            <h2 className="text-xl font-semibold capitalize">{elem.title}</h2>
            <p className="text-sm text-white">{elem.descr}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvantagePage;
