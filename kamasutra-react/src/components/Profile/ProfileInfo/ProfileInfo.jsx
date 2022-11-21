import React from 'react';
import c from './ProfileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div>
      <div className={c.image}>
        <img src='https://cdn.pixabay.com/photo/2013/11/28/10/03/river-219972_1280.jpg' alt='nature'/>
      </div>
      <div>
        Av + description
      </div>
      <div>
        New post
      </div>
    </div>
  );
}

export default ProfileInfo;