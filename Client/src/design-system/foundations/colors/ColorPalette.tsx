import React from 'react';

interface ColorPaletteProps {
  isDarkMode?: boolean;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ isDarkMode = false }) => {
  const bgColor = isDarkMode ? '#000000' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#000000';
  const borderColor = isDarkMode ? '#374151' : '#e5e7eb';
  
  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: bgColor, 
      color: textColor,
      fontFamily: 'sans-serif'
    }}>
      <h2 style={{ 
        fontSize: '1.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1.5rem',
        color: textColor
      }}>
        Color System
      </h2>
      
      {/* Primary Colors */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: textColor
        }}>
          Primary Colors
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <ColorSwatch name="Primary 50" value="#eef2ff" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 100" value="#e0e7ff" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 200" value="#c7d2fe" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 300" value="#a5b4fc" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 400" value="#818cf8" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 500" value="#6366f1" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 600" value="#4f46e5" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 700" value="#4338ca" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 800" value="#3730a3" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 900" value="#312e81" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Primary 950" value="#1e1b4b" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
        </div>
      </div>
      
      {/* Secondary Colors */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: textColor
        }}>
          Secondary Colors
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <ColorSwatch name="Secondary 50" value="#f0fdfa" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 100" value="#ccfbf1" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 200" value="#99f6e4" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 300" value="#5eead4" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 400" value="#2dd4bf" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 500" value="#14b8a6" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 600" value="#0d9488" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 700" value="#0f766e" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 800" value="#115e59" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 900" value="#134e4a" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Secondary 950" value="#042f2e" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
        </div>
      </div>
      
      {/* Tertiary Colors */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: textColor
        }}>
          Tertiary Colors
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <ColorSwatch name="Tertiary 50" value="#fdf2f8" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 100" value="#fce7f3" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 200" value="#fbcfe8" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 300" value="#f9a8d4" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 400" value="#f472b6" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 500" value="#ec4899" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 600" value="#db2777" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 700" value="#be185d" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 800" value="#9d174d" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 900" value="#831843" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Tertiary 950" value="#500724" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
        </div>
      </div>
      
      {/* Neutral Colors */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: textColor
        }}>
          Neutral Colors
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <ColorSwatch name="Neutral 50" value="#f9fafb" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 100" value="#f3f4f6" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 200" value="#e5e7eb" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 300" value="#d1d5db" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 400" value="#9ca3af" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 500" value="#6b7280" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 600" value="#4b5563" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 700" value="#374151" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 800" value="#1f2937" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 900" value="#111827" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Neutral 950" value="#030712" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
        </div>
      </div>
      
      {/* Semantic Colors */}
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ 
          fontSize: '1.25rem', 
          fontWeight: 'bold', 
          marginBottom: '1rem',
          color: textColor
        }}>
          Semantic Colors
        </h3>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
          gap: '1rem' 
        }}>
          <ColorSwatch name="Success 500" value="#22c55e" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Error 500" value="#ef4444" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Warning 500" value="#f59e0b" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
          <ColorSwatch name="Info 500" value="#3b82f6" bgColor={bgColor} textColor={textColor} borderColor={borderColor} />
        </div>
      </div>
    </div>
  );
};

interface ColorSwatchProps {
  name: string;
  value: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, value, bgColor, textColor, borderColor }) => {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      backgroundColor: bgColor
    }}>
      <div style={{ 
        width: '4rem', 
        height: '4rem', 
        borderRadius: '0.375rem', 
        marginRight: '1rem',
        border: `1px solid ${borderColor}`,
        backgroundColor: value
      }}></div>
      <div style={{ backgroundColor: bgColor }}>
        <div style={{ 
          fontWeight: '500',
          color: textColor,
          backgroundColor: bgColor
        }}>{name}</div>
        <div style={{ 
          fontSize: '0.875rem',
          color: isDarkColor(bgColor) ? '#d1d5db' : '#4b5563',
          backgroundColor: bgColor
        }}>{value}</div>
      </div>
    </div>
  );
};

// Helper function to determine if a color is dark
function isDarkColor(color: string): boolean {
  return color === '#000000';
}
