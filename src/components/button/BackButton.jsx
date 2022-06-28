import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ArrowLeftBlue from "../../assets/ArrowLeft-blue.svg";

const StyledBackButton = styled(Link)`
    position: absolute;
    top: 8rem;
    left: 0;

    width: 6.4rem;
    height: 6.4rem;
    border-radius: 0 var(--border-radius) var(--border-radius) 0;
    background: var(--gray-background) url(${ArrowLeftBlue}) no-repeat 50% 50% / 4rem;
    font-size: 1.6rem;
`;

function BackButton(props) {
    return (
        <StyledBackButton to="/">
            <span className="sr-only">Back</span>
        </StyledBackButton>
    );
}

export default BackButton;