import { Card, CardBody, Container } from "@yamada-ui/react";
import { ReactNode } from "react";

export default function CopipeCard({ children }: { children: ReactNode }) {

    return (
        <Container bg='background' rounded='xl'>
            {children}
        </Container>
        // <Card variant='subtle' bg='background'>
        //     <CardBody>
        //         {children}
        //     </CardBody>
        // </Card>
    );
}