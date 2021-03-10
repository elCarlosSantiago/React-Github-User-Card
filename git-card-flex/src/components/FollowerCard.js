import React from 'react';

function FollowerCard({ followers }) {
  return (
    <div className="follower-card">
      <div>
        <h3>Username:{followers.login}</h3>
        <p>
          Profile:
          <a href={followers.html_url}>{followers.html_url}</a>
        </p>
      </div>
      <img alt="Avatar" src={followers.avatar_url} />
    </div>
  );
}

export default FollowerCard;
