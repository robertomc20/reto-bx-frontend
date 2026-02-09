import React from "react";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  return (
    <main className="home">
      <h1>Reto BX</h1>

      <div>
        <h2>Que te parece el personaje?</h2>
      </div>

      <CharacterCard />
    </main>
  );
};

export default Home;
