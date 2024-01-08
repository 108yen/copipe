'use client'
import BasicPagination from "@/modules/basicPagination";
import CopipeCard from "@/modules/copipeCard";
import SearchForm from "@/modules/searchForm";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{
        flexGrow: 1,
        p: { xs: 0, sm: 3 }
      }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={10} lg={8} xl={6}>
            <SearchForm />
            <CopipeCard />
            <BasicPagination />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}