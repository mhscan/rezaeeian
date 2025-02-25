"use client";

import React from "react";
import Home from "@/components/pages/Home";
import Link from "next/link";
import { getTodo } from "@/api-service/fakeApi";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
export default function page() {
  const router = useRouter();

  const {
    data: todo1,
    isError,
    isPending,
    isSuccess,
    isFetching,
    isFetched,
    isLoading,
    fetchStatus,
    status,
  } = useQuery({
    queryKey: ["todo1"],
    queryFn: getTodo,
    initialData: [],
    // staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 5,
  });

  const { data: todo2 } = useQuery({
    queryKey: ["todo2"],
    queryFn: getTodo,
    initialData: [],
  });

  const { data: todo3 } = useQuery({
    queryKey: ["todo3"],
    queryFn: getTodo,
    initialData: [],
    fetchFunction: { retry: 1 },
  });

  const { data: todo4 } = useQuery({
    queryKey: ["todo4"],
    queryFn: getTodo,
    initialData: [],
  });

  const { data: todo5 } = useQuery({
    queryKey: ["todo5"],
    queryFn: getTodo,
    initialData: [],
  });

  console.log("page  data:", todo1);
  return (
    <div>
      <Home />
      <br />
      <br />

      {/* <Link className=" text-blue-600" href={"/sample/post"}>sample link </Link> */}
    </div>
  );
}
