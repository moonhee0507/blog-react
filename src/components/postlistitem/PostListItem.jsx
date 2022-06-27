import React from "react";
import styled from "styled-components";
// import PostCategories from "./PostCategories";

const StyledContainer = styled.a`
  display: block;
  overflow: hidden;
  border-radius: var(--border-radius);
  background: var(--white-color);
  font-size: 2rem;
`;

const StyledImg = styled.img`
  width: 100%;
`;

const Wrapper = styled.div`
	padding: 1.6rem 2.4rem 2.4rem;

  h3,
  .post-description {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    -webkit-box-orient: vertical;
  }

  h3 {
    height: calc(1.8rem * 1.4 * 2);
    margin: 1rem 0;
    font-size: 1.8rem;
    font-weight: bold;
    -webkit-line-clamp: 2;
    letter-spacing: -0.02em;
  }

  .post-description {
    height: calc(1.4rem * 1.4 * 3);
    margin-top: 1.6rem;
    color: var(--gray-color);
    font-size: 1.4rem;
    -webkit-line-clamp: 3;
    text-indent: 0.5em;
  }

  @media (max-width: 540px) {
    h3 {
      height: auto;
      line-clamp: 1;
    }
    .post-description {
      height: auto;
      line-clamp: 2;
    }
  }
`;

const StyledCategories = styled.dl`
  display: flex;
	flex-wrap: wrap;
	color: var(--main-color);

  dd {
    margin-right: 0.4rem;
    padding: 0.2rem 1.2rem;
    border-radius: calc(var(--border-radius) * 2);
    background: var(--gray-background);
    font-size: 1.2rem;
  }
`;

const StyledAuthor = styled.dl`
  display: flex;
	gap: 1rem;
	color: #767676;
	font-size: 1.2rem;

  dd {
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  img {
    width: 2em;
    height: 2em;
    border-radius: 50%;
  }

  .created::before {
    content: "";
    display: block;
    width: 1px;
    height: 0.8em;
    margin-right: 1rem;
    background: var(--border-color);
}
`;

function PostListItem(props) {
  const { post, onClick } = props;
  
  return (
        <StyledContainer onClick={onClick}>
          <StyledImg src={`../..${post.thumbnail}`} alt="" />
          <Wrapper>
            <StyledCategories>
              <dt className="sr-only">Category</dt>
              <dd>{post.category[0]}</dd>
              <dd>{post.category[1]}</dd>
            </StyledCategories>
            <h3>{post.title}</h3>
            <StyledAuthor>
              <dt className="sr-only">Author</dt>
              <dd className="author"><img src={`../..${post.profileImg}`} alt="" /> {post.userName}</dd>
              <dt className="sr-only">Created</dt>
              <dd className="created">{post.created}</dd>
            </StyledAuthor>
            <p className="post-description">{post.contents[0].text}</p>
          </Wrapper>
        </StyledContainer>
  )
}

export default PostListItem;