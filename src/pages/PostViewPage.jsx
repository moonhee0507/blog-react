import React from "react";
import { useParams } from "react-router-dom";
// import styled from "styled-components";
import data from "../data.json";

import PostBackground from "../components/postview/PostBackground";
import PostContent from "../components/postview/PostContent";


function PostViewPage(props) {
  const { postId } = useParams();
  
  
  const post = data.posts.find((item) => {
    return item.id == postId;
  });

  console.log('post', post)
  return (
    <div>
      <PostBackground />
      <PostContent />
      {/* {post.map((post, index, title) => {
          return (
            <h1
              key={post.id}
              post={post.title}
            />
          );
        })} */}
    </div>
  );
}

export default PostViewPage;