"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

type CustomLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

export const CustomLink = ({
  href,
  label,
  onClick,
  className,
}: CustomLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative pb-1 text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-red-500 after:duration-300 after:content-[''] hover:after:w-full",
        isActive && "border-b border-red-500 text-red-500 after:w-full",
        className
      )}
    >
      {label}
    </Link>
  );
};
