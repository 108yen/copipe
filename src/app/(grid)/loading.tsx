import CopipeCard from "@/modules/copipeCard";
import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton";
import LoadingSearchForm from "@/modules/loadingSearchForm";

export default function loading() {
  return (
    <>
      <LoadingSearchForm />
      <CopipeCard>
        {[...Array(10)].map((value) => (
          <CopipeCardItemSkelton key={value} />
        ))}
      </CopipeCard>
    </>
  );
}
