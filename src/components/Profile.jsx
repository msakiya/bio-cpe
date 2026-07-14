import React from 'react';

const Profile = ({ data }) => {
  if (!data) return null;
  
  return (
    <div className="profile animate-fade-in delay-1">
      <div className="profile-img-container">
        <img src={data.avatar} alt={data.name} className="profile-img" />
      </div>
      <h1 className="profile-name">{data.name}</h1>
      <p className="profile-bio">{data.bio}</p>
    </div>
  );
};

export default Profile;
