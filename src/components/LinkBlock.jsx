import React from 'react';
import * as LucideIcons from 'lucide-react';

const LinkBlock = ({ link, index }) => {
  const Icon = LucideIcons[link.icon] || LucideIcons.Link2;
  const animationClass = `animate-fade-in delay-${Math.min(index + 2, 4)}`;

  if (link.type === 'image') {
    return (
      <div className={`media-block ${animationClass}`}>
        <div className="media-title">
          <Icon size={20} />
          <span>{link.title}</span>
        </div>
        <div className="image-content">
          <img src={link.url} alt={link.title} loading="lazy" />
        </div>
      </div>
    );
  }

  if (link.type === 'video') {
    return (
      <div className={`media-block ${animationClass}`}>
        <div className="media-title">
          <Icon size={20} />
          <span>{link.title}</span>
        </div>
        <div className="video-content">
          <iframe 
            src={link.url} 
            title={link.title}
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
      </div>
    );
  }

  // Handle standard buttons (url, email, phone)
  let href = link.url;
  if (link.type === 'email') href = `mailto:${link.url}`;
  if (link.type === 'phone') href = `tel:${link.url}`;

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`link-block ${animationClass}`}>
      <div className="link-icon">
        <Icon size={24} />
      </div>
      <div className="link-content">
        <span className="link-title">{link.title}</span>
      </div>
      <div className="link-arrow">
        <LucideIcons.ChevronRight size={20} />
      </div>
    </a>
  );
};

export default LinkBlock;
