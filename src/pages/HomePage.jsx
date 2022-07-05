import React, {useContext} from "react";
import Banner from "../components/banner/Banner";
import SideBar from "../components/sideBar/SideBar";
import PostList from "../components/postList/PostList";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import blogData from "../contexts/blogData";

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
    let navigate = useNavigate();
    console.log('홈페이지 props', props)
    return (
        <main>
        <Banner />
        <Container>
            {props.isLoggedIn && <SideBar ProfileImg={data.users} Name={data.users} Category={data.users} UserInfo={data.users} />}
            
            {/* {login && (<SideBar Category={user.category}/>)} */}
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