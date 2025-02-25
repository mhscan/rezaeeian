"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetCompanyListPanelSide } from "@/api-service/fakeApi";

export default function page() {
  const [pageSize, setpageSize] = useState(10);

  const filter = {
    pageSize,
  };
  const { data: company } = useQuery({
    queryKey: ["company", filter],
    queryFn: () => GetCompanyListPanelSide(filter),
    initialData: [],
  });

  const { data: posts } = useQuery({
    queryKey: ["posts"],
    queryFn: () => GetCompanyListPanelSide(filter),
    initialData: [],
  });

  return (
    <div>
      <input
        type="text"
        value={pageSize}
        onChange={(e) => setpageSize(e.target.value)}
      />
      <div className="flex gap-20">
        <div>
          {posts.data?.map((item) => (
            <p key={item.id}>
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
              {item.englishShortDesc}
            </p>
          ))}
        </div>

        <div>
          {company.data?.map((item) => (
            <p key={item.id}>{item.id}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
