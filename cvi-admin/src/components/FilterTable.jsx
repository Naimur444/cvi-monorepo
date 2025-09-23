"use client";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "./ui/select";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function TableFilter({ filtersConfig, onFilter }) {
  const [filters, setFilters] = useState({});

  const handleChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onFilter(filters);
  };

  return (
    <div className="flex flex-wrap gap-4 items-center justify-end">
      {filtersConfig.map((filter) =>
        filter.type === "text" ? (
          <Input
            key={filter.key}
            placeholder={filter.placeholder || `Search by ${filter.label}`}
            value={filters[filter.key] || ""}
            onChange={(e) => handleChange(filter.key, e.target.value)}
            className={filter.className || "w-64"}
          />
        ) : filter.type === "select" ? (
          <Select
            key={filter.key}
            value={filters[filter.key] || ""}
            onValueChange={(value) => handleChange(filter.key, value)}
          >
            <SelectTrigger
              className={filter.className || "w-48 text-[#181818]"}
            >
              <SelectValue
                placeholder={filter.placeholder || `Select ${filter.label}`}
              />
            </SelectTrigger>
            <SelectContent>
              {filter.options?.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        ) : null
      )}

      <Button
        className="bg-[#0E4F53] text-white px-3 rounded-lg"
        onClick={handleApply}
      >
        Apply
      </Button>
    </div>
  );
}
