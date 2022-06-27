import React from "react";
import styled from "styled-components";
import ArrowTop from "../../assets/ArrowTop.svg";

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

const StyledButton = styled.button`
	position: absolute;
	bottom: 0;
	right: 0;
	width: 6.4rem;
	height: 6.4rem;
	padding-top: 2.2rem;
	border: 0;
	border-radius: var(--border-radius) var(--border-radius) 0 0;
	background: var(--main-color) url(${ArrowTop}) no-repeat 50% 0.4rem / 4rem;
	color: var(--white-color);
	text-align: center;
	font-weight: bold;
`;

function Footer() {
	return (
    <StyledFooter>
      <Wrapper>
        <StyledH2>©Weniv Corp.</StyledH2>
        <StyledButton>TOP</StyledButton>
      </Wrapper>
    </StyledFooter>
	);
};

export default Footer;