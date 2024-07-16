import React from "react";
import BasketballPlayerCard from "./components/basketballPlayerCard";
import "./App.css";

function App() {
  const player = {
    name: "LeBron James",
    image: "https://media.gettyimages.com/id/1463993781/photo/los-angeles-california-lebron-james-of-the-los-angeles-lakers-reacts-after-scoring-to-pass.jpg?s=612x612&w=0&k=20&c=NJ8IMgFHrrYQEkbDjwSNjTEXhQvxz9jCRbvxgpu03eM=",
    position: "Forward",
    stats: {
      pointsPerGame: 25.4,
      assistsPerGame: 7.1,
      reboundsPerGame: 10.5,
    },
  };

  return (
    <div className="App">
      <BasketballPlayerCard
        name={player.name}
        image={player.image}
        position={player.position}
        stats={player.stats}
      />
    </div>
  );
}

export default App;
