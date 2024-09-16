"use client";

import React from "react";
import { FiEye } from "react-icons/fi";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    feature: "Unit 1",
    produced: 115,
    defect: 10,
    max: 150,
  },
  {
    feature: "Unit 2",
    produced: 130,
    defect: 40,
    max: 150,
  },
  {
    feature: "Unit 3",
    produced: 86,
    defect: 70,
    max: 150,
  },
  {
    feature: "Unit 4",
    produced: 125,
    defect: 40,
    max: 150,
  },
  {
    feature: "Unit 5",
    produced: 148,
    defect: 90,
    max: 150,
  },
];

export const UsageRader = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> Yield
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="Produced"
              dataKey="produced"
              stroke="#18181b"
              fill="#18181b"
              fillOpacity={0.2}
            />
            <Radar
              name="Defect"
              dataKey="defect"
              stroke="#5b21b6"
              fill="#5b21b6"
              fillOpacity={0.2}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default UsageRader