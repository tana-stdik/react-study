import React from 'react';
import Posts from './Posts/Posts';
// import c from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <main>
      <ProfileInfo/>
      <Posts/>
    </main>
  );
}

export default Profile;