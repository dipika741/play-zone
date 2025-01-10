import { Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

export default function GenreListAside() {
  const { genres, error, isLoading } = useGenres();
  return (
    <>
      {genres.map((genre) => (
        <Text>{genre.name}</Text>
      ))}
    </>
  );
}
