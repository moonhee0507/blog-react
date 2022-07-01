import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

const StyledDl = styled.dl`
  margin: 2rem 0 1rem 0;
  display: flex;
  flex-wrap: wrap;
  color: var(--main-color);

  dd {
    margin-right: 0.4rem;
    padding: 0.2rem 1.2rem;
    border-radius: calc(var(--border-radius) * 2);
    background: var(--gray-background);
    font-size: 1.2rem;
    color: var(--main-color);
  }
`;

function PostCategories() {
  const { postId } = useParams();
  
  const post = data.posts.find((item) => {
    return item.id == postId;
  });

  return (
    <StyledDl>
      <dt className="sr-only">Category</dt>
      <dd>{post.category[0]}</dd>
      <dd>{post.category[1]}</dd>
    </StyledDl>
  )
}

export default PostCategories;