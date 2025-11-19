import React from 'react';

const Header = () => {
    return (
        <header style={{ padding: '40px 0', textAlign: 'center' }}>
            <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '10px' }}>
                Gemini3 Game Arcade 🎮
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.2rem' }}>
                Made with Gemini3. Played by You. ✨
            </p>
        </header>
    );
};

export default Header;
