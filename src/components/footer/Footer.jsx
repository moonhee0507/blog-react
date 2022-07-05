import React from "react";
import styled from "styled-components";
import TopButton from "../button/TopButton";

const StyledFooter = styled.footer`
	background: var(--white-color);
	margin-top: 10rem;
    `;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 8rem;
	position: relative;
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;
`;

const StyledH2 = styled.h2`
	color: var(--gray-color);
`;

function Footer() {
	return (
    <StyledFooter>
        <Wrapper>
            <StyledH2>©Weniv Corp.</StyledH2>
            <TopButton />
        </Wrapper>
    </StyledFooter>
	);
};

export default Footer;