import React from "react";
import styled from "styled-components";
import noimg from "../../assets/noimg.svg";
import profile from "../../assets/profile.jpg";
import iconLogin from "../../assets/icon-login.svg";
import iconLogout from "../../assets/icon-logout.svg";
import iconRegister from "../../assets/icon-register.svg";
import write from "../../assets/icon-modify-white.svg";

const StyledUl = styled.ul`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
	width: 4.4rem;
	height: 4.4rem;
    border-radius: 50%;
    vertical-align: bottom;
`;

const LoginButton = styled.a`
	background: var(--gray-background);
	color: var(--black-color);

    display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	font-weight: bold;
	line-height: 1;

    @media (max-width: 640px) {
		width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
	}
`;

const RegisterButton = styled.a`
	background: var(--gray-background);
	color: var(--black-color);

    display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	font-weight: bold;
	line-height: 1;

    @media (max-width: 640px) {
		width: 4.4rem;
		height: 4.4rem;
		padding: 0;
		border-radius: 50%;
    }
`;

const WriteButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	padding: 0.2rem 1.2em 0;
	border: 0;
	border-radius: var(--border-radius);
	background: var(--main-color);
	color: var(--white-color);
	font-weight: bold;
	line-height: 1;
`;

const LogoutButton = styled.a`
	padding: 0.2rem 0.8em 0;
	background: var(--white-color);
	color: var(--black-color);

    display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	height: 4rem;
	border: 0;
	border-radius: var(--border-radius);
	font-weight: bold;
	line-height: 1;
`;

const LogoutImage = styled.img`
	height: 1.4em;
`;

const ImageOfButton = styled.img`
	height: 1.2em;
	margin-top: -0.2rem;
	vertical-align: middle;
`;

function UserMenu(props) {
    // const {isLoggedIn, onClickLogin, onClickLogout} = props;
    
    return (
        <>
        {props.isLoggedIn ? (
            <StyledUl>
            <li>
                <a href="#">
                <StyledImage src={profile} alt="프로필 사진" />
                </a>
            </li>
            <li className="only-pc">
                <WriteButton href="#" >
                <ImageOfButton src={write} alt="" />
                <span>Write</span>
                </WriteButton>
            </li>
            <li>
                <LogoutButton href="#" onClick={props.onClickLogout}>
                <LogoutImage src={iconLogout} alt="" />
                <span>Logout</span>
                </LogoutButton>
            </li>
            </StyledUl>
        ) : (
            <StyledUl>
            <li>
                <a href="#">
                <StyledImage src={noimg} alt="프로필 사진" />
                </a>
            </li>
            <li>
                <LoginButton href="#" onClick={props.onClickLogin}>
                <ImageOfButton src={iconLogin} alt="" />
                <span>Login</span>
                </LoginButton>
            </li>
            <li>
                <RegisterButton href="#">
                <ImageOfButton src={iconRegister} alt="" />
                <span>Register</span>
                </RegisterButton>
            </li>
            </StyledUl>
        )}
        </>
    );
}

export default UserMenu;