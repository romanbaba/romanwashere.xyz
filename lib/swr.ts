"use client";
import useSWR from "swr";

/**
 * @param {string} url
 */
export default function SWR(url: string) {
  return useSWR(url, async (arg) => {
    const response = await fetch(arg);
    const data = await response.json();

    return data;
  });
}