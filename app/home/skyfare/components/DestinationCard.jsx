export default function DestinationCard({ name, country, price, image, link }) {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink rounded-md basis-0 min-w-[240px]">
      <div className="flex overflow-hidden items-start w-full text-xs leading-none whitespace-nowrap">
        <a
          href={link}
          className="flex flex-col flex-1 shrink pr-16 pb-40 w-full cursor-pointer pointer-events-auto basis-0 min-w-[240px] max-md:pb-24"
        >
          <div className="self-start px-2 py-1 font-medium text-white rounded-md bg-black bg-opacity-10">
            Explore
          </div>
          <div className="self-center mt-36 text-center text-black max-md:mt-10">
            {name}
          </div>
        </a>
      </div>
      <div className="flex flex-col p-3 w-full text-base text-black">
        <div>
          {name}, {country}
        </div>
        <div className="mt-1 text-xl font-medium leading-snug">
          From ${price}
        </div>
        <div className="flex gap-2 items-center mt-1 w-full text-center whitespace-nowrap">
          <div className="self-stretch my-auto w-6">✈️</div>
          <div className="self-stretch my-auto w-6">🌍</div>
          <div className="self-stretch my-auto w-6">🏖️</div>
        </div>
      </div>
    </div>
  );
}
