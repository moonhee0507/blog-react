import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

import PostAuthorInformation from "./PostAuthorInformation";
import PostCategories from "./PostCategories";

// 버튼 컴포넌트
import BackButton from "../button/BackButton";
import ModifyButton from "../button/ModifyButton";
import DeleteButton from "../button/DeleteButton";
import LikeButton from "../button/LikeButton";

const StyledMaxwidth = styled.div`
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;
`;

const StyledSection = styled.section`
    width: 91.2rem;
    max-width: 100%;
    margin: -30rem 0 auto auto;
    padding: 8rem;

    position: relative;
    border-radius: var(--border-radius);
    background: var(--white-color);
    font-size: 4rem;
    transition: all 0.3s;
`;

const StyledInner = styled.div`
    width: 100%;
    max-width: 100%;

    margin: 0 auto;
    font-size: 1.6rem;
`;

const TitleWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8rem;
    margin-bottom: 1rem;
    font-size: 1.6rem;
`;

const PostTitle = styled.h2`
    margin-bottom: 0;
    font-size: 3.2rem;
    font-weight: bold;
    width: 100%;
    text-transform: none;
`;

const StyledHr = {
    border: "1px solid var(--border-color)",
    borderWidth: "1px 0 0 0",
    margin: "3.2rem 0"
}

const StyledP = {
    fontSize: "1.6rem",
    lineHeight: "1.6",
    textAlign: "justify",
    letterSpacing: "-0.01em"
}

const StyledPostImage = {
    maxWidth: "100%",
    margin: "3.2rem 0",
    verticalAlign: "bottom"
}

const ButtonGroupDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    position: absolute;
    top: 9.2rem;
    right: 8rem;
    font-size: 1.6rem;
`;


function PostContent(props) {
    const { postId } = useParams();
    
    const post = data.posts.find((item) => {
        return item.id == postId;
    });

    return (
        <div>
        <StyledMaxwidth>
        <StyledSection>
            <StyledInner>

            <PostAuthorInformation />
            <PostCategories />
            <TitleWrapper>
                <PostTitle>{post.title}</PostTitle>
                <LikeButton />
            </TitleWrapper>

            <hr style={StyledHr}/>

            <div>
                <p style={StyledP}>{post.contents[0].text}</p>
                <img style={StyledPostImage} src={`../..${post.contents[1].src}`} alt="" />
                <p style={StyledP}>{post.contents[2].text}</p>
            </div>

            <ButtonGroupDiv>
                <ModifyButton />
                <DeleteButton />
            </ButtonGroupDiv>

            <BackButton />

            </StyledInner>
        </StyledSection>
        </StyledMaxwidth>
    </div>
    )
}

export default PostContent;