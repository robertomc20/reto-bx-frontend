import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import CharacterCard from "../components/CharacterCard";
import {
  getRandomCharacter,
  voteCharacter,
} from "../services/character.service";
import CharacterCardSkeleton from "../components/CharacterCardSkeleton";

const Home = () => {
  const [character, setCharacter] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [voting, setVoting] = useState(false);

  const loadCharacter = async () => {
    if (!category) return;

    setLoading(true);
    try {
      const data = await getRandomCharacter(category);
      setCharacter(data);
    } catch (error) {
      toast.error("Ocurrió un error al cargar el personaje");
      console.error("Error loading character", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCharacter();
  }, [category]);

  const handleVote = async (voteType) => {
    if (!character) return;

    setVoting(true);
    try {
      await voteCharacter({
        character,
        vote: voteType,
      });
      toast.success("Voto registrado!");

      await loadCharacter();
    } catch (error) {
      toast.error("Ocurrió un error al registrar el voto");
      console.error("Error voting", error);
    } finally {
      setVoting(false);
    }
  };

  return (
    <main className="home">
      <h1 className="home__title">Reto BX</h1>

      <p className="home__subtitle">
        Vota por personajes de tus universos favoritos
      </p>

      <select
        value={category ?? ""}
        onChange={(e) => setCategory(e.target.value)}
        className="home__category-select"
        disabled={loading}
      >
        <option value="" disabled>
          Selecciona una categoría
        </option>
        <option value="pokemon">Pokémon</option>
        <option value="rick_and_morty">Rick and Morty</option>
        <option value="superhero">Superhéroes</option>
      </select>

      {loading ? (
        <CharacterCardSkeleton />
      ) : !character ? null : (
        <CharacterCard
          name={character?.name}
          image={character?.image}
          loadingVote={voting}
          onLike={() => handleVote("like")}
          onDislike={() => handleVote("dislike")}
        />
      )}
    </main>
  );
};

export default Home;
