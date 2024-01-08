import { Typography } from "@mui/material";

export default function NotFound() {
    return (
        <Typography
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            variant="h3"
            fontWeight="bold"
        >
            404: Not Found
        </Typography>
    );
}