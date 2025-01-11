import ResponsiveLayout from "./components/ResponsiveLayout";
import { Grid, GridItem, Image, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreListAside from "./components/GenreListAside";

function App() {
  return (
    <>
      {/* <ResponsiveLayout /> */}

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
              <GenreListAside />
            </GridItem>
          </Show>

          <GridItem pl="2" bg="green.300" area={"main"}>
            <GameGrid />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
