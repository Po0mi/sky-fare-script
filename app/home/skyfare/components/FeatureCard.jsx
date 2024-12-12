"use client";
export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="flex flex-col flex-1 shrink justify-center py-3 basis-0">
      <div className="self-center px-5 text-6xl leading-relaxed text-black whitespace-nowrap bg-black bg-opacity-10 h-[100px] rounded-[50px] w-[100px] max-md:text-4xl">
        {icon}
      </div>
      <div className="text-xl leading-snug text-black">{title}</div>
      <div className="mt-2 text-base text-black text-opacity-50">
        {description}
      </div>
      <div className="flex flex-col items-start mt-5 w-full" />
    </div>
  );
}
