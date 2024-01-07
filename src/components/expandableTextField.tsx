import { TextField, styled } from "@mui/material";

export const ExpandableTextField = styled(TextField)(({ theme }) => ({
    '& > textarea': {
        lineHeight: 1.5,
        overflow: 'hidden',
    },
}));