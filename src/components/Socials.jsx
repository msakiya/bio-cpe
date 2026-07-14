import React from 'react';
import * as LucideIcons from 'lucide-react';

const Socials = ({ socials }) => {
  if (!socials || socials.length === 0) return null;

  return (
    <div className="socials-container animate-fade-in delay-4">
      {socials.map((social, index) => {
        const Icon = LucideIcons[social.icon] || LucideIcons.Link;
        return (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label={social.platform}
          >
            <Icon size={28} />
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
