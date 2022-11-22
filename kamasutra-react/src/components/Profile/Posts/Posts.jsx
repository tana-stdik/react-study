import React from 'react';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
let postsData =[
  {id:1, post:"Hi, if are you?", likesCount:12},
  {id:2, post:"I'm happy!", likesCount:25},
  {id:3, post:"Don't worry", likesCount:0}
];

let postsElement = 
  postsData.map ( p => <Post message={p.post} likesCount={p.likesCount}/>);

  return (
    <div className={c.posts}>
      <h2>Posts</h2>
      <div>
        <div>
          <textarea></textarea>
        </div>
          <button>Add post</button>
      </div>
      <div>
        {postsElement}
      </div>
    </div>
  );
}

export default Posts;