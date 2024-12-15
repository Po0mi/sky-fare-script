"use client";
export default function Footer() {
  return (
    <footer className="flex overflow-hidden z-0 gap-10 justify-center items-center px-10 w-full text-xl leading-7 text-center text-black max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-center self-stretch my-auto min-h-[100px] min-w-[240px] max-md:max-w-full">
        <div className="w-[322px]">© 2024 Sky Fare. All rights reserved.</div>
        <a href="/terms" className="w-[100px]">
          Terms of Service
        </a>
        <a href="/privacy" className="w-[100px]">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
