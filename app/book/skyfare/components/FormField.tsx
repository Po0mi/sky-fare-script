"use client";
import * as React from "react";
import { FormFieldProps } from "../types";

export const FormField = ({
  label,
  placeholder,
  type = "text",
  id,
}: FormFieldProps) => {
  return (
    <div className="flex overflow-hidden flex-col flex-1 shrink justify-center w-full basis-0 min-w-[240px] max-md:max-w-full">
      <label htmlFor={id} className="font-medium text-black max-md:max-w-full">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="flex-1 shrink gap-1 self-stretch px-3 py-2 mt-1 w-full bg-white rounded-md border border-solid border-black border-opacity-10 text-black text-opacity-50 max-md:max-w-full"
      />
    </div>
  );
};
