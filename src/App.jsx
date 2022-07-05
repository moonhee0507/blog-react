import React, { useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/HomePage";
import PostViewPage from "./pages/PostViewPage";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --main-color: rgb(55, 170, 236);
        --main-rgb: 55, 171, 236;
        --outline-border: rgb(55, 160, 236);
        --red-color: rgb(243, 124, 75);
        --red-rgb: 243, 124, 75;
        --black-color: #28303f;
        --white-color: #fff;
        --gray-color: #767676;
        --border-color: #ddd;
        --gray-background-light: #f9f9f9;
        --gray-background: #f5f5f5;
        --gray-text: #6f6f6f;
        --border-radius: 0.4em;
    }

    h1,
    a,
    div,
    p,
    section,
    article,
    input,
    textarea {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    html {
        font-size: 10px;
    }

    body {
        font-size: 1.6rem;
        line-height: 1.4;
    }

    #root {
        background-color: #f5f5f5;
        box-sizing: border-box;
    }

    a, button {
        cursor: pointer;
    }

    .sr-only {
        overflow: hidden;
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        border: 0;
        padding: 0;
    }
`;

function App() {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleUser = (user) => {
        setUser(user);
    }

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

	return (
        <>
            <GlobalStyle />
            <Header user={user} handleUser={handleUser} isLoggedIn={isLoggedIn} onClickLogin={onClickLogin} onClickLogout={onClickLogout} />
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route index element={<HomePage user={user} isLoggedIn={isLoggedIn} />} />
                    <Route path="post/:postId" element={<PostViewPage />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App;
