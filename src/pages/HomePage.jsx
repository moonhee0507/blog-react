import React from "react";
import Banner from "../components/banner/Banner";
import SideBar from "../components/sidebar/SideBar";
import PostList from "../components/postlist/PostList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  position: relative;
  
  width: 1224px;
  max-width: calc(100% - 4rem);
  margin: 0 auto;

  @media (max-width: 1024px) {
      flex-direction: column-reverse;
    }
`;

// 버튼 컴포넌트를 통해 글 작성 페이지로 갈 수 있는 기능
// 포스트리스트 컴포넌트로 글 목록을 보여주는 기능
function HomePage(props) {
  const {} = props;

  // 유즈내비게이트 참고: https://reactrouter.com/docs/en/v6/hooks/use-navigate
  // 이것은 페이지 이동을 위해 리액트 라우터 돔의 유즈내비게이트를 사용하는 것인데,,
  const navigate = useNavigate();

  return (
    <main>
      <Banner />
      <Container>
        <SideBar />
        <PostList 
          posts={data}
          onClickItem={(item) => {
            navigate(`/post/${item.id}`);
          }}
        />
      </Container>
    </main>
  )
}

export default HomePage;