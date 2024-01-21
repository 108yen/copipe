import { Text } from "@yamada-ui/react";

export default function NotFound() {
    return (
        <Text
            sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }}
            size='5xl'
            fontWeight="bold"
        >
            404: Not Found
        </Text>
    );
}