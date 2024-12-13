export default function CharacterCard({ character }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={character.image} 
        alt={character.name} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{character.name}</h3>
        <p className="text-gray-600">Especie: {character.species}</p>
        <p className={`text-${character.status === 'Alive' ? 'green' : 'red'}-600`}>
          Estado: {character.status}
        </p>
      </div>
    </div>
  );
}
