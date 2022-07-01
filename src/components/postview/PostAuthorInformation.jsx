import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

const Wrapper = styled.dl`
  height: 6.4rem;
  font-size: 1.4rem;

  display: flex;
  gap: 1rem;
  color: #767676;
`;

const StyledAuthor = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
    vertical-align: bottom;
  }
`;

const StyledDate = styled.dd`
  display: flex;
  align-items: center;
  gap: 0.6rem;

  ::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
  }
`;

function PostAuthorInformation(props) {
  const { postId } = useParams();
  
  const post = data.posts.find((item) => {
    return item.id == postId;
  });

  return (
    <Wrapper>
      <dt className="sr-only">Author</dt>
      <StyledAuthor><img src={`../..${post.profileImg}`} alt="" /> {post.userName}</StyledAuthor>
      <dt className="sr-only">Created</dt>
      <StyledDate>{post.created}</StyledDate>
  </Wrapper>
  )
}

export default PostAuthorInformation;