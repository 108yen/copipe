'use client'
import BasicPagination from "@/modules/basicPagination";
import CopipeCard from "@/modules/copipeCard";
import SearchForm from "@/modules/searchForm";

export default function Home() {
  return (
    <>
      <SearchForm />
      <CopipeCard />
      <BasicPagination />
    </>
  )
}