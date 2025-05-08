import { useState } from "react";
import axios from "axios";

function App() {
  const [excuseData, setExcuseData] = useState({
    category: "",
    excuse: "Click to get favourite excuses....",
  });

  const FetchData = async (reason) => {
    const { data } = await axios.get(
      `https://excuser-three.vercel.app/v1/excuse/${reason}/`
    );
    /* setExcuse(data[0].excuse); */
    setExcuseData({
      category: reason,
      excuse: data[0].excuse,
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 p-4">
      <div className="bg-yellow-200 rounded-md p-8 max-w-md w-full text-center shadow-md">
        <h1 className="text-3xl font-bold text-yellow-700 mb-10 font-mono underline mt-5">
          excuser-app
        </h1>
        <button
          onClick={() => FetchData("developers")}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-md shadow-md mb-4 cursor-pointer"
        >
          Get a developer-based excuses
        </button>
        <button
          onClick={() => FetchData("office")}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-md shadow-md mb-4 cursor-pointer"
        >
          Get a office-based excuses
        </button>
        <button
          onClick={() => FetchData("party")}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-3 px-2 rounded-md shadow-md mb-4 cursor-pointer"
        >
          Get a party-based excuses
        </button>
        <div className="text-yellow-700 font-serif mt-4 text-center">
          {excuseData.category && (
            <p className="font-bold capitalize mb-2 underline text-yellow-900">
              Category - {excuseData.category}
            </p>
          )}
          <p>{excuseData.excuse}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
