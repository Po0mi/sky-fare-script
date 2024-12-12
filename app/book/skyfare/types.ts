"use client";
export interface DestinationProps {
  emoji: string;
  name: string;
  price: string;
  discount: string;
}

export interface NavItemProps {
  label: string;
  href: string;
}

export interface FormFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  id: string;
}
