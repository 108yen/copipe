'use client'
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

export default function SearchPagination(props: {
    searchText: string,
    count: number,
    page: number,
}) {
    const { searchText, count, page } = props
    const router = useRouter()

    function handleChange(event: React.ChangeEvent<unknown>, value: number) {
        if (searchText == '') router.push(`/search?page=${value}`)
        else router.push(`/search?text=${searchText}&page=${value}`)
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center"
        }}>
            <Pagination count={count} page={page} onChange={handleChange} />
        </Box>
    );
}