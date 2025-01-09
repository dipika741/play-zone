import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export default function GameGrid() {
  const { games, error } = useGames();
  return (
    <div>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li>{game.name}</li>
        ))}
      </ul>
    </div>
  );
}
