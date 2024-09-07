import { fetchCharacterById } from "../../../lib/api";
import AssignLocationForm from "../../../components/AssignmentButton";

export default async function CharacterPage({ params }) {
  const { id } = params;
  const character = await fetchCharacterById(id);

  if (!character) {
    return <div className="text-center mt-8">Character not found</div>;
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <CharacterDetails character={character} />
      <AssignLocationForm characterId={character.id} />
    </div>
  );
}

function CharacterDetails({ character }) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">{character.name}</h1>
      <img
        src={character.image}
        alt={character.name}
        className="w-48 h-48 object-cover rounded-full mb-4"
      />
      <p className="text-lg mb-2">Status: {character.status}</p>
      <p className="text-lg mb-4">Species: {character.species}</p>
    </div>
  );
}
