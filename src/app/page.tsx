'use client'
import AdmaxUnderSwitch from "@/ad/admax/underSwitch";
import BasicPagination from "@/modules/basicPagination";
import CopipeCard from "@/modules/copipeCard";
import SearchForm from "@/modules/searchForm";

export default function Home() {
  return (
    <>
      <SearchForm />
      <CopipeCard />
      <AdmaxUnderSwitch />
      <BasicPagination />
    </>
  )
}