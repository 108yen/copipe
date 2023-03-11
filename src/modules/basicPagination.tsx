import { Copipe } from "@/components/Atoms";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
    pageNum: number;
    currentPage: number;
    setCurrentPage: (page:number) => void;
    // setCopipeList: (page:number) => void;
}

const BasicPagination: React.FC<Props> = ({
    pageNum,
    currentPage,
    setCurrentPage,
    // setCopipeList,
}) => {
    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        await setCurrentPage(value);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center"
        }}>
            <Pagination count={pageNum} page={currentPage} onChange={handleChange} />
        </Box>
    );
}

export default BasicPagination;