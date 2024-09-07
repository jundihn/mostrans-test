import { fetchCharacters } from "../lib/api";
import CharacterList from "../components/CharacterList";

export default async function Home() {
  let characters = [];

  try {
    characters = await fetchCharacters();
  } catch (error) {
    console.error("Failed to fetch characters:", error);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            Rick and Morty Character
          </h1>
          <CharacterList characters={characters} />
        </div>
      </main>
    </div>
  );
}
