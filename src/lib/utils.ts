import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function waitTime(miliseconds: number) {
  return new Promise((resolve) => setTimeout(resolve, miliseconds));
}
