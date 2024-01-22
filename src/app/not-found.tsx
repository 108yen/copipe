import { Heading, Text } from "@yamada-ui/react";

export default function NotFound() {
    return (
        <Heading
            variant='h1'
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            404: Not Found
        </Heading>
    );
}