import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconModify from "../../assets/icon-modify.svg";
import IconModifyWhite from "../../assets/icon-modify-white.svg";

const StyledModifyButton = styled(Link)`
    background: var(--gray-background) url(${IconModify}) no-repeat 50% 50% / 1.6rem;
    right: 13rem;
    width: 4rem;
    height: 4rem;
    border: 0;
    border-radius: var(--border-radius);
    
    :hover {
        transition: all 0.3s;
        background: var(--main-color) url(${IconModifyWhite}) no-repeat 50% 50% / 1.6rem;
    }
`;

function ModifyButton(props) {
    return (
        <StyledModifyButton to="/">
            <span className="sr-only">modify</span>
        </StyledModifyButton>
    );
}

export default ModifyButton;