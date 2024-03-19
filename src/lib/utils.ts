import {ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// helper fn to create conditional classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}