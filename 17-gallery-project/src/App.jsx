import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=8`
    );
    setUserData(response.data);
    console.log(userData);
  };

  useEffect(
    function () {
      getData();
    },
    [index]
  );

  let printUserData = <h3 className= " text-gray-300 text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  Loading...
</h3>;
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return (
        <div key={idx}>
          <a href={elem.url} target="_blank" >
            <div className="h-80 w-80 bg-white rounded-xl overflow-auto">
              <img
                className="h-full w-full object-cover"
                src={elem.download_url}
                alt=""
              />
            </div>
            <h2>{elem.author}</h2>
          </a>
        </div>
      );
    });
  }

  return (
    <div className="bg-black h-screen text-white p-5 overflow-auto">
      <div className="flex flex-wrap gap-4 h-[82%] w-full">{printUserData}</div>
      <div className="flex justify-center gap-6 items-center p-4">
        <button
          style={{ opacity: index == 1 ? 0.5 : 1 }}
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([])
            }
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 cursor-pointer active:scale-95"
        >
          prev
        </button>
        <button
          onClick={() => {
            setIndex(index + 1);
            setUserData([])
          }}
          className="bg-amber-400 text-black rounded px-4 py-2 cursor-pointer active:scale-95"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default App;
