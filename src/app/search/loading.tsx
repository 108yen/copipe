import AdmaxUnderSwitch from "@/ad/admax/underSwitch"
import CopipeCard from "@/modules/mui/copipeCard"
import { CopipeCardItemSkelton } from "@/modules/mui/copipeCardItemSkeleton"
import SearchForm from "@/modules/mui/searchForm"

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