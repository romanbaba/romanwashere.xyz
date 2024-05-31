"use client";

import classNames from "classnames";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

export default function Link({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <NextLink
      className={classNames({
        "rounded-full px-3 py-1 transition-all duration-200": true,
        "hover:bg-[#212225]": href !== pathname,
        "bg-[#EDEEF0] text-[#111113]": href === pathname,
      })}
      href={href}
    >
      {children}
    </NextLink>
  );
}
