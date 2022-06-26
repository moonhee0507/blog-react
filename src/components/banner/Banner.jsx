import React, { useContext } from "react";
import styled from "styled-components";
import blogData from "../../contexts/blogData";
import background from "../../assets/background.jpg";

const StyledArticle = styled.article`
  position: relative;
  background: url(${background}) no-repeat 50% 50% / cover;
  height: 27em;
  margin-bottom: -7em;
`;

const WrapperMaxwidth = styled.div`
  width: 1224px;
  max-width: calc(100% - 4rem);
  margin: 0 auto;
`;

const Container = styled.div`
  width: 28rem;
  padding: 7rem 0 14.5rem;
  text-align: center;
  color: var(--gray-background-light);

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: calc((100% - 1224px) / 2 + 44rem);
    height: 100%;
    background: rgba(40, 48, 63, 0.5);
    z-index: 0;
  }

  @media (max-width: 1280px) {
    ::before {
      width: 44rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0 auto;

    ::before {
      width: 100%;
    }
  }
`;

const SmallTitle = styled.p`
  border: 1px solid rgba(249, 249, 249, 0.3);
  border-width: 1px 0;
  padding: 1rem 0 0.8rem;
  font-size: 2rem;
  letter-spacing: 0.2em;
  position: relative;
`;

const LargeTitle = styled.p`
  font-weight: bold;
  font-size: 5.4rem;
  margin: 1.6rem 0;
  position: relative;
`;

const BannerDescription = styled.p`
  font-size: 1.2rem;
  text-align: left;
  word-break: break-all;
  padding: 0 0.8rem;
  position: relative;
`;


function Banner() {
    const { blog } = useContext(blogData);
    
    return (
      <StyledArticle>
        <WrapperMaxwidth>
          <Container>
            <SmallTitle>{blog.subTitle}</SmallTitle>
            <LargeTitle>{blog.mainTitle}</LargeTitle>
            <BannerDescription>
              {blog.description}
            </BannerDescription>
          </Container>
        </WrapperMaxwidth>
      </StyledArticle>
    );
}

export default Banner;