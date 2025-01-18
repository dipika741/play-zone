import React, { useEffect, useState } from "react";
import { Grid, GridItem, Image, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GenreListAside from "./GenreListAside";
import GameGrid from "./GameGrid";
import { Genre } from "../hooks/useGenres";
import PlatformelectorDropdown from "./PlatformelectorDropdown";

export default function ResponsiveLayout() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main" `,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem pl="2" area={"nav"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2" bg="pink.300" area={"aside"} paddingX={5}>
            <GenreListAside
              selectedGenre={selectedGenre}
              onSelectGenre={(genre) => setSelectedGenre(genre)}
            />
          </GridItem>
        </Show>

        <GridItem pl="2" bg="green.300" area="main">
          <PlatformelectorDropdown />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}
