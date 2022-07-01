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

function HomePage(props) {
    const {} = props;
    let navigate = useNavigate();

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
    );
}

export default HomePage;