import React, {useState} from "react";
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
    transition: all 0.3s;

    &:hover {
        outline: rgba(var(--red-rgb), 0.2) solid;
        box-shadow: none;
    }
`;

function LikeButton(props) {
    const [likesCount, setLikesCount] = useState(0);
    const [isClicked, setIsClicked] = useState(false);

    const handleLikesCount = () => {
        if (isClicked) {
            setLikesCount(likesCount - 1);
        } else {
            setLikesCount(likesCount + 1);
        }
        setIsClicked(!isClicked);
    };

    return (
        <StyledLikeButton 
            onClick={ handleLikesCount }
            style={{ background: isClicked ? 
                `var(--red-color) url(${IconLikeWhite}) no-repeat 2.5rem 50% / 2.4rem` 
                : 
                `var(--white-color) url(${IconLike}) no-repeat 2.5rem 50% / 2.4rem`, 
                     color: isClicked ? 'white' : 'black'
            }}
        >
            Like
        </StyledLikeButton>
    );
}

export default LikeButton;