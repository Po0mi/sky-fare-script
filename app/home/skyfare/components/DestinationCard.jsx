"use client";

export default function DestinationCard({ name, country, price, image, link }) {
  return (
    <div className="
      flex flex-col flex-1 shrink rounded-md basis-0 min-w-[350px] border shadow-md transition-all duration-300 
      transform hover:scale-105 hover:shadow-lg hover:shadow-gray-500 overflow-hidden
      h-[320px]
    ">
      {/* Image Section */}
      <div className="w-full h-48 overflow-hidden rounded-t-md">
        <img
          src={image}
          alt={`${name} - ${country}`}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Details Section */}
      <div className="flex flex-col p-4 w-full text-base text-black">
        <div className="font-semibold text-lg">
          {name}, {country}
        </div>
        <div className="mt-2 text-xl font-medium leading-snug text-gray-800">
          From ${price}
        </div>
        <div className="flex gap-2 items-center mt-3 w-full text-center whitespace-nowrap">
          <div className="self-stretch my-auto w-6">✈️</div>
          <div className="self-stretch my-auto w-6">🌍</div>
          <div className="self-stretch my-auto w-6">🏖️</div>
        </div>
      </div>
    </div>
  );
}
