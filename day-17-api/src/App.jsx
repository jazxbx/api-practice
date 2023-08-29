import { DogSection } from "./Components/DogSection";
import { Memes } from "./Components/MemesSection";
import { Pokemon } from "./Components/PokemonSection";

function App() {
  return (
    <>
      <h1>Can you catch them all?</h1>
      <DogSection />
      <Memes />
      <Pokemon />
    </>
  );
}

export default App;
