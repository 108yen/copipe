import { Copipe } from "@/components/Atoms";
import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
    pageNum: number;
    setCopipeList: (page:number) => void;
}

const BasicPagination: React.FC<Props> = ({
    pageNum,
    setCopipeList,
}) => {
    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        await setCopipeList(value);
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
            <Pagination count={pageNum} onChange={handleChange} />
        </Box>
    );
}

export default BasicPagination;