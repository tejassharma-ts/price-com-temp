import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export function getPriceLevel(price) {
  if (price < 5) return "low";
  if (price < 6) return "medium";
  return "high";
}
