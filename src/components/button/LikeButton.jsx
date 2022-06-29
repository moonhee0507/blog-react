import React from "react";
import styled from "styled-components";
import IconLike from "../../assets/icon-like.svg";
import IconLikeWhite from "../../assets/icon-like-white.svg";

const StyledLikeButton = styled.button`
    font-size: initial;
    flex-shrink: 0;
    width: 12rem;
    height: 4rem;
    padding-left: 3rem;
    border: 1px solid rgba(var(--red-rgb), 0.5);
    border-radius: var(--border-radius);
    background: var(--white-color) url(${IconLike}) no-repeat 2.5rem 50% / 2.4rem;
    transition: all 0.3s;

    &:hover, 
    &:active {
        background: var(--red-color) url(${IconLikeWhite}) no-repeat 2.5rem 50% / 2.4rem;
        color: var(--white-color);
    }

    &:focus {
        outline: rgba(var(--red-rgb), 0.2) solid;
        box-shadow: none;
    }
`;

function LikeButton() {
    return (
        <StyledLikeButton className="button-like">Like</StyledLikeButton>
    )
}

export default LikeButton;