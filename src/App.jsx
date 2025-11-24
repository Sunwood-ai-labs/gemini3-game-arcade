import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import gamesData from './data/games.json';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('すべて');
  const [sortOrder, setSortOrder] = useState('newest');

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(gamesData.map(game => game.category))];
    return ['すべて', ...cats];
  }, []);

  // Filter and sort games
  const filteredGames = useMemo(() => {
    let result = [...gamesData];

    // Filter by search query
    if (searchQuery) {
      result = result.filter(game =>
        game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'すべて') {
      result = result.filter(game => game.category === selectedCategory);
    }

    // Sort games
    result.sort((a, b) => {
      if (sortOrder === 'newest') {
        return parseInt(b.id) - parseInt(a.id);
      } else if (sortOrder === 'oldest') {
        return parseInt(a.id) - parseInt(b.id);
      } else if (sortOrder === 'name') {
        return a.title.localeCompare(b.title, 'ja');
      }
      return 0;
    });

    return result;
  }, [searchQuery, selectedCategory, sortOrder]);

  return (
    <div className="container">
      <Header />

      {/* Search and Filter Controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginBottom: '40px',
        padding: '30px',
        background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.05), rgba(255, 100, 200, 0.05))',
        borderRadius: '20px',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Search Bar */}
        <div>
          <label htmlFor="search" style={{ display: 'block', marginBottom: '10px', color: 'var(--color-text)', fontWeight: 'bold' }}>
            🔍 検索
          </label>
          <input
            id="search"
            type="text"
            placeholder="ゲームやツールを検索..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '15px 20px',
              fontSize: '1rem',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '12px',
              color: 'var(--color-text)',
              outline: 'none',
              transition: 'all 0.3s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
              e.target.style.background = 'rgba(255, 255, 255, 0.08)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {/* Category Filter */}
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label htmlFor="category" style={{ display: 'block', marginBottom: '10px', color: 'var(--color-text)', fontWeight: 'bold' }}>
              📁 カテゴリ
            </label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 20px',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: 'var(--color-text)',
                outline: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              {categories.map(cat => (
                <option key={cat} value={cat} style={{ background: '#1a1a2e', color: 'var(--color-text)' }}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Options */}
          <div style={{ flex: '1', minWidth: '200px' }}>
            <label htmlFor="sort" style={{ display: 'block', marginBottom: '10px', color: 'var(--color-text)', fontWeight: 'bold' }}>
              🔄 並び順
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              style={{
                width: '100%',
                padding: '15px 20px',
                fontSize: '1rem',
                background: 'rgba(255, 255, 255, 0.05)',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                color: 'var(--color-text)',
                outline: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--color-primary)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              <option value="newest" style={{ background: '#1a1a2e', color: 'var(--color-text)' }}>新しい順</option>
              <option value="oldest" style={{ background: '#1a1a2e', color: 'var(--color-text)' }}>古い順</option>
              <option value="name" style={{ background: '#1a1a2e', color: 'var(--color-text)' }}>名前順</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div style={{
          textAlign: 'center',
          color: 'var(--color-text-muted)',
          fontSize: '0.95rem',
          paddingTop: '10px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          {filteredGames.length} 件のアイテムが見つかりました
        </div>
      </div>

      <main style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '30px',
        padding: '20px 0 60px 0'
      }}>
        {filteredGames.length > 0 ? (
          filteredGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))
        ) : (
          <div style={{
            gridColumn: '1 / -1',
            textAlign: 'center',
            padding: '60px 20px',
            color: 'var(--color-text-muted)'
          }}>
            <p style={{ fontSize: '1.5rem', marginBottom: '10px' }}>😢</p>
            <p style={{ fontSize: '1.2rem' }}>該当するアイテムが見つかりませんでした</p>
            <p style={{ fontSize: '1rem' }}>検索条件を変更してみてください</p>
          </div>
        )}
      </main>

      {/* Call to Action Section */}
      <section style={{
        margin: '60px auto',
        padding: '40px 30px',
        background: 'linear-gradient(135deg, rgba(100, 200, 255, 0.1), rgba(255, 100, 200, 0.1))',
        borderRadius: '20px',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        textAlign: 'center',
        maxWidth: '800px'
      }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          あなたのゲームも登録しませんか？ 🎮
        </h2>
        <p style={{
          color: 'var(--color-text-muted)',
          fontSize: '1.2rem',
          marginBottom: '30px',
          lineHeight: '1.8'
        }}>
          Gemini3で作った素敵なゲームを世界中の人に自慢しちゃおう！<br />
          GitHubのIssueから簡単に登録できるよ 💖
        </p>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginTop: '30px'
        }}>
          <a
            href="https://github.com/Sunwood-ai-labs/gemini3-game-arcade/issues/new?template=game_submission.yml"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontSize: '1.2rem',
              fontWeight: 'bold',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 40px',
              background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(100, 200, 255, 0.3)'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(100, 200, 255, 0.5)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(100, 200, 255, 0.3)';
            }}
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            ゲームを登録する
          </a>

          <a
            href="https://github.com/Sunwood-ai-labs/gemini3-game-arcade"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-text)',
              textDecoration: 'none',
              fontSize: '1.1rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '15px 30px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '50px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            GitHubを見る
          </a>
        </div>

        <div style={{
          marginTop: '30px',
          padding: '20px',
          background: 'rgba(0, 0, 0, 0.2)',
          borderRadius: '10px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', margin: 0 }}>
            💡 プログラミングの知識は不要！Issueに必要事項を入力するだけでOK！
          </p>
        </div>
      </section>

      <footer style={{ textAlign: 'center', padding: '20px', color: 'var(--color-text-muted)' }}>
        <p>© {new Date().getFullYear()} Gemini3 Game Arcade. All rights reserved. 💖</p>
      </footer>
    </div>
  );
}

export default App;
