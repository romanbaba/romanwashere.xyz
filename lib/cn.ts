import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}