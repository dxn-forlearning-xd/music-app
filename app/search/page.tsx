"use client";
import SearchBar from "@/components/explore/SearchBar";
import SearchResults from "@/components/explore/SearchResults";
import BackButton from "@/components/ui/BackButton";
import React from "react";

const page = () => {
  return (
    <div className="p-6">
      <BackButton />
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default page;
