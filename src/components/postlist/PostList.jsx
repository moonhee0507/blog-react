import React from "react";
import styled from "styled-components";
import PostListItem from "../postlistitem/PostListItem";

const StyledUl = styled.ul`
    display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 2.4rem;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 540px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledMaxwidth = styled.div`
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;

    display: flex;
    flex-direction: row-reverse;
    gap: 2.4rem;
    position: relative;
`;

function PostList(props) {
    const { posts, onClickItem } = props;

    return (
        <StyledMaxwidth>
            <h2 className="sr-only">Post</h2>
            <StyledUl>
                {posts.posts.map((post) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {onClickItem(post)}}
                    />
                );
                })}
            </StyledUl>
        </StyledMaxwidth>
    );
}

export default PostList;