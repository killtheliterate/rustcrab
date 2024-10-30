"use client";

import React from "react";
import { Search } from "lucide-react";
import { tools } from "@/data/tools";
import Card from "@/components/Card";
import Head from "next/head";

import { useSearch } from "@/hooks/useSearch/useSearch";

export default function DevTools() {
  const { term, records, setSearchTerm } = useSearch({
    records: tools,
    searchableFields: ["name", "description"],
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Head>
        <title>Rustcrab | Rust Developer Tools</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Developer Tools
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tools..."
              value={term}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pl-10 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-5">
          {records.map((tool, index) => (
            <Card item={tool} key={index} />
          ))}
        </div>

        {records.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No tools found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
