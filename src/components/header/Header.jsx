import React, { useState } from "react";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: var(--white-color);
  display: block;

  @media (max-width: 640px) {
	.only-pc {
		display: none;
	}
	span {
		overflow: hidden;
		position: absolute;
		clip: rect(0, 0, 0, 0);
		width: 1px;
		height: 1px;
		margin: -1px;
		border: 0;
		padding: 0;
	}
}
`;

const StyledMaxwidth = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding: 1rem 0;

  width: 1224px;
  max-width: calc(100% - 4rem);
  margin: 0 auto;
`;

function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
      setIsLoggedIn(true);
  };

  const onClickLogout = () => {
      setIsLoggedIn(false);
  };
  return (
    <StyledHeader>
      <StyledMaxwidth>
        <Logo />
        <UserMenu 
          isLoggedIn={isLoggedIn}
          onClickLogin={onClickLogin}
          onClickLogout={onClickLogout}
        />
      </StyledMaxwidth>
    </StyledHeader>
  )
}

export default Header