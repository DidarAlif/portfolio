"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

interface ContributionGraphProps {
  data: number[][];
  totalContributions: number;
}

const LEVELS = [
  "bg-bg-tertiary",               // 0
  "bg-accent-green/20",           // 1
  "bg-accent-green/40",           // 2
  "bg-accent-green/70",           // 3
  "bg-accent-green",              // 4
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function ContributionGraph({ data, totalContributions }: ContributionGraphProps) {
  const [hoveredCell, setHoveredCell] = useState<{ week: number; day: number } | null>(null);

  // Calculate month labels positions
  const monthLabels = useMemo(() => {
    const now = new Date();
    const labels: { label: string; col: number }[] = [];
    let lastMonth = -1;

    for (let w = 0; w < 52; w++) {
      const date = new Date(now);
      date.setDate(date.getDate() - (51 - w) * 7);
      const month = date.getMonth();
      if (month !== lastMonth) {
        labels.push({ label: MONTHS[month], col: w });
        lastMonth = month;
      }
    }
    return labels;
  }, []);

  return (
    <motion.div
      className="rounded-md border border-border-default bg-bg-primary p-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      {/* Header */}
      <h3 className="mb-4 text-sm text-text-secondary">
        <strong className="text-text-primary">{totalContributions.toLocaleString()}</strong> contributions in the last year
      </h3>

      {/* Graph */}
      <div className="overflow-x-auto">
        <div className="min-w-[720px]">
          {/* Month labels */}
          <div className="mb-1 flex pl-8">
            {monthLabels.map((m, i) => (
              <span
                key={i}
                className="text-[10px] text-text-tertiary"
                style={{
                  position: "relative",
                  left: `${m.col * 14}px`,
                  marginRight: i < monthLabels.length - 1
                    ? `${((monthLabels[i + 1]?.col ?? 52) - m.col) * 14 - 24}px`
                    : 0,
                }}
              >
                {m.label}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="flex gap-0.5">
            {/* Day labels */}
            <div className="flex flex-col gap-0.5 pr-1">
              {["", "Mon", "", "Wed", "", "Fri", ""].map((day, i) => (
                <span key={i} className="flex h-[13px] items-center text-[10px] text-text-tertiary">
                  {day}
                </span>
              ))}
            </div>

            {/* Cells */}
            {data.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-0.5">
                {week.map((level, di) => (
                  <div
                    key={di}
                    className={`h-[13px] w-[13px] rounded-sm ${LEVELS[level]} transition-all duration-150 hover:ring-1 hover:ring-text-secondary`}
                    onMouseEnter={() => setHoveredCell({ week: wi, day: di })}
                    onMouseLeave={() => setHoveredCell(null)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 flex items-center justify-between text-[10px] text-text-tertiary">
        <a href="#" className="hover:text-accent-blue">Learn how we count contributions</a>
        <div className="flex items-center gap-1">
          Less
          {LEVELS.map((cls, i) => (
            <span key={i} className={`h-[11px] w-[11px] rounded-sm ${cls}`} />
          ))}
          More
        </div>
      </div>
    </motion.div>
  );
}
