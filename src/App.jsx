import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import Profile from './components/Profile';
import LinkBlock from './components/LinkBlock';
import Socials from './components/Socials';
import siteData from './data.json';

function App() {
  // Apply theme if available in data
  useEffect(() => {
    if (siteData.profile?.theme) {
      const root = document.documentElement;
      if (siteData.profile.theme.backgroundColor) {
        root.style.setProperty('--bg-color', siteData.profile.theme.backgroundColor);
      }
      if (siteData.profile.theme.textColor) {
        root.style.setProperty('--text-color', siteData.profile.theme.textColor);
      }
      if (siteData.profile.theme.accentColor) {
        root.style.setProperty('--accent-color', siteData.profile.theme.accentColor);
      }
    }
  }, []);

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
