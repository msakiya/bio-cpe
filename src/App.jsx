import React, { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import Profile from './components/Profile';
import LinkBlock from './components/LinkBlock';
import Socials from './components/Socials';

function App() {
  const [siteData, setSiteData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data.json from the public folder at runtime
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => {
        setSiteData(data);
        setLoading(false);
        
        // Apply theme if available
        if (data.profile?.theme) {
          const root = document.documentElement;
          if (data.profile.theme.backgroundColor) {
            root.style.setProperty('--bg-color', data.profile.theme.backgroundColor);
          }
          if (data.profile.theme.textColor) {
            root.style.setProperty('--text-color', data.profile.theme.textColor);
          }
          if (data.profile.theme.accentColor) {
            root.style.setProperty('--accent-color', data.profile.theme.accentColor);
          }
        }
      })
      .catch((error) => {
        console.error("Error cargando los datos:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container" style={{ justifyContent: 'center' }}>
        <p className="animate-fade-in" style={{ color: 'var(--text-color)' }}>Cargando perfil...</p>
      </div>
    );
  }

  if (!siteData) {
    return (
      <div className="container" style={{ justifyContent: 'center' }}>
        <p className="animate-fade-in">Error al cargar los datos.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <Profile data={siteData.profile} />
      
      <div className="links-container">
        {siteData.links.map((link, index) => (
          <LinkBlock key={link.id} link={link} index={index} />
        ))}
      </div>

      <Socials socials={siteData.socials} />

      <footer className="footer animate-fade-in delay-4">
        <Sparkles />
        <span>Creado con React & Vite</span>
      </footer>
    </div>
  );
}

export default App;
