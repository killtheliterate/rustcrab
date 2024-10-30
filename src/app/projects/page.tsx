"use client";

import React from "react";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import Card from "@/components/Card";
import Head from "next/head";
import { useSearch } from "@/hooks/useSearch/useSearch";

export default function Projects() {
  const { term, records, setSearchTerm } = useSearch({
    records: projects,
    searchableFields: ["name", "description"],
  });

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Head>
        <title>Rustcrab | Books to Learn Rust</title>
      </Head>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
          Rust Projects
        </h1>

        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search books..."
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

        <div className="grid md:grid-cols-2 w-full gap-5">
          {records.map((book, index) => (
            <Card item={book} key={index} />
          ))}
        </div>

        {records.length === 0 && (
          <p className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No Projects found matching your search.
          </p>
        )}
      </div>
    </div>
  );
}
