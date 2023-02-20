import { Pagination } from "@mui/material";
import { Box } from "@mui/system";

const BasicPagination = () => {
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        console.log(value);
    };

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: "center"
        }}>
            <Pagination count={10} onChange={handleChange} />
        </Box>
    );
}

export default BasicPagination;