"use client"; 

import { useRouter } from "next/navigation";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa"; 

const BottomBar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 inset-x-0 bg-gray-800 text-white flex justify-around items-center py-2 border-t border-gray-700">
      <button
        onClick={() => router.push("/")}
        className="flex flex-col items-center"
      >
        <FaHome className="text-xl" />
        <span className="text-sm">Home</span>
      </button>
      <button
        onClick={() => router.push("/character-by-location")}
        className="flex flex-col items-center"
      >
        <FaMapMarkerAlt className="text-xl" />
        <span className="text-sm">Location</span>
      </button>
    </div>
  );
};

export default BottomBar;
