import React from "react";

export function Post(props) {
  const { post } = props;

  return (
    <div>
      <div className='title'>{post.title}</div>
      <div className='body'>
        <p>{post.description}</p>
      </div>
      <div className='footer'>
        <p>@{post.username}</p>
      </div>
    </div>
  );
}
