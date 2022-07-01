import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data.json";

const Wrapper = styled.div`
    position: relative;
    height: 27em;
    margin-bottom: -7em;
    background: no-repeat 50% 50% / cover;
`;

const StyledMaxwidth = styled.div`
    width: 1224px;
    max-width: calc(100% - 4rem);
    margin: 0 auto;
`;

const Container = styled.div`
    width: 28rem;
    padding: 7rem 0 14.5rem;
    text-align: center;
    color: var(--gray-background-light);

    &::before {
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
    .today {
        padding-left: 0.8em;
        font-size: 5rem;
        font-weight: bold;
        text-align: left;
        line-height: 1.1;
        position: relative;
    }
    em {
        display: block;
        font-size: 2em;
        margin-bottom: -0.15em;
        position: relative;
    }
`;

function PostBackground(props) {
    const { postId } = useParams();
    
    const post = data.posts.find((item) => {
        return item.id == postId;
    });

    const [today, setToday] = useState([]);

    useEffect(() => {
        if (post) {
            const replaceDate = post.created.replace(/\./g, "-");
            const options = {
                weekday: "long",
                month: "long",
                day: "2-digit",
            };
            const formatDate = new Date(replaceDate)
            .toLocaleDateString("en-US", options)
            .split(" ");

            let newToday = [];

            newToday.push(formatDate[1]);

            formatDate[2].length < 2
            ? newToday.push("0" + formatDate[2])
            : newToday.push(formatDate[2]);

            newToday.push(formatDate[0].replace(",", ""));

            setToday(newToday);
        }
    }, [post]);

    
    return (
        <Wrapper style={{backgroundImage: `url(../..${post.contents[1].src})`}}>
                <StyledMaxwidth>
                    <Container>
                        <p className="today">
                            {today[0]} <em>{today[1]}</em> {today[2]}
                        </p>
                    </Container>
                </StyledMaxwidth>
            </Wrapper>
    );
}

export default PostBackground;