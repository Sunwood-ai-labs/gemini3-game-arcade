import React from 'react';

const Header = () => {
    return (
        <header style={{ padding: '40px 0', textAlign: 'center' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '10px' }}>
                Gemini3 Game Arcade 🎮
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem', marginBottom: '20px' }}>
                Made with Gemini3. Played by You. ✨
            </p>

            <div style={{
                display: 'flex',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '15px',
                flexWrap: 'wrap'
            }}>
                <a
                    href="https://github.com/Sunwood-ai-labs/gemini3-game-arcade"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'var(--color-primary)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                    GitHub
                </a>

                <a
                    href="https://github.com/Sunwood-ai-labs/gemini3-game-arcade/issues/new?template=game_request.md&title=%E3%82%B2%E3%83%BC%E3%83%A0%E7%99%BB%E9%8C%B2%E3%83%AA%E3%82%AF%E3%82%A8%E3%82%B9%E3%83%88"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: 'var(--color-secondary)',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 20px',
                        background: 'rgba(255, 100, 200, 0.1)',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 100, 200, 0.3)',
                        transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 100, 200, 0.2)';
                        e.currentTarget.style.borderColor = 'var(--color-secondary)';
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.background = 'rgba(255, 100, 200, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(255, 100, 200, 0.3)';
                    }}
                >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    ゲームを登録する（Issue）
                </a>
            </div>

            <p style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.9rem',
                marginTop: '15px',
                opacity: 0.8
            }}>
                あなたのGemini3ゲームをIssueから簡単に登録できます！
            </p>
        </header>
    );
};

export default Header;
