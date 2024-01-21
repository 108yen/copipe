'use client'

import { Pagination } from "@yamada-ui/react";
import { useRouter } from "next/navigation";

export default function CopipePagination(props: {
    url: string;
    total: number;
    page: number;
}) {
    const { url, total, page } = props;
    const route = useRouter()

    function handleChange(value: number) {
        route.push(`${url}&page=${value}`)
    }

    return <Pagination
        variant='ghost'
        total={total}
        page={page}
        onChange={handleChange}
        color='secondary'
    />
}