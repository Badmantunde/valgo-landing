"use client";

import Image from "next/image";
import React from "react";

export interface AccordionItem {
  id: string;
  url: string;
  title: string;
  description: string;
  tags?: string[];
}

const items: AccordionItem[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=960&q=80",
    title: "IDOWU DAMILARE",
    description: "CEO & CO-FOUNDER",
    tags: ["Leadership", "Product Strategy", "Vision"],
  },
  {
    id: "2",
    url: "/images/team/abiola-babatunde.jpg",
    title: "ABIOLA BABATUNDE",
    description: "CTO & CO-FOUNDER",
    tags: ["Engineering", "Architecture", "Cloud Infra"],
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=960&q=80",
    title: "ISAJOBI QUADRI",
    description: "HEAD OF GROWTH AND MARKETING & CO-FOUNDER",
    tags: ["Campus Growth", "Brand", "Marketing"],
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=960&q=80",
    title: "MURITALA AMEENAT",
    description: "CAMPUS & COMMUNITY GROWTH MANAGER",
    tags: ["Community", "Ambassadors", "Student Life"],
  },
];

export interface TailwindImageAccordionProps {
  items?: AccordionItem[];
  className?: string;
}

export function TailwindImageAccordion({
  items: customItems = items,
  className = "",
}: TailwindImageAccordionProps) {
  return (
    <>
      <div
        className={`group flex max-md:flex-col justify-center gap-3 w-full max-w-6xl mx-auto mb-6 mt-3 ${className}`}
      >
        {customItems.map((item) => {
          return (
            <article
              key={item?.id ?? item?.title}
              className="group/article relative w-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl ring-1 ring-white/10 md:not-[&:hover]:group-hover:w-[15%] md:[&:not(:focus-within):not(:hover)]:group-focus-within:w-[15%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/2 before:bg-gradient-to-t before:from-black/80 before:via-black/40 before:to-transparent before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:not-[&:hover]:group-hover:after:opacity-100 md:[&:not(:focus-within):not(:hover)]:group-focus-within:after:opacity-100 after:absolute after:inset-0 after:bg-white/20 after:backdrop-blur-sm after:rounded-2xl after:transition-all focus-within:ring-3 focus-within:ring-blue-500"
            >
              <div className="absolute inset-0 text-white z-10 p-5 sm:p-6 flex flex-col justify-end pointer-events-none">
                <span className="text-xs sm:text-sm font-semibold text-blue-300 uppercase tracking-wider md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-200 group-focus-within/article:delay-200">
                  {item?.description}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white md:whitespace-nowrap md:truncate md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                  {item?.title}
                </h3>
                {item?.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-md text-white border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <Image
                className="object-cover h-80 md:h-[460px] w-full"
                src={item?.url}
                width={960}
                height={480}
                alt={item?.title || "Team member"}
              />
            </article>
          );
        })}
      </div>
    </>
  );
}

export default TailwindImageAccordion;
