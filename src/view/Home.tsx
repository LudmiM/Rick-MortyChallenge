import { useEffect, useState } from "react";
import CharacterCard from "../components/cardCharacters";
import { Character } from "../interfacs/characters";
import Filters from "../layouts/filters";

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

  const [filters, setFilters] = useState({
    species: "",
    gender: "",
    status: ""
  });
  const handleFilterChange = (newFilters: { species: string; gender: string; status: string }) => {
    setFilters(newFilters);
  };

  useEffect(() => {
    const fetchFilteredCharacters = async () => {
      let url = "https://rickandmortyapi.com/api/character?";

      if (filters.species) {
        url += `species=${filters.species}&`;
      }
      if (filters.gender) {
        url += `gender=${filters.gender}&`;
      }
      if (filters.status) {
        url += `status=${filters.status}&`;
      }

      try {
        const response = await fetch(url);
        const data = await response.json();
        setCharacters(data.results);
      } catch (error) {
        console.log("Error al obtener los personajes:", error);
      }
    };

    fetchFilteredCharacters();
  }, [filters]);


  return (
    <>
      <Filters onFilterChange={handleFilterChange} />
      <div className="characters-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {characters.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div> 
    </>
  );
}
