import React from "react";
import MovieCarrousel from "./MovieCarrousel";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Filter from "./Filter";

const MovieSection = ({ title, movies, filters, set }) => {
    return (
        <>
        <Box
            sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            }}
        >
            <Typography
            sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                my: 3,
                mx: 5,
                textAlign: "start",
            }}
            >
            {title}
            </Typography>
            {filters && <Filter func={set} filters={filters} />}
        </Box>

        <MovieCarrousel movies={movies}></MovieCarrousel>
        </>
    );
};

export default MovieSection;
