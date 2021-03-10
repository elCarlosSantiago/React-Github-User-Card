import React from 'react';

const UserCard = ({ user, showFollowers }) => {
  return (
    <>
      <div className="user-card">
        <div>
          <h2>{user.name}</h2>
          <p>Username: {user.login}</p>
          <p>Location: {user.location}</p>
          <p>
            Profile:
            <a href={user.html_url}>{user.html_url}</a>
          </p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Bio: {user.bio}</p>
        </div>
        <img alt="Avatar" src={user.avatar_url} />
      </div>
      <button onClick={showFollowers}>Followers!</button>
    </>
  );
};

export default UserCard;
