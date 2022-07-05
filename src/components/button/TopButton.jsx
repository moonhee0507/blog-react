import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ArrowTop from "../../assets/ArrowTop.svg";

const StyledButton = styled.button`
	position: fixed;
	bottom: 0;
	right: 0;
	width: 5rem;
	height: 5rem;
	padding-top: 2.2rem;
	border: 0;
	border-radius: var(--border-radius) var(--border-radius) 0 0;
	background: var(--main-color) url(${ArrowTop}) no-repeat 50% 0.3rem / 3rem;
	color: var(--white-color);
	text-align: center;
	font-weight: bold;
`;

function TopButton() {
    const [scrollY, setScrollY] = useState(0);
    const [TopButtonState, setTopButtonState] = useState(false);

    const ShowTopButton = () => {
        setScrollY(window.pageYOffset);
        if (scrollY > 50) {
            setTopButtonState(true);
        } else {
            setTopButtonState(false);
        }
    };

    const handleTopButton = () => {
        window.scrollTo({
            top: 0, 
            behavior: "smooth"
        });
        setScrollY(0);
        setTopButtonState(false);
    };

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', ShowTopButton);
        }
        watch();

        return () => {
            window.removeEventListener('scroll', ShowTopButton);
        }
    });
    
    return (
        TopButtonState 
        ? <StyledButton onClick={handleTopButton}>TOP</StyledButton> 
        : NaN
    );
}

export default TopButton;