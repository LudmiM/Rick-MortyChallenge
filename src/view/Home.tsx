import { useEffect, useState } from "react";
import CharacterCard from "../components/cardCharacters";

export default function Home() {
  const [characters, setCharacters] = useState([]); 

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los personajes");
        }
        return response.json();
      })
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div className="characters-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
}
