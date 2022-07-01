import React from "react";
import styled from "styled-components";
import IconDelete from "../../assets/icon-delete.svg";
import IconDeleteWhite from "../../assets/icon-delete-white.svg";

const StyledDeleteButton = styled.button`
    background: var(--gray-background) url(${IconDelete}) no-repeat 50% 50% / 1.6rem;
    right: 13rem;

    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    transition: all 0.3s;
    
    &:hover {
        transition: all 0.3s;
        background: var(--red-color) url(${IconDeleteWhite}) no-repeat 50% 50% / 1.6rem;
    }
    &:focus {
        outline: rgba(var(--red-rgb), 0.2) solid;
        box-shadow: 0 0 0 1px var(--red-color);
    }
`;

function DeleteButton(props) {
    return (
        <StyledDeleteButton >
            <span className="sr-only">delete</span>
        </StyledDeleteButton>
    );
}

export default DeleteButton;