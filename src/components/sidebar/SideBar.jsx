import React, { useContext } from "react";
import styled from "styled-components";
import blogData from "../../contexts/blogData";

import noimg from "../../assets/noimg.svg";
import profile from "../../assets/profile.jpg";
import Facebook from "../../assets/Facebook.svg";
import Twitter from "../../assets/Twitter.svg";
import Instagram from "../../assets/Instagram.svg";
import Github from "../../assets/Github.svg";

const StyledAside = styled.aside`
    display: block;
	flex-basis: calc((100% - 2.4rem * 3) / 4);
	flex-shrink: 0;
	align-self: flex-start;
	padding: 4rem 2.4rem 7rem;
	box-sizing: border-box;
	border-radius: var(--border-radius);
	background: var(--white-color);
	text-align: center;
	font-size: 2rem;
    z-index: 1;

    @media (max-width: 1024px) {
        .sidebar {
        width: 100%;
        }
}
`;

const StyledAboutMeTitle = styled.span`
    display: block;
	margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-decoration: underline;
	letter-spacing: 0.1em;
`;

const StyledCategoryTitle = styled.span`
    display: block;
	margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-decoration: underline;
	letter-spacing: 0.1em;
    margin-top: 60px;
`;

const StyledFollowTitle = styled.span`
    display: block;
	margin-bottom: 2rem;
	font-size: 1.2rem;
	font-weight: bold;
	text-decoration: underline;
	letter-spacing: 0.1em;
    margin-top: 60px;
`;

const StyledUserProfile = styled.img`
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
  `;

const StyledUserName = styled.p`
    color: rgb(55, 170, 236);
    font-weight: bold;
    font-size: 16px;
    margin: 12px 0 8px;
`;

const StyledUserIntroduction = styled.p`
    font-size: 14px;
    padding: 0 4px;
    line-height: 20px;
`;

const StyledCategories = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px;
    list-style: none;

    a {
        background: #f5f5f5;
        color: #6f6f6f;
        font-size: 12px;
        border-radius: calc(6.4px * 2);
        padding: 2px 12px;
        text-decoration: none;
    }
`;

const StyledSocial = styled.div`
    display: flex;
    gap: 6px;
    justify-content: center;
    margin-top: -4px;

    a {
        display: block;
        padding: 4px;
        line-height: 1;

        img {
        width: 16px;
        display: block;
        }
    }
`;

function SideBar(props) {
    const {isLoggedIn, onClickLogin, onClickLogout} = props;
    const { users } = useContext(blogData);

    return (
        <StyledAside>
        <div className="sidebarItem">
            <StyledAboutMeTitle>ABOUT ME</StyledAboutMeTitle>

            {isLoggedIn ? (
                <div>
                <StyledUserProfile src={`../..${users[0].profileImg}`} alt="프로필 사진" /> 
                <StyledUserName>{users[0].name}</StyledUserName>
                </div>
            ) : (
                <div>
                <StyledUserProfile src={noimg} alt="프로필 사진" />
                <StyledUserName>Guest</StyledUserName>
                </div>
            )}

            <StyledUserIntroduction>{users[0].userInfo}</StyledUserIntroduction>
        </div>
        <div className="sidebarItem">
            <StyledCategoryTitle>CATEGORIES</StyledCategoryTitle>
            <StyledCategories>
            <li>
                <a href="">{users[0].category[0]}</a>
            </li>
            <li>
                <a href="">{users[0].category[1]}</a>
            </li>
            <li>
                <a href="">{users[0].category[2]}</a>
            </li>
            <li>
                <a href="">{users[0].category[3]}</a>
            </li>
            <li>
                <a href="">{users[0].category[4]}</a>
            </li>
            <li>
                <a href="">{users[0].category[5]}</a>
            </li>
            <li>
                <a href="">{users[0].category[6]}</a>
            </li>
            </StyledCategories>
        </div>
        <div className="sidebarItem">
            <StyledFollowTitle>FOLLOW</StyledFollowTitle>
            <StyledSocial>
            <a href="#">
                <img src={Facebook} alt="" />
            </a>
            <a href="#">
                <img src={Twitter} alt="" />
            </a>
            <a href="#">
                <img src={Instagram} alt="" />
            </a>
            <a href="#">
                <img src={Github} alt="" />
            </a>
            </StyledSocial>
        </div>
        </StyledAside>
    );
}

export default SideBar;