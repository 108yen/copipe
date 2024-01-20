import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";

export default function CopipeCard({ children }: { children: ReactNode }) {

    return (
        <Card
            elevation={0}
            sx={{
                m: { xs: 1, sm: 2 }
            }}
        >
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}