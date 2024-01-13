import AdmaxUnderSwitch from "@/ad/admax/underSwitch";
import BasicPagination from "@/modules/basicPagination";
import CopipeCardLoader from "@/modules/copipeCardLoader";
import SearchForm from "@/modules/searchForm";

export default function Home() {
  return (
    <>
      <SearchForm />
      <CopipeCardLoader />
      <AdmaxUnderSwitch />
      <BasicPagination />
    </>
  )
}