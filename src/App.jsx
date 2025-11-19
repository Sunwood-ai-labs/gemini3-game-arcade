import React from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import games from './data/games.json';

function App() {
  return (
    <div className="container">
      <Header />

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px 0 60px 0'
      }}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </main>

      <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--color-text-muted)' }}>
        <p>© {new Date().getFullYear()} Gemini3 Game Arcade. All rights reserved. 💖</p>
      </footer>
    </div>
  );
}

export default App;
