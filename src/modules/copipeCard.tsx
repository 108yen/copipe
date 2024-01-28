import { Container } from "@yamada-ui/react";
import { ReactNode } from "react";

export default function CopipeCard({ children }: { children: ReactNode }) {

    return (
        <Container bg='white' rounded='xl'>
            {children}
        </Container>
    )
}