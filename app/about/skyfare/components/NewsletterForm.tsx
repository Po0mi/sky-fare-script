import * as React from "react";

export function NewsletterForm() {
  const interests = ["Business Travel", "Vacation", "Adventure"];

  return (
    <form className="flex flex-col justify-center mt-16 w-full text-sm max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-10 items-start w-full leading-none text-black text-opacity-50 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
          <label
            htmlFor="email"
            className="font-medium text-black max-md:max-w-full"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1 w-full bg-white rounded-md border border-solid border-black border-opacity-10 max-md:max-w-full"
            placeholder="Enter your email"
            required
          />
          <div className="mt-1 text-xs leading-none max-md:max-w-full">
            We respect your privacy
          </div>
        </div>
      </div>
      <div className="flex gap-10 items-start mt-10 w-full leading-none text-black max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink w-full basis-0 min-w-[240px] max-md:max-w-full">
          <label className="font-medium max-md:max-w-full">Interests</label>
          <div className="flex flex-wrap gap-2 items-start mt-1 w-full max-md:max-w-full">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="p-2 rounded-md bg-black bg-opacity-10"
                tabIndex={0}
                role="button"
              >
                {interest}
              </div>
            ))}
          </div>
          <div className="mt-1 text-xs leading-none text-black text-opacity-50 max-md:max-w-full">
            Select all that apply
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="flex overflow-hidden flex-col mt-10 w-60 max-w-full text-base font-medium text-white whitespace-nowrap"
      >
        <div className="p-3 w-full bg-black rounded-lg">Subscribe</div>
      </button>
    </form>
  );
}
