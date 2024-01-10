import { pageAtom, pageNumAtom } from "@/components/Atoms";
import Box from "@mui/material/Box";
import Pagination from "@mui/material/Pagination";
import { useAtom } from "jotai";
import { loadable } from "jotai/utils";

const BasicPagination = () => {
    const [page, setPage] = useAtom(pageAtom);
    const loadableAtom = loadable(pageNumAtom);
    const [value] = useAtom(loadableAtom);

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (value.state === 'hasData') {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: "center"
            }}>
                <Pagination count={value.data} page={page} onChange={handleChange} />
            </Box>
        );
    }
    return <></>;
}

export default BasicPagination;