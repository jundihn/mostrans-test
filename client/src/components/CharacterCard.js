import Image from "next/image";
import Link from "next/link";

const CharacterCard = ({ character }) => {
  return (
    <Link
      href={`/character-list/${character.id}`}
      className="block border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex items-center">
        <Image
          src={character.image}
          alt={character.name}
          width={150}
          height={150}
          className="rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{character.name}</h2>
          <p>
            <strong>Species:</strong> {character.species}
          </p>
          <p>
            <strong>Status:</strong> {character.status}
          </p>
          <p>
            <strong>Location:</strong> {character.location.name}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
