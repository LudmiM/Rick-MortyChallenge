import { useState } from "react";
import { IoFilter } from "react-icons/io5";

interface FilterProps {
  onFilterChange: (filter: { species: string; gender: string; status: string }) => void;
}

export default function Filters({ onFilterChange }: FilterProps) {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [selectedSpecies, setSelectedSpecies] = useState<string>("");
  const [selectedGender, setSelectedGender] = useState<string>(""); 
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const handleFilterChange = () => {
    onFilterChange({
      species: selectedSpecies,
      gender: selectedGender,
      status: selectedStatus,
    });
  };

  return (
    <div className="w-full flex items-center justify-center">
      <button
        className="block lg:hidden text-black bg-[#a6cccc] rounded-sm w-11/12"
        onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
      >
        <IoFilter /> Filtros
      </button>
      
      <div className={`lg:flex ${isMobileFiltersOpen ? "block" : "hidden"}`}>
        <div className="mb-4">
          <label htmlFor="species" className="block text-white">Species</label>
          <select
            id="species"
            className="select-filter"
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
          >
            <option value="">Todas las especies</option>
            <option value="Human">Human</option>
            <option value="Alien">Alien</option>
            <option value="Humanoid">Humanoid</option>
            <option value="Robot">Robot</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-white">Genero</label>
          <select
            id="gender"
            className="select-filter"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="">Todas las especies</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-white">Estatus</label>
          <select
            id="status"
            className="select-filter"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="">Todos los status</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="Unknown">Unknown</option>
          </select>
        </div>

        <button
          onClick={handleFilterChange}
          className="bg-[#a6cccc] text-black rounded-sm mr-3"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
}
