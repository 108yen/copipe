import AdmaxUnderSwitch from "@/ad/admax/underSwitch"
import CopipeCard from "@/modules/copipeCard"
import { CopipeCardItemSkelton } from "@/modules/copipeCardItemSkeleton"
import SearchForm from "@/modules/searchForm"

export default function loading() {
    return (
        <>
            <SearchForm />
            <CopipeCard>
                {[...Array(10)].map(value => <CopipeCardItemSkelton key={value} />)}
            </CopipeCard>
            <AdmaxUnderSwitch />
        </>
    )
}