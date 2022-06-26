import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/Logo.svg";

const Wrapper = styled.a`
  display: block;
  padding: 0.4rem;
  margin-left: -0.4rem;
`;


const StyledLogo = styled.img`
  display: block;
  /* vertical-align: bottom; */
`;

function Logo() {
  return (
    <h1>
					<Wrapper href="./">
						<StyledLogo src={LogoImg} alt="My Blog" />
					</Wrapper>
    </h1>
  );
}

export default Logo;