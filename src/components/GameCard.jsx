import React from 'react';

const GameCard = ({ game }) => {
    return (
        <div className="glass-panel" style={{
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            transition: 'transform 0.3s ease'
        }}>
            <div style={{ position: 'relative', paddingTop: '56.25%' }}>
                <img
                    src={game.thumbnail}
                    alt={game.title}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                    }}
                />
            </div>
            <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ margin: '0 0 10px 0', color: 'var(--color-primary)' }}>{game.title}</h3>
                <p style={{ margin: '0 0 20px 0', color: 'var(--color-text-muted)', flex: 1 }}>
                    {game.description}
                </p>
                <a href={game.url} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textAlign: 'center' }}>
                    Play Now 🚀
                </a>
            </div>
        </div>
    );
};

export default GameCard;
