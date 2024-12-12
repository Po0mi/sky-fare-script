"use client";
export default function Hero() {
  return (
    <div className="flex overflow-hidden relative z-0 gap-10 justify-center items-center px-44 py-8 w-full bg-white bg-opacity-60 min-h-[160px] max-md:px-5 max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/5158bcadb485fe4069447f3d4e6593e9e9aa2d3e2b50e1d89760fe0bd59309e0?apiKey=575482322951499baba16b3a7f82119f&"
        alt="Sky Fare Maris logo"
        className="object-contain z-0 shrink-0 self-stretch my-auto aspect-square rounded-[50px] w-[100px]"
      />
      <div className="flex z-0 flex-col flex-1 shrink self-stretch my-auto text-black basis-0 min-w-[240px] max-md:max-w-full">
        <h1 className="text-2xl font-bold leading-none max-md:max-w-full">
          Explore Sky Fare Maris
        </h1>
        <p className="mt-3 text-base max-md:max-w-full">
          Book your dream destination now!
        </p>
      </div>
      <div className="flex overflow-hidden z-0 flex-col self-stretch my-auto w-40 text-base font-medium text-white whitespace-nowrap">
        <button className="p-3 w-40 max-w-full bg-black rounded-lg">
          Discover
        </button>
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/575482322951499baba16b3a7f82119f/52953870a63d336cf98fca44ba82f5fda33d2b24dfa525c22d2c1e39cc4b0235?apiKey=575482322951499baba16b3a7f82119f&"
        alt=""
        className="object-contain absolute inset-x-0 bottom-0 z-0 self-start h-0 aspect-[1000] w-[1440px] max-md:max-w-full"
      />
    </div>
  );
}
