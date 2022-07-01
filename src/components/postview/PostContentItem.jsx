import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";
import { v4 as uuidv4 } from 'uuid';

const StyledP = styled.p`
    font-size: 1.6rem;
    line-height: 1.6;
    text-align: justify;
    letter-spacing: -0.01em;
`;

const StyledPostImage = styled.img`
    width: 100%;
    margin: 3.2rem 0;
    vertical-align: bottom;
`;


function PostContentItem(props) {
    const { postId } = useParams();
    const post = data.posts.find((item) => {
        return item.id == postId;
    });

    return (
        <div>
            {post.contents.map((item) => {
                if (item.type === "p") {
                    // return <StyledP key={Math.random() * 100}>{item.text}</StyledP>;
                    return <StyledP key={uuidv4()}>{item.text}</StyledP>;
                }
                if (item.type === "img") {
                    return <StyledPostImage src={`../..${item.src}`}></StyledPostImage>;
                }
            })}
        </div>
    );
}

export default PostContentItem;