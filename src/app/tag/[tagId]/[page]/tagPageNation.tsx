'use client'

import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { useRouter } from "next/navigation";

export default function TagPageNation(props: {
    tagId: number,
    count: number | null,
    page: number
}) {
    const { tagId, count, page } = props;

    const route = useRouter()
    function handleChange(event: React.ChangeEvent<unknown>, value: number) {
        route.push(`/tag/${tagId}/${value}`)
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center"
        }}>
            <Pagination count={count ? Math.ceil(count / 100) : 0} page={page} onChange={handleChange} />
        </Box>
    )
}