import React from 'react';

const GardenerCard = ({ gardenere }) => {
  const { name, age, Gender, experiences, photo, status, totalSharedTips } = gardenere;

  const statusStyles =
    status === "Active"
      ? "bg-green-100 text-green-700 border-green-300"
      : "bg-red-100 text-red-700 border-red-300";

  return (
    <div className="w-11/12 bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">

      <div className="h-48 w-full overflow-hidden">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-green-800">{name}</h2>
        <p className="text-sm text-gray-600">🌱 {experiences} of gardening</p>

        <div className="mt-2 text-gray-700 space-y-1 text-sm">
          <p>👤 <span className="font-medium">{Gender}</span>, Age: {age}</p>
          <p>🌿 Shared Tips: <span className="font-medium">{totalSharedTips}</span></p>
        </div>

        <div className={`mt-3 px-3 py-1 text-xs font-semibold rounded-full inline-block border ${statusStyles}`}>
          {status === "Active" ? "Active Gardener" : "Inactive"}
        </div>
      </div>
    </div>
  );
};

export default GardenerCard;
