'use client'

import React from "react";
import { IconType } from "react-icons";
import { useRouter } from "next/navigation";
import {
  FiBarChart,
  FiCalendar,
  FiHome,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import Link from "next/link";
let selected =true
export const RouteSelect = () => {
  return (
    <div className="space-y-1">
      
      <Link href="/"><Route  Icon={FiHome} selected= { true } title="Dashboard" /></Link>
      <Link href="/analysis" ><Route  Icon={FiBarChart} selected= {false} title="Analysis" /></Link>
      <Link href="/machine-management" ><Route Icon={FiPaperclip} selected= {false} title="Machine Mangement" /></Link>
      <Link href="/workers" ><Route Icon={FiUsers} selected= {false} title="Workers" /></Link>
      
    </div>

  );
};

const Route = ({
  selected,
  Icon,
  title,
}: {
  selected: boolean;
  Icon: IconType;
  title: string;
}) => {
  return (
    <button 
      className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-sm transition-[box-shadow,_background-color,_color] ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon className={selected ? "text-violet-500" : ""} />
      <span>{title}</span>
    </button>
  );
};
export default RouteSelect