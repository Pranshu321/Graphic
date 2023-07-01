import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firbase";

const ExhibitionCard = ({
  likes,
  title,
  description,
  image,
  Date,
  Time,
  id,
}) => {
  const updateDocs = async (idd) => {
    const washingtonRef = doc(db, "Exhibition_Files", `${idd}`);

    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      likes: likes + 1,
    });

    window.location.reload();
  };

  return (
    <div className="">
      <div className="w-96 rounded-sm overflow-hidden shadow-lg m-16">
        <div
          className="h-64 bg-center bg-cover hover:bg-gray"
          style={{
            backgroundImage: `url(${image})`,
          }}
        />
        <div className="mx-6 my-4 border-b border-gray-light">
          <div className="font-medium text-xl text-gray-darker mb-4">
            {title}
          </div>
          <p className="font-normal text-gray-700 text-sm mb-2">
            {Date} {Time}
          </p>
          <p className="font-normal text-gray-dark text-base mb-4">
            {description}
          </p>
        </div>
        <div className="mx-6 my-4 flex">
          <div className="flex flex-grow text-right">
            <div className="flex items-center justify-center gap-x-3 text-lg">
              <svg
                className="mx-2 cursor-pointer"
                onClick={() => updateDocs(id)}
                fill="pink"
                width={28}
                height={28}
                viewBox="0 0 24 24"
              >
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
              </svg>
              <span className="text-teal-500 font-semibold">{likes}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionCard;
